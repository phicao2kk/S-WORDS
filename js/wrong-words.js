// wrong-words.js - Xử lý trang ôn tập từ sai

let currentWrongWords = [];      // Danh sách từ sai hiện tại (đã lọc)
let currentIndex = 0;            // Vị trí từ đang học
let currentWord = null;          // Từ hiện tại
let currentFilter = "all";       // Bộ lọc chủ đề

// DOM elements
const vietnameseWordEl = document.getElementById("vietnameseWord");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const speakBtn = document.getElementById("speakBtn");
const resultArea = document.getElementById("resultArea");
const totalWrongCountEl = document.getElementById("totalWrongCount");
const topicFilter = document.getElementById("topicFilter");
const clearAllBtn = document.getElementById("clearAllBtn");
const wrongCountValue = document.getElementById("wrongCountValue");
const wrongWordsListEl = document.getElementById("wrongWordsList");

// Hàm đọc từ (text-to-speech)
function speakWord(word) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    }
}

// Cập nhật danh sách từ sai và làm mới UI
function refreshWrongWordsList() {
    let allWrong = getWrongWords();
    
    // Lọc theo chủ đề
    if (currentFilter !== "all") {
        allWrong = allWrong.filter(w => w.topic === currentFilter);
    }
    
    currentWrongWords = allWrong;
    currentIndex = 0;
    
    // Cập nhật thống kê
    totalWrongCountEl.textContent = currentWrongWords.length;
    
    // Cập nhật dropdown chủ đề
    updateTopicFilter();
    
    // Hiển thị danh sách
    renderWrongWordsList();
    
    // Hiển thị từ đầu tiên hoặc thông báo trống
    if (currentWrongWords.length > 0) {
        currentWord = currentWrongWords[0];
        displayCurrentWord();
        answerInput.disabled = false;
        checkBtn.disabled = false;
        nextBtn.disabled = false;
    } else {
        // Không có từ sai
        vietnameseWordEl.textContent = "🎉";
        resultArea.innerHTML = `
            <div class="text-center p-6">
                <i class="fas fa-trophy text-5xl text-yellow-500 mb-3"></i>
                <p class="text-green-600 font-bold text-lg">Chúc mừng bạn!</p>
                <p class="text-gray-600">Không còn từ nào cần ôn tập. Bạn đã học thuộc hết rồi!</p>
                <a href="index.html" class="inline-block mt-4 btn-primary text-white px-6 py-2 rounded-xl">Về trang chính</a>
            </div>
        `;
        answerInput.disabled = true;
        checkBtn.disabled = true;
        nextBtn.disabled = true;
        wrongCountValue.textContent = "0";
    }
}

// Hiển thị từ hiện tại
function displayCurrentWord() {
    if (currentWord) {
        vietnameseWordEl.textContent = currentWord.vi;
        answerInput.value = "";
        resultArea.innerHTML = "";
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px]";
        wrongCountValue.textContent = currentWord.wrongCount || 1;
        answerInput.focus();
    }
}

// Render danh sách từ sai (bảng bên dưới)
function renderWrongWordsList() {
    if (!wrongWordsListEl) return;
    
    if (currentWrongWords.length === 0) {
        wrongWordsListEl.innerHTML = `
            <div class="text-center text-gray-400 py-8">
                <i class="fas fa-smile text-3xl mb-2"></i>
                <p>Không có từ nào cần ôn tập!</p>
            </div>
        `;
        return;
    }
    
    wrongWordsListEl.innerHTML = currentWrongWords.map((word, idx) => `
        <div class="flex justify-between items-center p-4 ${idx === currentIndex ? 'bg-indigo-50 border-l-4 border-indigo-500' : 'hover:bg-gray-50'} rounded-xl transition-all">
            <div class="flex-1">
                <div class="font-bold text-gray-800">${word.vi}</div>
                <div class="text-sm text-gray-500">${word.en}</div>
                <div class="text-xs text-gray-400 mt-1">
                    <span class="inline-block px-2 py-0.5 bg-orange-100 text-orange-600 rounded-full text-xs">
                        <i class="fas fa-fire mr-1"></i> Sai ${word.wrongCount || 1} lần
                    </span>
                    <span class="ml-2 text-gray-400">📂 ${getTopicName(word.topic)}</span>
                </div>
            </div>
            <div class="flex gap-2">
                <button onclick="jumpToWord(${idx})" class="text-indigo-500 hover:text-indigo-700 px-3 py-1 rounded-lg hover:bg-indigo-50 transition">
                    <i class="fas fa-play"></i> Học
                </button>
                <button onclick="removeThisWord('${escapeHtml(word.vi)}', '${escapeHtml(word.en)}')" class="text-green-500 hover:text-green-700 px-3 py-1 rounded-lg hover:bg-green-50 transition">
                    <i class="fas fa-check"></i> Đã thuộc
                </button>
            </div>
        </div>
    `).join('');
}

