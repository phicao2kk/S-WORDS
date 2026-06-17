// app.js - Logic luyện tập chính

let currentTopic = "universe";
let currentWordObj = null;
let vocabulary = getVocabulary();
let learnedWords = JSON.parse(localStorage.getItem("learnedWords") || "{}");
let streak = parseInt(localStorage.getItem("streak") || "0");
let lastStudyDate = localStorage.getItem("lastStudyDate") || "";

// Biến cho chức năng xem thêm / thu gọn
let showAllTopics = false;
let currentSearchTerm = "";
let allTopicsList = [];

// ==================== ÂM THANH (Web Audio API - Max 100%) ====================
let audioCtx = null;

// Khởi tạo Audio Context
function initAudio() {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch(e) {
            console.log('Audio init error:', e);
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Phát âm thanh đúng - Tiếng chuông vui (MAX VOLUME)
function playCorrectSound() {
    try {
        initAudio();
        if (!audioCtx) return;
        
        const now = audioCtx.currentTime;
        
        // Tạo 3 nốt nhạc vui: C4 - E4 - G4
        const notes = [523.25, 659.25, 783.99];
        const durations = [0.12, 0.12, 0.15];
        const startTimes = [0, 0.12, 0.24];
        
        notes.forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + startTimes[i]);
            
            // Âm lượng MAX = 0.5 (để không bị quá to, vẫn nghe rõ)
            gain.gain.setValueAtTime(0.5, now + startTimes[i]);
            gain.gain.exponentialRampToValueAtTime(0.001, now + startTimes[i] + durations[i]);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(now + startTimes[i]);
            osc.stop(now + startTimes[i] + durations[i]);
        });
    } catch(e) {
        console.log('Correct sound error:', e);
    }
}

// Phát âm thanh sai - Tiếng buzz (MAX VOLUME)
function playWrongSound() {
    try {
        initAudio();
        if (!audioCtx) return;
        
        const now = audioCtx.currentTime;
        
        // Tạo âm thanh sai (sawtooth)
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.setValueAtTime(150, now + 0.15);
        osc.frequency.setValueAtTime(100, now + 0.3);
        
        gain.gain.setValueAtTime(0.4, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
        
        // Thêm hiệu ứng âm thanh rè
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(80, now);
        gain2.gain.setValueAtTime(0.15, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        
        osc.start(now);
        osc.stop(now + 0.45);
        osc2.start(now);
        osc2.stop(now + 0.4);
    } catch(e) {
        console.log('Wrong sound error:', e);
    }
}

// ==================== DOM elements ====================
const topicContainer = document.getElementById("topic-container");
const vietnameseWordEl = document.getElementById("vietnameseWord");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const speakBtn = document.getElementById("speakBtn");
const randomBtn = document.getElementById("randomBtn");
const resultArea = document.getElementById("resultArea");
const streakCountEl = document.getElementById("streakCount");
const currentTopicNameEl = document.getElementById("currentTopicName");

// ==================== Cập nhật streak ====================
function updateStreak() {
    const today = new Date().toDateString();
    if (lastStudyDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastStudyDate === yesterday.toDateString()) {
            streak++;
        } else {
            streak = 1;
        }
        lastStudyDate = today;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastStudyDate", lastStudyDate);
    }
    if (streakCountEl) streakCountEl.textContent = streak;
}

// ==================== Cập nhật tên chủ đề ====================
function updateTopicName() {
    if (currentTopicNameEl && vocabulary[currentTopic]) {
        const topicName = vocabulary[currentTopic].name;
        currentTopicNameEl.innerHTML = `📚 Chủ đề: <span class="font-bold">${topicName}</span>`;
    }
}

// ==================== Hiển thị từ ====================
function displayWord() {
    if (currentWordObj) {
        vietnameseWordEl.textContent = currentWordObj.vi;
        answerInput.value = "";
        resultArea.innerHTML = "";
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px]";
        answerInput.focus();
        updateTopicName();
    }
}

// ==================== Lấy từ ngẫu nhiên ====================
function getRandomWord() {
    const topicWords = vocabulary[currentTopic]?.words || [];
    if (topicWords.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * topicWords.length);
    return topicWords[randomIndex];
}

function selectNewWord() {
    currentWordObj = getRandomWord();
    displayWord();
}

// ==================== Kiểm tra đáp án ====================
function checkAnswer() {
    if (!currentWordObj) return;
    
    // Khởi tạo audio khi người dùng tương tác lần đầu
    initAudio();
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWordObj.en.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        // PHÁT ÂM THANH ĐÚNG
        playCorrectSound();
        
        resultArea.innerHTML = `
            <div class="correct-answer text-white p-4 rounded-xl text-center">
                <i class="fas fa-check-circle text-2xl mb-2"></i>
                <p class="font-bold">🎉 Chính xác! "${currentWordObj.en}"</p>
                <p class="text-sm opacity-90">Tiếp tục phát huy nhé!</p>
            </div>
        `;
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px] correct-answer text-white";
        
        const key = `${currentTopic}_${currentWordObj.en}`;
        if (!learnedWords[key]) {
            learnedWords[key] = true;
            localStorage.setItem("learnedWords", JSON.stringify(learnedWords));
        }
        
        updateStreak();
        
        canvasConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        setTimeout(() => {
            selectNewWord();
        }, 1500);
    } else {
        // PHÁT ÂM THANH SAI
        playWrongSound();
        
        if (typeof addWrongWord === 'function') {
            addWrongWord(currentWordObj.vi, currentWordObj.en, currentTopic);
        }
        
        let suggestion = "";
        if (correctAnswer.length > 0 && userAnswer.length > 0) {
            if (correctAnswer[0] === userAnswer[0]) {
                suggestion = `<div class="suggestion-tip p-3 rounded-lg mt-3 text-sm text-gray-800">💡 Gợi ý: Từ bắt đầu bằng chữ <strong class="text-indigo-700">"${correctAnswer[0]}"</strong>, hãy thử lại!</div>`;
            } else {
                suggestion = `<div class="suggestion-tip p-3 rounded-lg mt-3 text-sm text-gray-800">💡 Gợi ý: Từ này bắt đầu bằng chữ <strong class="text-indigo-700">"${correctAnswer[0]}"</strong></div>`;
            }
        }
        
        resultArea.innerHTML = `
            <div class="wrong-answer text-white p-4 rounded-xl text-center">
                <i class="fas fa-times-circle text-2xl mb-2"></i>
                <p class="font-bold">❌ Chưa đúng!</p>
                <p class="text-sm opacity-90">Đáp án đúng là: <strong class="text-yellow-200">"${correctAnswer}"</strong></p>
                ${suggestion}
            </div>
        `;
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px] wrong-answer text-white";
        
        answerInput.classList.add('shake');
        setTimeout(() => {
            answerInput.classList.remove('shake');
        }, 300);
    }
}

