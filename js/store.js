// js/store.js - Quản lý thêm/sửa/xóa từ vựng

// Hàm lấy icon cho từng chủ đề
function getTopicIcon(topicKey) {
    const iconMap = {
        // 1-10
        kitchen: "🍳", life: "🧬", universe: "🌌", animals: "🐾",
        technology: "💻", travel: "✈️", weather: "☀️", school: "📚",
        health: "🏥", jobs: "💼",
        // 11-20
        sports: "⚽", food: "🍜", transport: "🚗", time: "⏰",
        colors: "🎨", family: "👨‍👩‍👧‍👦", shopping: "🛍️", emotions: "😊",
        house: "🏠", plants: "🌿",
        // 21-30
        electronics: "📱", clothing: "👕", neighborhood: "🏘️", hobbies: "🎨",
        office: "💼", ocean: "🌊", agriculture: "🌾", construction: "🏗️",
        politics: "🏛️", economy: "💰",
        // 31-40
        art: "🎭", music: "🎵", cinema: "🎬", history: "📜",
        geography: "🌏", science: "🔬", literature: "📖", philosophy: "🧠",
        religion: "⛪", media: "📺",
        // 41-50
        advertising: "📢", marketing: "📈", business: "🏢", startup: "🚀",
        it: "💻", design: "🎨", employment: "💼", idioms: "💬",
        backpacking: "🎒", yoga: "🧘",
        // 51-60
        wellness: "💪", beauty: "💄", pets: "🐕", events: "🎉",
        holidays: "🎊", vietnamese_cuisine: "🍜", korean_cuisine: "🍲",
        japanese_cuisine: "🍱", chinese_cuisine: "🥟", western_cuisine: "🍔",
        // 61-70
        kpop: "🎤", gaming: "🎮", esports: "🏆", crypto: "₿",
        ai: "🤖", web3: "🌐", anime: "🎌", superhero: "🦸",
        scifi: "👽", horror: "👻",
        // 71-80
        football: "⚽", basketball: "🏀", swimming: "🏊", badminton: "🏸",
        tennis: "🎾", martial_arts: "🥋", bodybuilding: "💪", dance: "💃",
        golf: "🏌️", extreme_sports: "🪂",
        // 81-90
        chess: "♟️", road_traffic: "🚦", vehicles: "🚗", military: "🪖",
        government: "🏛️", macroeconomics: "📊", personal_finance: "💰",
        stock_investing: "📈", real_estate: "🏠", ecommerce: "🛒",
        // 91-100
        digital_marketing: "📱", business_management: "🏢", soft_skills: "🌟",
        self_development: "🌱", psychology: "🧠", medicine: "💊",
        nutrition: "🥗", traditional_medicine: "🌿", physical_therapy: "🦿",
        first_aid: "🩹"
    };
    return iconMap[topicKey] || "📁";
}

// Hiển thị danh sách từ vựng
function renderWordList() {
    const container = document.getElementById('wordList');
    if (!container) return;
    
    const currentStoreData = getVocabulary();
    container.innerHTML = '';

    for (let topic in currentStoreData) {
        const topicData = currentStoreData[topic];
        const topicDiv = document.createElement('div');
        topicDiv.className = 'mb-6';
        
        const icon = getTopicIcon(topic);
        topicDiv.innerHTML = `<h3 class="text-lg font-bold text-gray-800 mb-3">${icon} ${topicData.name}</h3>`;
        
        topicData.words.forEach((word, idx) => {
            const wordRow = document.createElement('div');
            wordRow.className = 'word-row';
            wordRow.innerHTML = `
                <span class="flex-1 break-words"><span class="font-semibold">${escapeHtml(word.vi)}</span> → ${escapeHtml(word.en)}</span>
                <div class="flex gap-2 flex-shrink-0">
                    <button class="edit-btn bg-indigo-100 text-indigo-700 px-3 py-1 rounded-lg text-sm hover:bg-indigo-200 transition" data-topic="${topic}" data-idx="${idx}">
                        <i class="fas fa-edit"></i> Sửa
                    </button>
                    <button class="delete-btn bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm hover:bg-red-200 transition" data-topic="${topic}" data-idx="${idx}">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            `;
            topicDiv.appendChild(wordRow);
        });
        container.appendChild(topicDiv);
    }
}

// Escape HTML để tránh lỗi
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Thêm từ mới
document.getElementById('addWordBtn')?.addEventListener('click', () => {
    const vi = document.getElementById('newVi').value.trim();
    const en = document.getElementById('newEn').value.trim();
    const topic = document.getElementById('newTopic').value;

    if (!vi || !en) {
        alert("Vui lòng nhập đầy đủ tiếng Việt và tiếng Anh!");
        return;
    }

    let currentStoreData = getVocabulary();
    
    // Kiểm tra xem chủ đề có tồn tại không
    if (!currentStoreData[topic]) {
        alert("Chủ đề không tồn tại!");
        return;
    }
    
    currentStoreData[topic].words.push({ vi, en });
    saveVocabulary(currentStoreData);
    renderWordList();
    
    document.getElementById('newVi').value = '';
    document.getElementById('newEn').value = '';
    alert("✅ Đã thêm từ mới thành công!");
});

// Xóa và sửa từ (event delegation)
document.getElementById('wordList')?.addEventListener('click', (e) => {
    // Xử lý nút Xóa
    if (e.target.classList.contains('delete-btn') || e.target.parentElement?.classList.contains('delete-btn')) {
        const btn = e.target.classList.contains('delete-btn') ? e.target : e.target.parentElement;
        const topic = btn.dataset.topic;
        const idx = parseInt(btn.dataset.idx);
        
        if (confirm("Bạn có chắc muốn xóa từ này?")) {
            let currentStoreData = getVocabulary();
            currentStoreData[topic].words.splice(idx, 1);
            saveVocabulary(currentStoreData);
            renderWordList();
            alert("🗑️ Đã xóa từ!");
        }
    }

    // Xử lý nút Sửa
    if (e.target.classList.contains('edit-btn') || e.target.parentElement?.classList.contains('edit-btn')) {
        const btn = e.target.classList.contains('edit-btn') ? e.target : e.target.parentElement;
        const topic = btn.dataset.topic;
        const idx = parseInt(btn.dataset.idx);
        let currentStoreData = getVocabulary();
        const word = currentStoreData[topic].words[idx];
        
        const newVi = prompt("Sửa tiếng Việt:", word.vi);
        const newEn = prompt("Sửa tiếng Anh:", word.en);
        
        if (newVi && newEn) {
            currentStoreData[topic].words[idx] = { vi: newVi, en: newEn };
            saveVocabulary(currentStoreData);
            renderWordList();
            alert("✏️ Đã cập nhật từ!");
        }
    }
});

// Khởi tạo
renderWordList();