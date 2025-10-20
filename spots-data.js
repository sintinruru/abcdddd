// 壽豐景點資料庫
const spotsData = [
    // ===== 簡單景點 (30 exp) =====
    {
        id: 1,
        name: '壽豐火車站',
        shortDesc: '百年日式木造車站',
        fullDescription: `壽豐火車站建於1909年，是一座保存完整的日式木造車站，充滿懷舊氛圍。小巧精緻的木造站房，見證了花東縱谷線鐵路的百年歷史。

站體採用檜木建造，散發淡淡木香，月台上的候車座椅也保留了古樸風格。這裡是許多鐵道迷和攝影愛好者喜歡造訪的景點，尤其是火車進站時，蒸汽與木造站房相映成趣的畫面特別迷人。

車站雖小，卻是壽豐鄉的交通樞紐，連接著台北與台東。站在月台上，看著火車緩緩駛過，時光彷彿靜止在這個寧靜的小站。`,
        icon: 'fa-train',
        route: 'culture',
        address: '花蓮縣壽豐鄉壽豐村壽豐路一段100號',
        openTime: '全天開放（配合火車班次）',
        tips: '建議搭火車來訪，更能感受車站氛圍。傍晚光線最適合拍照。',
        difficulty: 'easy',
        exp: 30,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 2,
        name: '豐田火車站',
        shortDesc: '客家移民村的鐵道記憶',
        fullDescription: `豐田車站建於1910年，是壽豐鄉另一座具有歷史意義的日式車站。這裡曾是日治時期豐田移民村的重要交通樞紐，見證了客家移民在此開墾的艱辛歷史。

車站保留了傳統木造建築的樸實美感，站體雖經整修仍保有原始風貌。站前廣場寬敞，周圍綠意盎然，是個適合放慢腳步、細細品味的小站。

從車站出發，可以步行前往豐田神社遺址、豐裡國小等景點，感受這個客家移民村的獨特魅力。`,
        icon: 'fa-subway',
        route: 'culture',
        address: '花蓮縣壽豐鄉豐山村站前街',
        openTime: '全天開放（配合火車班次）',
        tips: '可搭配豐田神社、豐裡國小一起遊覽。車站周邊很安靜，適合慢慢散步。',
        difficulty: 'easy',
        exp: 30,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 3,
        name: '豐春冰菓店',
        shortDesc: '70年老店的古早味',
        fullDescription: `豐春冰菓店創立於1950年代，是壽豐鄉最具代表性的老字號冰店，已經營超過70年。這裡保留了最傳統的製冰方式與古早味配料，是在地人從小吃到大的回憶。

店內招牌是傳統的刨冰，使用天然食材熬煮的糖水，搭配紅豆、綠豆、粉粿、愛玉等配料，清涼消暑又不會過甜。每到夏天，店內總是坐滿慕名而來的遊客與在地人。

店面雖然樸實，但老闆的熱情與堅持讓這裡成為壽豐的文化地標。來到豐田，一定要來嚐嚐這70年不變的好味道。`,
        icon: 'fa-ice-cream',
        route: 'special',
        address: '花蓮縣壽豐鄉豐山村中山路',
        openTime: '10:00 - 18:00（週二休息）',
        tips: '推薦綜合冰！份量超大，兩人分食剛好。夏天人很多，建議避開假日尖峰時段。',
        difficulty: 'easy',
        exp: 30,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 4,
        name: '五味屋',
        shortDesc: '孩子們的公益二手商店',
        fullDescription: `五味屋是一間由廢棄舊倉庫改造的公益二手商店，由東華大學顧瑜君教授發起，帶領在地孩子一起經營。這裡不只是二手店，更是一個充滿教育意義的社區空間。

店內販售來自各地捐贈的二手物品，從衣服、書籍、玩具到家電都有，每樣商品都經過孩子們細心整理與標價。孩子們透過工作賺取點數，學習勞動的價值與金錢觀念。

五味屋的「五味」代表酸甜苦辣鹹，象徵人生百味。來到這裡，你會看見孩子們燦爛的笑容，感受到社區的溫暖力量。這不只是購物，更是支持偏鄉教育的行動。`,
        icon: 'fa-store',
        route: 'special',
        address: '花蓮縣壽豐鄉豐山村站前街34號',
        openTime: '週六、日 13:00 - 17:00',
        tips: '只有週末開放！可以來尋寶，也可以捐贈二手物品。記得帶現金，不收信用卡。',
        difficulty: 'easy',
        exp: 30,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 5,
        name: '樹湖瀑布',
        shortDesc: '森林中的秘境瀑布',
        fullDescription: `樹湖瀑布位於壽豐鄉樹湖村，是一處隱藏在森林中的秘境。瀑布高約20公尺，水流從岩壁傾瀉而下，水花四濺，形成一幅天然的水簾美景。

前往瀑布的步道沿著溪流而建，沿途林蔭茂密，空氣清新，可以聽見潺潺流水聲與鳥鳴。步道平緩好走，適合全家大小一起來健行。夏天來訪還可以在瀑布下方的水潭玩水，清涼消暑。

這裡遊客較少，保有原始的自然風貌，是個適合放鬆身心、親近大自然的好地方。`,
        icon: 'fa-water',
        route: 'nature',
        address: '花蓮縣壽豐鄉樹湖村',
        openTime: '全天開放',
        tips: '步道約20分鐘可達。夏天可帶泳衣玩水，冬天水量較小但景色更清幽。',
        difficulty: 'easy',
        exp: 30,
        image: 'spot-placeholder.jpg'
    },

    // ===== 普通景點 (50 exp) =====
    {
        id: 6,
        name: '立川漁場',
        shortDesc: '黃金蜆的故鄉',
        fullDescription: `立川漁場是花蓮著名的黃金蜆養殖場，擁有純淨無污染的湧泉水源，養殖出飽滿肥美的黃金蜆。這裡不只是養殖場，更是一個結合生態教育與休閒體驗的景點。

最受歡迎的活動就是「摸蜆體驗」！脫下鞋子，踩進清涼的水池中，親手摸蜆的樂趣讓大人小孩都玩得不亦樂乎。摸到的蜆仔還可以帶回家享用，新鮮美味。

園區內的餐廳提供各式蜆料理，包括蜆精、蜆丸、炒蜆等，使用自家養殖的黃金蜆烹調，鮮甜美味。還有文蜆館可以了解蜆的生態與養殖知識。`,
        icon: 'fa-fish',
        route: 'special',
        address: '花蓮縣壽豐鄉共和村魚池路45號',
        openTime: '08:00 - 19:00',
        tips: '記得帶換洗衣物！摸蜆體驗需額外付費，約200元可摸30分鐘。餐廳的蜆料理必吃。',
        difficulty: 'normal',
        exp: 50,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 7,
        name: '碧蓮寺（豐田神社）',
        shortDesc: '日式神社改建的廟宇',
        fullDescription: `碧蓮寺的前身是日治時期的豐田神社，建於1915年，是當時豐田移民村的信仰中心。戰後神社被改建為碧蓮寺，但仍保留了許多日式建築元素，形成獨特的日台混合風格。

沿著石階拾級而上，可以看到鳥居、石燈籠等神社遺跡，與寺廟建築並存，訴說著這片土地的歷史變遷。登上高處，可以俯瞰整個豐田地區，視野極佳。

這裡不僅是宗教場所，更是一個充滿歷史故事的文化景點。神社遺跡與寺廟共存的景象，見證了台灣多元文化融合的特色。`,
        icon: 'fa-torii-gate',
        route: 'culture',
        address: '花蓮縣壽豐鄉豐山村民權街',
        openTime: '全天開放',
        tips: '需要爬階梯，建議穿好走的鞋。下午時分光線最美，適合拍照。保持安靜，尊重宗教場所。',
        difficulty: 'normal',
        exp: 50,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 8,
        name: '豐裡國小',
        shortDesc: '百年日式校舍',
        fullDescription: `豐裡國小創立於1910年，原為豐田尋常小學校，是一所擁有百年歷史的學校。校園內保存了珍貴的日式木造校舍，建築風格優美，充滿歷史韻味。

木造校舍採用傳統日式建築工法，有著深邃的屋簷、精緻的木窗與走廊。雖然歷經百年風霜，但經過細心維護，依然保持良好狀態。這些建築不僅是校園的一部分，更是壽豐鄉重要的文化資產。

校園環境優美，綠樹成蔭，漫步其中彷彿穿越時空。這裡不定期開放參觀，讓民眾有機會親近這些歷史建築。`,
        icon: 'fa-school',
        route: 'culture',
        address: '花蓮縣壽豐鄉豐裡村中山路',
        openTime: '平日上課時間請勿打擾，假日可外部參觀',
        tips: '注意上課時間，不要打擾學生。假日可以在圍牆外拍照欣賞。請保持安靜，愛護環境。',
        difficulty: 'normal',
        exp: 50,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 9,
        name: '壽豐鄉文史館',
        shortDesc: '舊日本警察廳舍改造',
        fullDescription: `壽豐鄉文史館位於豐田村，建築本身就是珍貴的歷史遺產。這棟日式木造建築原為日治時期的警察廳舍，建於1910年代，經過細心修復後改建為文史館，保存了壽豐的歷史記憶。

館內展示豐田移民村的開墾史、客家文化、農業發展等主題，透過老照片、文物與影像資料，讓訪客深入了解壽豐的過去。特別是豐田移民村的歷史，記錄了日本移民與客家人共同開墾這片土地的故事。

建築本身保留了完整的日式木造結構，窗櫺、屋簷、庭園都維持原貌，是認識日式建築的好地方。館外還有日式庭園與老樹，環境清幽雅致。`,
        icon: 'fa-landmark',
        route: 'culture',
        address: '花蓮縣壽豐鄉豐山村中山路',
        openTime: '09:00 - 17:00（週一、週二休館）',
        tips: '免費參觀！建議預約導覽，可以聽到更多歷史故事。旁邊的豐春冰菓店可以順道一遊。',
        difficulty: 'normal',
        exp: 50,
        image: 'spot-placeholder.jpg'
    },

    // ===== 困難景點 (80 exp) =====
    {
        id: 10,
        name: '東華大學',
        shortDesc: '全台最美大學校園',
        fullDescription: `國立東華大學壽豐校區占地廣達251公頃，被譽為「全台最美大學」。校園依山傍水而建，完整保留了自然生態，處處可見青山綠水的美景。

校園內的東湖與華湖是最著名的景點，湖面倒映著中央山脈與海岸山脈，晨昏時分格外迷人。環湖步道全長約5公里，適合散步、慢跑、騎自行車，沿途可以看見各種水鳥棲息。

校園建築採用現代簡約風格，與自然景觀完美融合。圖書館、行政大樓等建築都很有特色，是建築攝影的好題材。校園內也有咖啡廳和學生餐廳，可以在這裡享受悠閒的大學時光。`,
        icon: 'fa-graduation-cap',
        route: 'nature',
        address: '花蓮縣壽豐鄉志學村大學路二段1號',
        openTime: '全天開放（請勿打擾上課）',
        tips: '校園很大！建議租腳踏車或開車進入。黃昏時分在東湖畔最美。平日學餐便宜又好吃。',
        difficulty: 'hard',
        exp: 80,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 11,
        name: '如豐琢玉工坊',
        shortDesc: '花蓮玉石工藝體驗',
        fullDescription: `如豐琢玉工坊是花蓮知名的玉石工藝館，專注於台灣玉石的加工與創作。花蓮是台灣玉石的主要產地，這裡展示了各種珍貴的台灣玉、豐田玉、玫瑰石等寶石。

工坊提供玉石DIY體驗，你可以親手打磨、拋光，製作屬於自己的玉石飾品或吊飾。師傅會耐心指導每個步驟，即使是新手也能完成精美的作品。這個過程不僅有趣，更能了解玉石加工的傳統工藝。

館內還有玉石博物館，展示各種珍稀的寶石原礦與藝術創作。每件作品都展現了師傅精湛的琢玉技藝，讓人驚嘆大自然與人工技藝的完美結合。`,
        icon: 'fa-gem',
        route: 'special',
        address: '花蓮縣壽豐鄉水璉村',
        openTime: '09:00 - 17:00',
        tips: 'DIY體驗需預約！費用約300-800元不等。製作時間約1-2小時，可以帶走自己的作品。',
        difficulty: 'hard',
        exp: 80,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 12,
        name: '白鮑溪',
        shortDesc: '清澈溪流與自然生態',
        fullDescription: `白鮑溪是壽豐鄉的一條美麗溪流，溪水清澈見底，水質純淨，是花蓮少數保持原始風貌的溪流之一。溪流兩岸林木茂密，形成天然的綠色隧道，環境清幽寧靜。

這裡是戲水、溯溪的絕佳地點，夏天可以在溪中玩水消暑，溪水冰涼清澈，非常舒服。溪流中有豐富的生態，運氣好可以看到魚蝦在水中悠遊，還有各種野生鳥類。

沿著溪流有簡易步道，可以深入探索這片秘境。但要注意安全，雨後水流湍急時不宜進入。這裡遊客較少，保有原始的自然美景，是個適合親近大自然的好地方。`,
        icon: 'fa-water',
        route: 'nature',
        address: '花蓮縣壽豐鄉池南村',
        openTime: '全天開放（注意天氣與水流狀況）',
        tips: '需開車前往，路況較原始。夏天玩水記得帶泳衣、換洗衣物。雨天或颱風後不要前往！',
        difficulty: 'hard',
        exp: 80,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 13,
        name: '鯉魚潭',
        shortDesc: '花蓮最大的內陸湖泊',
        fullDescription: `鯉魚潭是花蓮縣境內最大的內陸湖泊，湖面呈南北長東西窄的橢圓形，面積約104公頃。四周群山環抱，波光粼粼的湖面如鏡子般映照著青山白雲，風景如畫。

湖畔設有完善的環潭自行車道，全長約5公里，是欣賞湖光山色的最佳方式。你可以在這裡划船、騎自行車、健行，或是在湖畔咖啡廳享受悠閒的午後時光。湖邊有多家餐廳提供活魚料理與在地美食。

每年4-5月螢火蟲季節，夜間的鯉魚潭更是賞螢的絕佳地點，點點螢光在湖畔飛舞，浪漫又迷人。池南森林遊樂區就在附近，可以一併遊覽。`,
        icon: 'fa-water',
        route: 'nature',
        address: '花蓮縣壽豐鄉池南村環潭北路',
        openTime: '全天開放',
        tips: '建議租腳踏車環湖，約1小時可完成。4-5月螢火蟲季必訪！記得帶防蚊液。',
        difficulty: 'hard',
        exp: 80,
        image: 'spot-placeholder.jpg'
    },
    {
        id: 14,
        name: '雲山水',
        shortDesc: '夢幻湖景與落羽松秘境',
        fullDescription: `雲山水是壽豐鄉最夢幻的景點，宛如仙境般的湖光山色讓人流連忘返。這片占地約24公頃的生態農莊，擁有一座由天然湧泉形成的夢幻湖泊，水質清澈如鏡。

湖畔種植了大片落羽松林，四季呈現不同風貌。春夏時節，翠綠的樹林倒映在清澈的湖面，一片生機盎然；秋冬季節，落羽松轉為金黃與橘紅色，搭配湖光山色，美得像幅油畫，吸引無數攝影愛好者前來。

湖中有黑天鵝、綠頭鴨悠遊其中，湖畔設有木棧道和觀景台，非常適合漫步拍照。這裡也是婚紗攝影的熱門景點，浪漫的氛圍吸引無數情侶前來。

※ 注意：雲山水大部分屬私人土地，請尊重環境，不要留下垃圾，保持安靜。`,
        icon: 'fa-tree',
        route: 'nature',
        address: '花蓮縣壽豐鄉豐坪路二段2巷201弄',
        openTime: '全天開放（請勿打擾住戶，尊重私人土地）',
        tips: '秋冬季節最美！建議早上或傍晚前往，光線最柔和。請保持安靜，愛護環境，不要留下垃圾。',
        difficulty: 'hard',
        exp: 80,
        image: 'spot-placeholder.jpg'
    }
];