// ==================== Các hàm điều hướng ====================
function nextWord() {
    selectNewWord();
}

function randomWord() {
    const topics = Object.keys(vocabulary);
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    currentTopic = randomTopic;
    highlightActiveTopic();
    selectNewWord();
}

function speakWord() {
    if (currentWordObj && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(currentWordObj.en);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        utterance.volume = 1; // MAX VOLUME
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }
}

// ==================== Quản lý chủ đề ====================
function buildTopicsList() {
    allTopicsList = Object.keys(vocabulary).map(key => ({
        key: key,
        name: vocabulary[key].name
    }));
    const topicCountSpan = document.getElementById("topicCount");
    if (topicCountSpan) topicCountSpan.textContent = allTopicsList.length;
    return allTopicsList;
}

function filterTopics() {
    const searchTerm = currentSearchTerm.toLowerCase();
    if (!searchTerm) return allTopicsList;
    return allTopicsList.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm) || 
        topic.key.toLowerCase().includes(searchTerm)
    );
}

function updateActionButtons() {
    const filtered = filterTopics();
    const hiddenCount = filtered.length - 12;
    const showMoreBtn = document.getElementById("showMoreBtn");
    const collapseBtn = document.getElementById("collapseBtn");
    
    if (!showMoreBtn || !collapseBtn) return;
    
    if (showAllTopics) {
        showMoreBtn.classList.add("hidden");
        collapseBtn.classList.remove("hidden");
    } else {
        collapseBtn.classList.add("hidden");
        if (hiddenCount > 0) {
            showMoreBtn.classList.remove("hidden");
            const hiddenCountSpan = document.getElementById("hiddenCount");
            if (hiddenCountSpan) hiddenCountSpan.textContent = hiddenCount;
            const btnSpan = showMoreBtn.querySelector('span');
            if (btnSpan) btnSpan.textContent = hiddenCount;
        } else {
            showMoreBtn.classList.add("hidden");
        }
    }
}

function renderTopics() {
    const filtered = filterTopics();
    const maxVisible = showAllTopics ? filtered.length : 12;
    const visibleTopics = filtered.slice(0, maxVisible);
    
    updateActionButtons();
    
    const container = document.getElementById("topic-container");
    if (container) {
        if (!showAllTopics) {
            container.classList.add("max-h-32", "overflow-y-auto");
            container.classList.remove("max-h-none");
        } else {
            container.classList.remove("max-h-32", "overflow-y-auto");
            container.classList.add("max-h-none");
        }
    }
    
    topicContainer.innerHTML = visibleTopics.map(topic => `
        <button data-topic="${topic.key}" class="topic-chip px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm bg-white/80 hover:bg-white ${currentTopic === topic.key ? 'active' : ''}">
            ${topic.name}
        </button>
    `).join('');
    
    document.querySelectorAll('.topic-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTopic = btn.dataset.topic;
            highlightActiveTopic();
            selectNewWord();
            
            if (showAllTopics) {
                showAllTopics = false;
                renderTopics();
            }
        });
    });
}

function showMoreTopics() {
    showAllTopics = true;
    renderTopics();
}

function collapseTopics() {
    showAllTopics = false;
    renderTopics();
}

function highlightActiveTopic() {
    document.querySelectorAll('.topic-chip').forEach(btn => {
        if (btn.dataset.topic === currentTopic) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    updateTopicName();
}

// ==================== Khởi tạo ====================
function init() {
    // Khởi tạo audio khi người dùng click vào trang
    document.addEventListener('click', () => {
        initAudio();
    }, { once: false });
    
    buildTopicsList();
    renderTopics();
    selectNewWord();
    updateStreak();
    
    checkBtn.addEventListener("click", checkAnswer);
    nextBtn.addEventListener("click", nextWord);
    speakBtn.addEventListener("click", speakWord);
    randomBtn.addEventListener("click", randomWord);
    answerInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkAnswer();
    });
    
    const searchInput = document.getElementById("topicSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value;
            showAllTopics = false;
            renderTopics();
        });
    }
    
    const showMoreBtn = document.getElementById("showMoreBtn");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", showMoreTopics);
    }
    
    const collapseBtn = document.getElementById("collapseBtn");
    if (collapseBtn) {
        collapseBtn.addEventListener("click", collapseTopics);
    }
}

// Khởi chạy
init();
