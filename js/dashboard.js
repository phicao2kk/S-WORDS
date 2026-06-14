// dashboard.js - Thống kê và biểu đồ

const vocabulary = getVocabulary();
const learnedWords = JSON.parse(localStorage.getItem("learnedWords") || "{}");
const wrongWords = getWrongWords(); // Từ wrong-words-manager.js

// Tính tổng số từ
function getTotalWords() {
    let total = 0;
    for (let topic in vocabulary) {
        total += vocabulary[topic].words.length;
    }
    return total;
}

// Tính số từ đã học
function getLearnedCount() {
    return Object.keys(learnedWords).length;
}

// Tính tỉ lệ nhớ (dựa trên từ sai)
function getMemoryRate() {
    const learned = getLearnedCount();
    const wrongCount = wrongWords.length;
    if (learned === 0) return 0;
    const correctRate = ((learned - wrongCount) / learned) * 100;
    return Math.max(0, Math.min(100, Math.round(correctRate)));
}

// Cập nhật thống kê
function updateStats() {
    document.getElementById("totalWords").textContent = getTotalWords();
    document.getElementById("learnedWords").textContent = getLearnedCount();
    document.getElementById("memoryRate").textContent = getMemoryRate() + "%";
}

// Vẽ biểu đồ tiến độ theo chủ đề
function renderChart() {
    const chartContainer = document.getElementById("progressChart");
    if (!chartContainer) return;
    
    let topicsData = [];
    for (let topicKey in vocabulary) {
        const topic = vocabulary[topicKey];
        const total = topic.words.length;
        let learned = 0;
        topic.words.forEach(word => {
            const key = `${topicKey}_${word.en}`;
            if (learnedWords[key]) learned++;
        });
        const percent = total === 0 ? 0 : Math.round((learned / total) * 100);
        topicsData.push({
            name: topic.name.split(' - ')[0],
            key: topicKey,
            learned: learned,
            total: total,
            percent: percent
        });
    }
    
    // Sắp xếp theo % giảm dần
    topicsData.sort((a, b) => b.percent - a.percent);
    
    // Lấy top 8 chủ đề để hiển thị
    const topTopics = topicsData.slice(0, 8);
    
    let html = `
        <div class="space-y-4">
            <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i class="fas fa-chart-simple text-indigo-500"></i> Tiến độ học theo chủ đề
            </h3>
    `;
    
    topTopics.forEach(topic => {
        let barColor = "bg-gradient-to-r from-indigo-500 to-purple-500";
        if (topic.percent >= 80) barColor = "bg-gradient-to-r from-green-500 to-emerald-500";
        else if (topic.percent >= 50) barColor = "bg-gradient-to-r from-blue-500 to-cyan-500";
        else if (topic.percent >= 30) barColor = "bg-gradient-to-r from-yellow-500 to-orange-500";
        else barColor = "bg-gradient-to-r from-gray-400 to-gray-500";
        
        html += `
            <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                    <span class="font-medium text-gray-700">${topic.name}</span>
                    <span class="text-gray-500">${topic.learned}/${topic.total} (${topic.percent}%)</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div class="${barColor} h-3 rounded-full transition-all duration-500" style="width: ${topic.percent}%"></div>
                </div>
            </div>
        `;
    });
    
    // Thêm thông tin về từ sai
    const wrongCount = wrongWords.length;
    html += `
        <div class="mt-6 pt-4 border-t border-gray-200">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <i class="fas fa-exclamation-triangle text-orange-500"></i>
                    <span class="font-medium text-gray-700">Từ cần ôn tập:</span>
                </div>
                <div class="text-orange-600 font-bold text-xl">${wrongCount}</div>
            </div>
            ${wrongCount > 0 ? `
                <div class="mt-2 text-sm text-gray-500">
                    <i class="fas fa-info-circle mr-1"></i>
                    Bạn có <strong>${wrongCount}</strong> từ đã trả lời sai. Hãy vào mục <strong>"Ôn tập câu sai"</strong> để luyện thêm nhé!
                </div>
                <a href="wrong-words.html" class="inline-block mt-3 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    <i class="fas fa-arrow-right mr-1"></i> Ôn tập ngay
                </a>
            ` : `
                <div class="mt-2 text-sm text-green-600">
                    <i class="fas fa-check-circle mr-1"></i>
                    Tuyệt vời! Không có từ nào cần ôn tập.
                </div>
            `}
        </div>
    `;
    
    html += `</div>`;
    chartContainer.innerHTML = html;
}

// Khởi tạo
function initDashboard() {
    updateStats();
    renderChart();
}

initDashboard();