// 升級經驗值需求（根據14個景點調整）
const levelRequirements = {
    1: 0,       // Level 1 起始
    2: 150,     // 收集 3-5 個簡單景點
    3: 350,     // 再收集 2-4 個景點
    4: 650,     // 持續收集
    5: 1000,    // 收集大部分景點
    6: 1500,    // 幾乎全收集
    7: 2100,    // 全收集 + 深度探索
    8: 2800,    // 重複打卡或特殊任務
    9: 3600,    // 進階目標
    10: 4500    // 大師級別
};

// 路線設定（根據14個新景點）
const routesConfig = {
    nature: {
        name: '自然生態',
        spots: [5, 10, 12, 13, 14], // 樹湖瀑布、東華大學、白鮑溪、鯉魚潭、雲山水
        color: '#66bb6a',
        icon: 'fa-leaf'
    },
    culture: {
        name: '文化體驗',
        spots: [1, 2, 7, 8, 9], // 壽豐火車站、豐田火車站、碧蓮寺、豐裡國小、文史館
        color: '#ffa726',
        icon: 'fa-torii-gate'
    },
    special: {
        name: '特色體驗',
        spots: [3, 4, 6, 11], // 豐春冰菓店、五味屋、立川漁場、如豐琢玉工坊
        color: '#42a5f5',
        icon: 'fa-star'
    }
};