// Escape HTML để tránh lỗi
function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function(c) {
        return c;
    });
}

// Lấy tên chủ đề từ key
function getTopicName(topicKey) {
    const topics = {
        kitchen: "🍳 Nhà bếp", life: "🧬 Đời sống", universe: "🌌 Vũ trụ", animals: "🐾 Động vật",
        technology: "💻 Công nghệ", travel: "✈️ Du lịch", weather: "☀️ Thời tiết", school: "📚 Trường học",
        health: "🏥 Y tế", jobs: "💼 Nghề nghiệp", sports: "⚽ Thể thao", food: "🍜 Ẩm thực",
        transport: "🚗 Giao thông", time: "⏰ Thời gian", colors: "🎨 Màu sắc", family: "👨‍👩‍👧‍👦 Gia đình",
        shopping: "🛍️ Mua sắm", emotions: "😊 Cảm xúc", house: "🏠 Nhà cửa", plants: "🌿 Cây cối",
        electronics: "📱 Điện tử", clothing: "👕 Quần áo", neighborhood: "🏘️ Làng xóm", hobbies: "🎨 Sở thích",
        office: "💼 Công sở", ocean: "🌊 Biển", agriculture: "🌾 Nông nghiệp", construction: "🏗️ Xây dựng",
        politics: "🏛️ Chính trị", economy: "💰 Kinh tế", art: "🎭 Nghệ thuật", music: "🎵 Âm nhạc",
        cinema: "🎬 Điện ảnh", history: "📜 Lịch sử", geography: "🌏 Địa lý", science: "🔬 Khoa học",
        literature: "📖 Văn học", philosophy: "🧠 Triết học", religion: "⛪ Tôn giáo", media: "📺 Truyền thông",
        advertising: "📢 Quảng cáo", marketing: "📈 Marketing", business: "🏢 Kinh doanh", startup: "🚀 Khởi nghiệp",
        it: "💻 Công nghệ thông tin", design: "🎨 Thiết kế", employment: "💼 Việc làm", idioms: "💬 Thành ngữ",
        backpacking: "🎒 Du lịch bụi", yoga: "🧘 Yoga", wellness: "💪 Chăm sóc sức khỏe", beauty: "💄 Làm đẹp",
        pets: "🐕 Thú cưng", events: "🎉 Sự kiện", holidays: "🎊 Lễ tết", vietnamese_cuisine: "🍜 Ẩm thực Việt",
        korean_cuisine: "🍲 Ẩm thực Hàn", japanese_cuisine: "🍱 Ẩm thực Nhật", chinese_cuisine: "🥟 Ẩm thực Trung",
        western_cuisine: "🍔 Ẩm thực phương Tây", kpop: "🎤 K-POP", gaming: "🎮 Game", esports: "🏆 Esports"
    };
    return topics[topicKey] || topicKey || "Chủ đề khác";
}

// Nhảy đến một từ trong danh sách
window.jumpToWord = function(index) {
    if (index >= 0 && index < currentWrongWords.length) {
        currentIndex = index;
        currentWord = currentWrongWords[currentIndex];
        displayCurrentWord();
        renderWrongWordsList();
        // Cuộn đến vị trí
        const elements = document.querySelectorAll('.word-row-item');
        if (elements[index]) {
            elements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
};

// Xóa một từ khỏi danh sách sai
window.removeThisWord = function(vi, en) {
    removeWrongWord(vi, en);
    refreshWrongWordsList();
    
    // Hiệu ứng confetti nhẹ
    canvasConfetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#10b981', '#34d399', '#059669']
    });
};

// Cập nhật dropdown lọc chủ đề
function updateTopicFilter() {
    const allWrong = getWrongWords();
    const topics = [...new Set(allWrong.map(w => w.topic).filter(t => t))];
    
    let options = '<option value="all">📋 Tất cả chủ đề</option>';
    topics.forEach(topic => {
        const count = allWrong.filter(w => w.topic === topic).length;
        const topicName = getTopicName(topic);
        options += `<option value="${topic}" ${currentFilter === topic ? 'selected' : ''}>${topicName} (${count})</option>`;
    });
    
    if (topicFilter) {
        topicFilter.innerHTML = options;
    }
}

