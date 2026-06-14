// app.js - Logic luyện tập chính

let currentTopic = "universe";
let currentWordObj = null;
let vocabulary = getVocabulary();
let learnedWords = JSON.parse(localStorage.getItem("learnedWords") || "{}");
let streak = parseInt(localStorage.getItem("streak") || "0");
let lastStudyDate = localStorage.getItem("lastStudyDate") || "";

// Biến cho chức năng xem thêm / thu gọn
let showAllTopics = false;  // false = thu gọn, true = xem tất cả
let currentSearchTerm = "";
let allTopicsList = [];

// DOM elements
const topicContainer = document.getElementById("topic-container");
const vietnameseWordEl = document.getElementById("vietnameseWord");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const speakBtn = document.getElementById("speakBtn");
const randomBtn = document.getElementById("randomBtn");
const resultArea = document.getElementById("resultArea");
const streakCountEl = document.getElementById("streakCount");

// Cập nhật streak
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
    streakCountEl.textContent = streak;
}

// Hiển thị từ hiện tại
function displayWord() {
    if (currentWordObj) {
        vietnameseWordEl.textContent = currentWordObj.vi;
        answerInput.value = "";
        resultArea.innerHTML = "";
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px]";
        answerInput.focus();
    }
}

// Lấy từ ngẫu nhiên từ chủ đề hiện tại
function getRandomWord() {
    const topicWords = vocabulary[currentTopic]?.words || [];
    if (topicWords.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * topicWords.length);
    return topicWords[randomIndex];
}

// Chọn từ mới
function selectNewWord() {
    currentWordObj = getRandomWord();
    displayWord();
}

// Kiểm tra đáp án
function checkAnswer() {
    if (!currentWordObj) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWordObj.en.toLowerCase();
    
    if (userAnswer === correctAnswer) {
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
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }
}

// Tạo danh sách các chủ đề
function buildTopicsList() {
    allTopicsList = Object.keys(vocabulary).map(key => ({
        key: key,
        name: vocabulary[key].name
    }));
    const topicCountSpan = document.getElementById("topicCount");
    if (topicCountSpan) topicCountSpan.textContent = allTopicsList.length;
    return allTopicsList;
}

// Lọc chủ đề theo từ khóa
function filterTopics() {
    const searchTerm = currentSearchTerm.toLowerCase();
    if (!searchTerm) return allTopicsList;
    return allTopicsList.filter(topic => 
        topic.name.toLowerCase().includes(searchTerm) || 
        topic.key.toLowerCase().includes(searchTerm)
    );
}

// Cập nhật nút Xem thêm và Thu gọn
function updateActionButtons() {
    const filtered = filterTopics();
    const hiddenCount = filtered.length - 12;
    const showMoreBtn = document.getElementById("showMoreBtn");
    const collapseBtn = document.getElementById("collapseBtn");
    
    if (!showMoreBtn || !collapseBtn) return;
    
    if (showAllTopics) {
        // Đang xem tất cả → hiện nút Thu gọn
        showMoreBtn.classList.add("hidden");
        collapseBtn.classList.remove("hidden");
    } else {
        // Đang thu gọn
        collapseBtn.classList.add("hidden");
        if (hiddenCount > 0) {
            // Có chủ đề bị ẩn → hiện nút Xem thêm
            showMoreBtn.classList.remove("hidden");
            const hiddenCountSpan = document.getElementById("hiddenCount");
            if (hiddenCountSpan) hiddenCountSpan.textContent = hiddenCount;
            const btnSpan = showMoreBtn.querySelector('span');
            if (btnSpan) btnSpan.textContent = hiddenCount;
        } else {
            // Không có chủ đề bị ẩn → ẩn cả hai nút
            showMoreBtn.classList.add("hidden");
        }
    }
}

// Render chủ đề
function renderTopics() {
    const filtered = filterTopics();
    const maxVisible = showAllTopics ? filtered.length : 12;
    const visibleTopics = filtered.slice(0, maxVisible);
    
    // Cập nhật nút
    updateActionButtons();
    
    // Cập nhật chiều cao container
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
    
    // Render các nút chủ đề
    topicContainer.innerHTML = visibleTopics.map(topic => `
        <button data-topic="${topic.key}" class="topic-chip px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm bg-white/80 hover:bg-white ${currentTopic === topic.key ? 'active' : ''}">
            ${topic.name}
        </button>
    `).join('');
    
    // Gắn sự kiện cho các nút chủ đề
    document.querySelectorAll('.topic-chip').forEach(btn => {
        btn.addEventListener('click', () => {
            currentTopic = btn.dataset.topic;
            highlightActiveTopic();
            selectNewWord();
            
            // 🆕 TỰ ĐỘNG THU GỌN LẠI SAU KHI CHỌN CHỦ ĐỀ
            if (showAllTopics) {
                showAllTopics = false;
                renderTopics();
            }
        });
    });
}

// Xem thêm chủ đề
function showMoreTopics() {
    showAllTopics = true;
    renderTopics();
}

// Thu gọn danh sách
function collapseTopics() {
    showAllTopics = false;
    renderTopics();
}

// Highlight chủ đề đang chọn
function highlightActiveTopic() {
    document.querySelectorAll('.topic-chip').forEach(btn => {
        if (btn.dataset.topic === currentTopic) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Khởi tạo
function init() {
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
    
    // Thanh tìm kiếm
    const searchInput = document.getElementById("topicSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchTerm = e.target.value;
            showAllTopics = false; // Khi tìm kiếm, tự động thu gọn
            renderTopics();
        });
    }
    
    // Nút xem thêm
    const showMoreBtn = document.getElementById("showMoreBtn");
    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", showMoreTopics);
    }
    
    // Nút thu gọn
    const collapseBtn = document.getElementById("collapseBtn");
    if (collapseBtn) {
        collapseBtn.addEventListener("click", collapseTopics);
    }
}

// Khởi chạy
init();