// ⚠️ 重要：請將下面的 YOUR_GROQ_API_KEY 替換成你的真實 Groq API Key
const API_KEY = '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';
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// 壽豐景點資料庫（14個景點）
const shoufengData = {
    spots: [
        // 簡單景點
        {
            name: '壽豐火車站',
            difficulty: '簡單',
            description: '建於1909年的日式木造車站，充滿懷舊氛圍',
            activities: '拍照打卡、體驗日式建築、看火車進站',
            tips: '建議搭火車來訪更有感覺，傍晚光線最適合拍照',
            route: '文化體驗'
        },
        {
            name: '豐田火車站',
            difficulty: '簡單',
            description: '客家移民村的鐵道記憶，見證開墾歷史',
            activities: '車站拍照、周邊散步、順遊豐田神社',
            tips: '可以和豐田神社、豐裡國小一起遊覽',
            route: '文化體驗'
        },
        {
            name: '豐春冰菓店',
            difficulty: '簡單',
            description: '70年老店，古早味刨冰的代表',
            activities: '品嚐傳統刨冰、體驗在地美食文化',
            food: '綜合冰（紅豆、綠豆、粉粿、愛玉）',
            tips: '份量超大建議兩人分食，夏天排隊人潮多',
            route: '特色體驗'
        },
        {
            name: '五味屋',
            difficulty: '簡單',
            description: '孩子們經營的公益二手商店，充滿教育意義',
            activities: '二手商品尋寶、支持在地教育、與孩子互動',
            tips: '只有週末開放！可以捐贈二手物品，記得帶現金',
            route: '特色體驗'
        },
        {
            name: '樹湖瀑布',
            difficulty: '簡單',
            description: '森林中的秘境瀑布，高約20公尺',
            activities: '森林健行、瀑布拍照、夏天玩水',
            tips: '步道約20分鐘可達，夏天可帶泳衣玩水',
            route: '自然生態'
        },
        
        // 普通景點
        {
            name: '立川漁場',
            difficulty: '普通',
            description: '黃金蜆養殖場，擁有純淨湧泉水源',
            activities: '摸蜆體驗、品嚐蜆料理、生態教育',
            food: '黃金蜆、蜆精、蜆丸、炒蜆',
            tips: '記得帶換洗衣物！摸蜆體驗約200元/30分鐘',
            route: '特色體驗'
        },
        {
            name: '碧蓮寺（豐田神社）',
            difficulty: '普通',
            description: '日式神社改建的廟宇，保留神社遺跡',
            activities: '參拜、欣賞日台混合建築、俯瞰豐田地區',
            tips: '需要爬階梯，下午光線最美，保持安靜尊重宗教場所',
            route: '文化體驗'
        },
        {
            name: '豐裡國小',
            difficulty: '普通',
            description: '創立於1910年，保存百年日式木造校舍',
            activities: '外部參觀日式建築、拍照',
            tips: '平日上課時間請勿打擾，假日可在圍牆外欣賞',
            route: '文化體驗'
        },
        {
            name: '壽豐鄉文史館',
            difficulty: '普通',
            description: '舊日本警察廳舍改造，展示豐田移民村歷史',
            activities: '參觀展覽、了解客家文化、認識移民開墾史',
            tips: '免費參觀！建議預約導覽，週一、週二休館',
            route: '文化體驗'
        },
        
        // 困難景點
        {
            name: '東華大學',
            difficulty: '困難',
            description: '全台最美大學，占地251公頃的壯闊校園',
            activities: '環湖騎車、校園漫步、東湖華湖拍照',
            tips: '校園很大！建議租腳踏車或開車，黃昏時東湖最美',
            route: '自然生態'
        },
        {
            name: '如豐琢玉工坊',
            difficulty: '困難',
            description: '花蓮玉石工藝館，提供玉石DIY體驗',
            activities: '玉石DIY體驗、參觀寶石展覽、購買玉石飾品',
            tips: 'DIY體驗需預約！費用約300-800元，製作時間1-2小時',
            route: '特色體驗'
        },
        {
            name: '白鮑溪',
            difficulty: '困難',
            description: '清澈溪流秘境，保持原始自然風貌',
            activities: '溪流戲水、溯溪、生態觀察',
            tips: '需開車前往，夏天玩水記得帶泳衣，雨天或颱風後不要去',
            route: '自然生態'
        },
        {
            name: '鯉魚潭',
            difficulty: '困難',
            description: '花蓮最大的內陸湖泊，面積104公頃',
            activities: '環潭騎車、划船、賞螢（4-5月）、湖畔咖啡',
            food: '活魚料理、湖畔餐廳',
            tips: '建議租腳踏車環湖約1小時，4-5月螢火蟲季必訪',
            route: '自然生態'
        },
        {
            name: '雲山水',
            difficulty: '困難',
            description: '夢幻湖景與落羽松秘境，宛如仙境',
            activities: '湖畔漫步、落羽松拍照、觀賞黑天鵝',
            tips: '秋冬季節最美！早上或傍晚前往，請愛護環境不留垃圾',
            route: '自然生態'
        }
    ],
    
    routes: {
        halfDay: '半日遊建議：壽豐火車站（30分鐘）→ 豐春冰菓店（1小時）→ 立川漁場摸蜆（1.5小時）',
        fullDay: '一日遊建議：樹湖瀑布（1.5小時）→ 鯉魚潭（2小時）→ 午餐 → 立川漁場（1.5小時）→ 豐春冰菓店（1小時）→ 壽豐文史館（1小時）',
        culture: '文化路線：壽豐火車站 → 豐田火車站 → 碧蓮寺（豐田神社）→ 豐裡國小 → 壽豐鄉文史館',
        nature: '自然路線：樹湖瀑布 → 東華大學 → 白鮑溪 → 鯉魚潭 → 雲山水',
        special: '特色路線：豐春冰菓店 → 五味屋 → 立川漁場 → 如豐琢玉工坊',
        photo: '最適合拍照：鯉魚潭（湖景）、雲山水（落羽松）、壽豐火車站（復古風）、東華大學（校園美景）、碧蓮寺（神社遺跡）',
        food: '美食推薦：豐春冰菓店（古早味冰）、立川漁場（黃金蜆料理）、鯉魚潭周邊（活魚料理）'
    },
    
    statistics: {
        total: 14,
        easy: 5,
        normal: 4,
        hard: 5
    }
};