// Xử lý kiểm tra đáp án
function checkAnswer() {
    if (!currentWord) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWord.en.toLowerCase();
    
    if (userAnswer === correctAnswer) {
        // Đáp án đúng - xóa từ khỏi danh sách sai
        resultArea.innerHTML = `
            <div class="correct-answer text-white p-4 rounded-xl text-center">
                <i class="fas fa-check-circle text-2xl mb-2"></i>
                <p class="font-bold">🎉 Chính xác! "${currentWord.en}"</p>
                <p class="text-sm opacity-90">Bạn đã nhớ từ này rồi! Đã xóa khỏi danh sách ôn tập.</p>
            </div>
        `;
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px] correct-answer text-white";
        
        // Xóa khỏi danh sách sai
        removeWrongWord(currentWord.vi, currentWord.en);
        
        // Chuyển sang từ tiếp theo sau 1.5 giây
        setTimeout(() => {
            refreshWrongWordsList();
        }, 1500);
    } else {
        // Đáp án sai - tăng số lần sai
        resultArea.innerHTML = `
            <div class="wrong-answer text-white p-4 rounded-xl text-center">
                <i class="fas fa-times-circle text-2xl mb-2"></i>
                <p class="font-bold">❌ Chưa đúng!</p>
                <p class="text-sm opacity-90">Đáp án đúng là: <strong class="text-yellow-200">"${currentWord.en}"</strong></p>
                <p class="text-xs mt-2">Tiếp tục cố gắng nhé! 💪</p>
            </div>
        `;
        resultArea.className = "rounded-2xl p-4 transition-all min-h-[100px] wrong-answer text-white";
        
        // Cập nhật lại số lần sai
        let wrongWords = getWrongWords();
        const existingIndex = wrongWords.findIndex(w => w.vi === currentWord.vi && w.en === currentWord.en);
        if (existingIndex !== -1) {
            wrongWords[existingIndex].wrongCount = (wrongWords[existingIndex].wrongCount || 1) + 1;
            wrongWords[existingIndex].lastWrongTime = Date.now();
            saveWrongWords(wrongWords);
            currentWord.wrongCount = wrongWords[existingIndex].wrongCount;
            wrongCountValue.textContent = currentWord.wrongCount;
        }
        
        // Hiệu ứng rung nhẹ cho input
        answerInput.classList.add('shake');
        setTimeout(() => {
            answerInput.classList.remove('shake');
        }, 300);
        
        // Không tự động chuyển, user phải nhấn tiếp theo
    }
}

// Chuyển sang từ tiếp theo
function nextWord() {
    if (currentWrongWords.length === 0) {
        refreshWrongWordsList();
        return;
    }
    
    // Tìm vị trí tiếp theo (có thể index đã thay đổi do xóa)
    const newIndex = currentWrongWords.findIndex(w => w.vi === currentWord?.vi && w.en === currentWord?.en);
    
    if (newIndex !== -1 && newIndex + 1 < currentWrongWords.length) {
        currentIndex = newIndex + 1;
    } else if (newIndex !== -1 && newIndex + 1 >= currentWrongWords.length) {
        currentIndex = 0;
    } else {
        currentIndex = 0;
    }
    
    if (currentWrongWords.length > 0 && currentIndex < currentWrongWords.length) {
        currentWord = currentWrongWords[currentIndex];
        displayCurrentWord();
        renderWrongWordsList();
    } else {
        refreshWrongWordsList();
    }
}

// Xóa tất cả từ sai
function clearAllWrong() {
    if (confirm("Bạn có chắc chắn muốn xóa TẤT CẢ các từ khỏi danh sách ôn tập?")) {
        clearAllWrongWords();
        refreshWrongWordsList();
        canvasConfetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ef4444', '#f97316', '#f59e0b']
        });
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    refreshWrongWordsList();
    
    checkBtn.addEventListener("click", checkAnswer);
    nextBtn.addEventListener("click", nextWord);
    speakBtn.addEventListener("click", () => {
        if (currentWord) speakWord(currentWord.en);
    });
    
    answerInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            checkAnswer();
        }
    });
    
    if (topicFilter) {
        topicFilter.addEventListener("change", (e) => {
            currentFilter = e.target.value;
            refreshWrongWordsList();
        });
    }
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", clearAllWrong);
    }
});