// 獎勵設定（適配14個景點）
const rewards = {
    achievements: [
        {
            id: 'first-spot',
            name: '初探壽豐',
            description: '收集第一個景點',
            icon: 'fa-map-marker-alt',
            unlockAt: 'collect-1'
        },
        {
            id: 'easy-master',
            name: '輕鬆遊客',
            description: '收集全部5個簡單景點',
            icon: 'fa-smile',
            unlockAt: 'easy-complete'
        },
        {
            id: 'half-way',
            name: '半程旅人',
            description: '收集7個景點',
            icon: 'fa-hiking',
            unlockAt: 'collect-7'
        },
        {
            id: 'explorer',
            name: '探險專家',
            description: '達到等級6',
            icon: 'fa-compass',
            unlockAt: 'level-6'
        },
        {
            id: 'master',
            name: '壽豐大師',
            description: '收集全部14個景點',
            icon: 'fa-crown',
            unlockAt: 'collect-14'
        },
        {
            id: 'nature-lover',
            name: '自然愛好者',
            description: '完成自然生態路線',
            icon: 'fa-leaf',
            unlockAt: 'route-nature'
        },
        {
            id: 'culture-explorer',
            name: '文化探索者',
            description: '完成文化體驗路線',
            icon: 'fa-torii-gate',
            unlockAt: 'route-culture'
        },
        {
            id: 'special-hunter',
            name: '特色獵人',
            description: '完成特色體驗路線',
            icon: 'fa-star',
            unlockAt: 'route-special'
        },
        {
            id: 'hard-core',
            name: '硬核玩家',
            description: '收集全部5個困難景點',
            icon: 'fa-medal',
            unlockAt: 'hard-complete'
        }
    ],
    avatars: [
        { id: 'train-lover', name: '鐵道迷', icon: 'fa-train', unlockLevel: 2 },
        { id: 'mountain-climber', name: '登山客', icon: 'fa-mountain', unlockLevel: 3 },
        { id: 'photographer', name: '攝影師', icon: 'fa-camera-retro', unlockLevel: 5 },
        { id: 'nature-expert', name: '生態專家', icon: 'fa-seedling', unlockLevel: 7 },
        { id: 'jade-master', name: '琢玉師', icon: 'fa-gem', unlockLevel: 8 },
        { id: 'golden-trophy', name: '金色獎杯', icon: 'fa-trophy', unlockLevel: 10, special: true }
    ]
};

// 導出資料（如果使用模組化）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { spotsData, levelRequirements, rewards };
}