// 建立系統提示詞
function createSystemPrompt() {
    return `你是「壽豐尋寶巴」的專屬 AI 旅遊助手，負責協助遊客規劃花蓮壽豐鄉的旅遊行程。

【你的角色】
- 親切、熱情的在地嚮導
- 用輕鬆、活潑的語氣對話
- 適時使用 emoji 讓對話更生動（但不要過度使用）

【壽豐景點資訊】
壽豐鄉共有 14 個精選景點，分為三大路線：
1. 自然生態路線（5個景點）：樹湖瀑布、東華大學、白鮑溪、鯉魚潭、雲山水
2. 文化體驗路線（5個景點）：壽豐火車站、豐田火車站、碧蓮寺、豐裡國小、文史館
3. 特色體驗路線（4個景點）：豐春冰菓店、五味屋、立川漁場、如豐琢玉工坊

景點難度分類：
- 簡單景點（5個）：壽豐火車站、豐田火車站、豐春冰菓店、五味屋、樹湖瀑布
- 普通景點（4個）：立川漁場、碧蓮寺、豐裡國小、文史館
- 困難景點（5個）：東華大學、如豐琢玉工坊、白鮑溪、鯉魚潭、雲山水

詳細景點資訊：
${JSON.stringify(shoufengData.spots, null, 2)}

推薦路線：
${JSON.stringify(shoufengData.routes, null, 2)}

【回答原則】
1. 簡潔明瞭：回答控制在 100-200 字內
2. 具體實用：給出明確的建議和資訊
3. 在地特色：突出壽豐的獨特魅力
4. 友善互動：鼓勵遊客提問和探索
5. 路線規劃：根據時間（半日/一日）、興趣（自然/文化/特色）推薦景點

【回答格式】
- 推薦景點時：說明特色 + 為什麼推薦 + 實用建議
- 路線規劃：給出具體順序和時間建議
- 美食推薦：結合景點一起介紹
- 難度提醒：困難景點要提醒交通或體力需求

現在請用這個角色來回答遊客的問題！`;
}

