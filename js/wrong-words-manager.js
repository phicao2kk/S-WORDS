// wrong-words-manager.js - Quản lý các câu sai để ôn tập

// Key lưu trữ trong localStorage
const WRONG_WORDS_KEY = "wrongWordsList";

// Cấu trúc mỗi từ sai: { vi, en, topic, wrongCount, lastWrongTime }

// Lấy danh sách từ sai
function getWrongWords() {
    const stored = localStorage.getItem(WRONG_WORDS_KEY);
    if (!stored) return [];
    try {
        return JSON.parse(stored);
    } catch(e) {
        return [];
    }
}

// Lưu danh sách từ sai
function saveWrongWords(wrongWords) {
    localStorage.setItem(WRONG_WORDS_KEY, JSON.stringify(wrongWords));
}

// Thêm từ vào danh sách sai (hoặc tăng số lần sai nếu đã tồn tại)
function addWrongWord(vi, en, topic) {
    let wrongWords = getWrongWords();
    const existingIndex = wrongWords.findIndex(w => w.vi === vi && w.en === en);
    
    if (existingIndex !== -1) {
        // Tăng số lần sai
        wrongWords[existingIndex].wrongCount = (wrongWords[existingIndex].wrongCount || 1) + 1;
        wrongWords[existingIndex].lastWrongTime = Date.now();
    } else {
        // Thêm mới
        wrongWords.push({
            vi: vi,
            en: en,
            topic: topic,
            wrongCount: 1,
            lastWrongTime: Date.now()
        });
    }
    
    saveWrongWords(wrongWords);
    updateWrongCountBadge();
    return wrongWords;
}

// Xóa từ khỏi danh sách sai (khi đã học thuộc)
function removeWrongWord(vi, en) {
    let wrongWords = getWrongWords();
    const newList = wrongWords.filter(w => !(w.vi === vi && w.en === en));
    saveWrongWords(newList);
    updateWrongCountBadge();
    return newList;
}

// Xóa tất cả từ sai (khi muốn reset)
function clearAllWrongWords() {
    saveWrongWords([]);
    updateWrongCountBadge();
}

// Lấy số lượng từ sai
function getWrongWordsCount() {
    return getWrongWords().length;
}

// Cập nhật badge hiển thị số lượng trên thanh nav
function updateWrongCountBadge() {
    const badge = document.getElementById("wrongCountBadge");
    if (badge) {
        const count = getWrongWordsCount();
        if (count > 0) {
            badge.textContent = count > 99 ? "99+" : count;
            badge.classList.remove("hidden");
        } else {
            badge.classList.add("hidden");
        }
    }
}

// Lấy danh sách từ sai theo chủ đề (để lọc)
function getWrongWordsByTopic(topic) {
    const wrongWords = getWrongWords();
    if (!topic) return wrongWords;
    return wrongWords.filter(w => w.topic === topic);
}

// Lấy danh sách các chủ đề có từ sai
function getTopicsWithWrongWords() {
    const wrongWords = getWrongWords();
    const topics = new Set();
    wrongWords.forEach(w => {
        if (w.topic) topics.add(w.topic);
    });
    return Array.from(topics);
}

// Khởi tạo badge khi trang load
document.addEventListener("DOMContentLoaded", function() {
    updateWrongCountBadge();
});