// 發送訊息函數
async function sendMessage() {
    const input = document.getElementById('userInput');
    const messagesDiv = document.getElementById('chatMessages');
    const sendBtn = document.getElementById('sendBtn');
    const userMessage = input.value.trim();
    
    if (!userMessage) return;
    
    // 檢查 API Key
    if (API_KEY === 'YOUR_GROQ_API_KEY' || API_KEY === '填入你的GROQ的密鑰') {
        alert('⚠️ 請先設定你的 Groq API Key！\n\n請編輯 chat.js 檔案，將「填入你的GROQ的密鑰」替換成你的真實 API Key。');
        return;
    }

    // 隱藏快速問題按鈕
    const quickQuestions = document.getElementById('quickQuestions');
    if (quickQuestions) {
        quickQuestions.style.display = 'none';
    }

    // 顯示用戶訊息
    addUserMessage(userMessage);
    input.value = '';
    sendBtn.disabled = true;

    // 顯示載入動畫
    const typingId = showTypingIndicator();

    try {
        // 呼叫 Groq API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile', // Groq 最好的免費模型
                messages: [
                    {
                        role: 'system',
                        content: createSystemPrompt()
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ],
                temperature: 0.7,
                max_tokens: 500
            })
        });

        // 移除載入動畫
        removeTypingIndicator(typingId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API 錯誤詳情:', errorData);
            throw new Error(`API 錯誤：${response.status}`);
        }

        const data = await response.json();
        console.log('API 回應:', data);
        
        // 顯示 AI 回應
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const aiResponse = data.choices[0].message.content;
            addAIMessage(aiResponse);
        } else {
            addAIMessage('抱歉，我現在無法回答，請稍後再試 😅');
        }

    } catch (error) {
        console.error('錯誤:', error);
        removeTypingIndicator(typingId);
        
        let errorMessage = '哎呀！發生錯誤了 😢\n\n';
        if (error.message.includes('API 錯誤: 400')) {
            errorMessage += '請求格式錯誤。請檢查 API 設定。';
        } else if (error.message.includes('API 錯誤: 401')) {
            errorMessage += 'API Key 無效或已過期。\n請重新申請 Groq API Key。';
        } else if (error.message.includes('API 錯誤: 429')) {
            errorMessage += '請求太頻繁，請稍後再試。';
        } else if (error.message.includes('Failed to fetch')) {
            errorMessage += '網路連線有問題，請檢查網路設定。';
        } else {
            errorMessage += `錯誤訊息：${error.message}`;
        }
        
        addAIMessage(errorMessage);
    }

    sendBtn.disabled = false;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示用戶訊息
function addUserMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = getCurrentTime();
    
    const messageHTML = `
        <div class="message-group user-group">
            <div class="messages">
                <div class="message user-message">
                    <div class="message-content">${escapeHtml(message)}</div>
                    <span class="message-time">${time}</span>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示 AI 訊息
function addAIMessage(message) {
    const messagesDiv = document.getElementById('chatMessages');
    const time = getCurrentTime();
    
    // 將換行符號轉換為 <br>
    const formattedMessage = message.replace(/\n/g, '<br>');
    
    const messageHTML = `
        <div class="message-group ai-group">
            <div class="avatar-small">
                <i class="fas fa-robot"></i>
            </div>
            <div class="messages">
                <div class="message ai-message">
                    <div class="message-content">${formattedMessage}</div>
                    <span class="message-time">${time}</span>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', messageHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 顯示載入動畫
function showTypingIndicator() {
    const messagesDiv = document.getElementById('chatMessages');
    const id = 'typing-' + Date.now();
    
    const typingHTML = `
        <div class="message-group ai-group" id="${id}">
            <div class="avatar-small">
                <i class="fas fa-robot"></i>
            </div>
            <div class="messages">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        </div>
    `;
    
    messagesDiv.insertAdjacentHTML('beforeend', typingHTML);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    return id;
}

// 移除載入動畫
function removeTypingIndicator(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}

// 快速問題功能
function askQuickQuestion(question) {
    const input = document.getElementById('userInput');
    input.value = question;
    sendMessage();
}

// 獲取當前時間
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// HTML 跳脫函數（防止 XSS 攻擊）
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Enter 鍵發送訊息
document.getElementById('userInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('壽豐尋寶巴 AI 助手已準備就緒！');
    console.log('使用 Groq API (llama-3.3-70b-versatile)');
    console.log('景點資料庫已載入：14個景點');
    
    // 自動聚焦輸入框
    const input = document.getElementById('userInput');
    if (input) {
        input.focus();
    }
});
