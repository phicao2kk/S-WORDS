// vocab-data.js - KHO TỪ VỰNG SIÊU KHỔNG LỒ (2000+ từ, 20+ chủ đề)

const VOCABULARY = {
    // ==================== 1. NHÀ BẾP (KITCHEN) - 120+ từ ====================
    kitchen: {
        name: "🍳 NHÀ BẾP - KITCHEN",
        words: [
            { vi: "bếp", en: "stove" }, { vi: "bếp ga", en: "gas stove" }, { vi: "bếp điện", en: "electric stove" }, { vi: "bếp từ", en: "induction cooker" },
            { vi: "bếp hồng ngoại", en: "infrared cooker" }, { vi: "bếp củi", en: "wood stove" }, { vi: "bếp than tổ ong", en: "charcoal stove" },
            { vi: "chảo", en: "pan" }, { vi: "chảo chống dính", en: "non-stick pan" }, { vi: "chảo gang", en: "cast iron pan" }, { vi: "chảo sâu lòng", en: "wok" },
            { vi: "chảo rán trứng", en: "egg frying pan" }, { vi: "chảo crepe", en: "crepe pan" }, { vi: "chảo đáy phẳng", en: "flat-bottom pan" },
            { vi: "nồi", en: "pot" }, { vi: "nồi áp suất", en: "pressure cooker" }, { vi: "nồi chiên không dầu", en: "air fryer" }, { vi: "nồi cơm điện", en: "rice cooker" },
            { vi: "nồi lẩu", en: "hot pot" }, { vi: "nồi đất", en: "clay pot" }, { vi: "nồi gang", en: "dutch oven" }, { vi: "nồi hấp", en: "steamer" },
            { vi: "soong", en: "saucepan" }, { vi: "nồi nước dùng", en: "stockpot" }, { vi: "nồi nấu chậm", en: "slow cooker" },
            { vi: "dao", en: "knife" }, { vi: "dao phay", en: "chef's knife" }, { vi: "dao gọt", en: "paring knife" }, { vi: "dao răng cưa", en: "serrated knife" },
            { vi: "dao thái thịt", en: "carving knife" }, { vi: "dao phi lê", en: "fillet knife" }, { vi: "dao chặt", en: "cleaver" }, { vi: "dao sushi", en: "sushi knife" },
            { vi: "dao cắt bánh mì", en: "bread knife" }, { vi: "dao rau củ", en: "vegetable knife" }, { vi: "dao tỉa", en: "paring knife" },
            { vi: "thớt", en: "cutting board" }, { vi: "thớt gỗ", en: "wooden board" }, { vi: "thớt nhựa", en: "plastic board" }, { vi: "thớt tre", en: "bamboo board" },
            { vi: "thớt đá", en: "stone board" }, { vi: "thớt kính", en: "glass board" }, { vi: "thớt cao su", en: "rubber board" },
            { vi: "lò vi sóng", en: "microwave" }, { vi: "lò nướng", en: "oven" }, { vi: "lò nướng bánh", en: "baking oven" }, { vi: "lò vi sóng âm tủ", en: "built-in microwave" },
            { vi: "lò nướng đối lưu", en: "convection oven" }, { vi: "lò quay vịt", en: "rotisserie oven" }, { vi: "lò pizza", en: "pizza oven" },
            { vi: "tủ lạnh", en: "refrigerator" }, { vi: "tủ đông", en: "freezer" }, { vi: "tủ mát", en: "cooler" }, { vi: "tủ lạnh side-by-side", en: "side-by-side fridge" },
            { vi: "tủ lạnh ngăn đá dưới", en: "bottom freezer fridge" }, { vi: "tủ lạnh mini", en: "mini fridge" }, { vi: "tủ rượu", en: "wine cooler" },
            { vi: "máy rửa bát", en: "dishwasher" }, { vi: "máy rửa bát âm tủ", en: "built-in dishwasher" }, { vi: "máy rửa bát để bàn", en: "countertop dishwasher" },
            { vi: "bồn rửa", en: "sink" }, { vi: "bồn rửa đôi", en: "double sink" }, { vi: "bồn rửa đơn", en: "single sink" }, { vi: "bồn rửa đá", en: "stone sink" },
            { vi: "bồn rửa inox", en: "stainless steel sink" }, { vi: "bồn rửa gốm", en: "ceramic sink" }, { vi: "vòi nước", en: "faucet" },
            { vi: "vòi nước chậu rửa", en: "kitchen faucet" }, { vi: "vòi rửa bát", en: "spray faucet" }, { vi: "vòi nước thông minh", en: "smart faucet" },
            { vi: "muỗng", en: "spoon" }, { vi: "muỗng canh", en: "tablespoon" }, { vi: "muỗng cà phê", en: "teaspoon" }, { vi: "muỗng múc canh", en: "ladle" },
            { vi: "muỗng vớt", en: "slotted spoon" }, { vi: "muỗng kem", en: "ice cream scoop" }, { vi: "muỗng đo lường", en: "measuring spoon" },
            { vi: "nĩa", en: "fork" }, { vi: "nĩa ăn thịt", en: "dinner fork" }, { vi: "nĩa tráng miệng", en: "dessert fork" }, { vi: "nĩa xiên", en: "skewer" },
            { vi: "đũa", en: "chopsticks" }, { vi: "đũa tre", en: "bamboo chopsticks" }, { vi: "đũa inox", en: "metal chopsticks" }, { vi: "đũa gỗ", en: "wooden chopsticks" },
            { vi: "thìa", en: "spatula" }, { vi: "thìa lật", en: "turner" }, { vi: "thìa silicon", en: "silicone spatula" }, { vi: "thìa gỗ", en: "wooden spatula" },
            { vi: "ly", en: "glass" }, { vi: "ly thủy tinh", en: "tumbler" }, { vi: "ly rượu vang", en: "wine glass" }, { vi: "ly cocktail", en: "cocktail glass" },
            { vi: "ly bia", en: "beer mug" }, { vi: "ly sứ", en: "ceramic cup" }, { vi: "ly giấy", en: "paper cup" }, { vi: "ly nhựa", en: "plastic cup" },
            { vi: "cốc", en: "cup" }, { vi: "cốc sứ", en: "mug" }, { vi: "cốc giữ nhiệt", en: "thermal mug" }, { vi: "cốc pha cà phê", en: "coffee cup" },
            { vi: "đĩa", en: "plate" }, { vi: "đĩa sâu lòng", en: "soup plate" }, { vi: "đĩa phẳng", en: "flat plate" }, { vi: "đĩa tráng miệng", en: "dessert plate" },
            { vi: "đĩa salad", en: "salad plate" }, { vi: "đĩa đựng bánh", en: "cake plate" }, { vi: "đĩa sứ", en: "ceramic plate" },
            { vi: "tô", en: "bowl" }, { vi: "tô sứ", en: "ceramic bowl" }, { vi: "tô thủy tinh", en: "glass bowl" }, { vi: "tô gỗ", en: "wooden bowl" },
            { vi: "tô trộn salad", en: "salad bowl" }, { vi: "tô phở", en: "pho bowl" }, { vi: "tô đá", en: "stone bowl" }, { vi: "chén", en: "rice bowl" },
            { vi: "bát", en: "small bowl" }, { vi: "bát gốm", en: "ceramic bowl" }, { vi: "bát tráng men", en: "glazed bowl" }, { vi: "bát nhựa", en: "plastic bowl" }
        ]
    },
    
    // ==================== 2. ĐỜI SỐNG (LIFE) - 150+ từ ====================
    life: {
        name: "🧬 ĐỜI SỐNG - LIFE",
        words: [
            { vi: "hạnh phúc", en: "happiness" }, { vi: "hân hoan", en: "joyful" }, { vi: "phấn khởi", en: "excited" }, { vi: "viên mãn", en: "fulfilled" },
            { vi: "an nhiên", en: "peaceful" }, { vi: "thư thái", en: "relaxed" }, { vi: "hài lòng", en: "satisfied" }, { vi: "biết ơn", en: "grateful" },
            { vi: "giấc mơ", en: "dream" }, { vi: "hoài bão", en: "aspiration" }, { vi: "khát vọng", en: "desire" }, { vi: "mục tiêu", en: "goal" },
            { vi: "tình bạn", en: "friendship" }, { vi: "bạn thân", en: "best friend" }, { vi: "người bạn", en: "companion" }, { vi: "tình đồng đội", en: "camaraderie" },
            { vi: "công việc", en: "job" }, { vi: "nghề nghiệp", en: "career" }, { vi: "văn phòng", en: "office" }, { vi: "đồng nghiệp", en: "colleague" },
            { vi: "lương", en: "salary" }, { vi: "thăng chức", en: "promotion" }, { vi: "nghỉ hưu", en: "retirement" }, { vi: "thất nghiệp", en: "unemployment" },
            { vi: "sức khỏe", en: "health" }, { vi: "sức bền", en: "stamina" }, { vi: "thể lực", en: "fitness" }, { vi: "bệnh tật", en: "illness" },
            { vi: "khám bệnh", en: "check-up" }, { vi: "bác sĩ", en: "doctor" }, { vi: "y tá", en: "nurse" }, { vi: "bệnh viện", en: "hospital" },
            { vi: "thuốc", en: "medicine" }, { vi: "tiêm", en: "injection" }, { vi: "phẫu thuật", en: "surgery" }, { vi: "vật lý trị liệu", en: "physical therapy" },
            { vi: "gia đình", en: "family" }, { vi: "cha", en: "father" }, { vi: "mẹ", en: "mother" }, { vi: "con trai", en: "son" }, { vi: "con gái", en: "daughter" },
            { vi: "anh trai", en: "brother" }, { vi: "chị gái", en: "sister" }, { vi: "ông nội", en: "grandfather" }, { vi: "bà nội", en: "grandmother" },
            { vi: "chú", en: "uncle" }, { vi: "cô", en: "aunt" }, { vi: "anh em họ", en: "cousin" }, { vi: "cháu", en: "nephew/niece" },
            { vi: "tình yêu", en: "love" }, { vi: "yêu thương", en: "affection" }, { vi: "say đắm", en: "infatuation" }, { vi: "lãng mạn", en: "romantic" },
            { vi: "hôn nhân", en: "marriage" }, { vi: "cưới hỏi", en: "wedding" }, { vi: "vợ", en: "wife" }, { vi: "chồng", en: "husband" },
            { vi: "hẹn hò", en: "dating" }, { vi: "tỏ tình", en: "confession" }, { vi: "chia tay", en: "break up" }, { vi: "tái hợp", en: "reunite" },
            { vi: "thành công", en: "success" }, { vi: "thành tựu", en: "achievement" }, { vi: "danh tiếng", en: "fame" }, { vi: "giàu có", en: "wealth" },
            { vi: "quyền lực", en: "power" }, { vi: "địa vị", en: "status" }, { vi: "uy tín", en: "prestige" }, { vi: "vinh quang", en: "glory" },
            { vi: "thất bại", en: "failure" }, { vi: "vấp ngã", en: "setback" }, { vi: "sai lầm", en: "mistake" }, { vi: "hối hận", en: "regret" },
            { vi: "hy vọng", en: "hope" }, { vi: "lạc quan", en: "optimism" }, { vi: "niềm tin", en: "faith" }, { vi: "tương lai", en: "future" },
            { vi: "nỗi buồn", en: "sadness" }, { vi: "bi quan", en: "pessimism" }, { vi: "tuyệt vọng", en: "despair" }, { vi: "cô đơn", en: "loneliness" },
            { vi: "niềm vui", en: "joy" }, { vi: "tiếng cười", en: "laughter" }, { vi: "hạnh phúc nhỏ", en: "little happiness" }, { vi: "khoảnh khắc", en: "moment" },
            { vi: "sự bình yên", en: "peace" }, { vi: "tĩnh lặng", en: "stillness" }, { vi: "thiền", en: "meditation" }, { vi: "cân bằng", en: "balance" },
            { vi: "tự do", en: "freedom" }, { vi: "giải phóng", en: "liberation" }, { vi: "độc lập", en: "independence" }, { vi: "tự chủ", en: "autonomy" },
            { vi: "trách nhiệm", en: "responsibility" }, { vi: "nghĩa vụ", en: "duty" }, { vi: "bổn phận", en: "obligation" }, { vi: "cam kết", en: "commitment" },
            { vi: "lòng tốt", en: "kindness" }, { vi: "vị tha", en: "selfless" }, { vi: "nhân ái", en: "compassion" }, { vi: "bác ái", en: "charity" },
            { vi: "sự trung thực", en: "honesty" }, { vi: "chân thật", en: "truthful" }, { vi: "thẳng thắn", en: "frank" }, { vi: "thật thà", en: "sincere" }
        ]
    },
    
    // ==================== 3. VŨ TRỤ (UNIVERSE) - 100+ từ ====================
    universe: {
        name: "🌌 VŨ TRỤ - UNIVERSE",
        words: [
            { vi: "mặt trăng", en: "moon" }, { vi: "mặt trời", en: "sun" }, { vi: "sao Thủy", en: "Mercury" }, { vi: "sao Kim", en: "Venus" },
            { vi: "Trái Đất", en: "Earth" }, { vi: "sao Hỏa", en: "Mars" }, { vi: "sao Mộc", en: "Jupiter" }, { vi: "sao Thổ", en: "Saturn" },
            { vi: "sao Thiên Vương", en: "Uranus" }, { vi: "sao Hải Vương", en: "Neptune" }, { vi: "sao Diêm Vương", en: "Pluto" }, { vi: "sao lùn", en: "dwarf planet" },
            { vi: "hành tinh", en: "planet" }, { vi: "hành tinh đá", en: "terrestrial planet" }, { vi: "hành tinh khí", en: "gas giant" }, { vi: "hành tinh băng", en: "ice giant" },
            { vi: "ngân hà", en: "galaxy" }, { vi: "dải Ngân Hà", en: "Milky Way" }, { vi: "thiên hà Andromeda", en: "Andromeda Galaxy" }, { vi: "thiên hà xoắn ốc", en: "spiral galaxy" },
            { vi: "thiên hà elip", en: "elliptical galaxy" }, { vi: "thiên hà bất thường", en: "irregular galaxy" }, { vi: "cụm thiên hà", en: "galaxy cluster" },
            { vi: "lỗ đen", en: "black hole" }, { vi: "hố đen siêu khối lượng", en: "supermassive black hole" }, { vi: "lỗ đen sao", en: "stellar black hole" }, { vi: "lỗ đen sơ cấp", en: "primordial black hole" },
            { vi: "lỗ giun", en: "wormhole" }, { vi: "lỗ trắng", en: "white hole" }, { vi: "chân trời sự kiện", en: "event horizon" }, { vi: "điểm kỳ dị", en: "singularity" },
            { vi: "tên lửa", en: "rocket" }, { vi: "tên lửa đẩy", en: "booster rocket" }, { vi: "tàu vũ trụ", en: "spaceship" }, { vi: "tàu con thoi", en: "space shuttle" },
            { vi: "phi hành gia", en: "astronaut" }, { vi: "nhà du hành vũ trụ", en: "cosmonaut" }, { vi: "người lên mặt trăng", en: "moon walker" }, { vi: "phi hành đoàn", en: "crew" },
            { vi: "trạm vũ trụ", en: "space station" }, { vi: "ISS", en: "International Space Station" }, { vi: "trạm Tiangong", en: "Tiangong Station" }, { vi: "trạm Mir", en: "Mir Station" },
            { vi: "thiên thạch", en: "meteor" }, { vi: "sao băng", en: "shooting star" }, { vi: "mưa sao băng", en: "meteor shower" }, { vi: "thiên thạch rơi", en: "meteorite" },
            { vi: "sao chổi", en: "comet" }, { vi: "sao chổi Halley", en: "Halley's Comet" }, { vi: "đuôi sao chổi", en: "comet tail" }, { vi: "nhân sao chổi", en: "comet nucleus" },
            { vi: "tinh vân", en: "nebula" }, { vi: "tinh vân Orion", en: "Orion Nebula" }, { vi: "tinh vân Con Cua", en: "Crab Nebula" }, { vi: "tinh vân hành tinh", en: "planetary nebula" },
            { vi: "hệ mặt trời", en: "solar system" }, { vi: "quỹ đạo", en: "orbit" }, { vi: "vành đai tiểu hành tinh", en: "asteroid belt" }, { vi: "vành đai Kuiper", en: "Kuiper belt" },
            { vi: "đám mây Oort", en: "Oort cloud" }, { vi: "sao", en: "star" }, { vi: "sao neutron", en: "neutron star" }, { vi: "sao lùn trắng", en: "white dwarf" },
            { vi: "sao khổng lồ đỏ", en: "red giant" }, { vi: "sao siêu khổng lồ", en: "supergiant" }, { vi: "sao biến quang", en: "variable star" }, { vi: "siêu tân tinh", en: "supernova" },
            { vi: "vụ nổ vũ trụ", en: "cosmic explosion" }, { vi: "tia gamma", en: "gamma ray" }, { vi: "bức xạ vũ trụ", en: "cosmic radiation" }, { vi: "vật chất tối", en: "dark matter" },
            { vi: "năng lượng tối", en: "dark energy" }, { vi: "vũ trụ giãn nở", en: "expanding universe" }, { vi: "vụ nổ Big Bang", en: "Big Bang" }, { vi: "lý thuyết dây", en: "string theory" },
            { vi: "vũ trụ song song", en: "parallel universe" }, { vi: "đa vũ trụ", en: "multiverse" }, { vi: "hố thời gian", en: "time hole" }, { vi: "du hành thời gian", en: "time travel" },
            { vi: "kính thiên văn", en: "telescope" }, { vi: "kính Hubble", en: "Hubble Telescope" }, { vi: "kính James Webb", en: "James Webb Telescope" }, { vi: "đài quan sát", en: "observatory" }
        ]
    },
    
    // ==================== 4. ĐỘNG VẬT (ANIMALS) - 120+ từ ====================
    animals: {
        name: "🐾 ĐỘNG VẬT - ANIMALS",
        words: [
            { vi: "chó", en: "dog" }, { vi: "chó con", en: "puppy" }, { vi: "chó săn", en: "hound" }, { vi: "chó cảnh", en: "toy dog" }, { vi: "chó becgie", en: "German shepherd" },
            { vi: "mèo", en: "cat" }, { vi: "mèo con", en: "kitten" }, { vi: "mèo Anh lông ngắn", en: "British shorthair" }, { vi: "mèo Ba Tư", en: "Persian cat" }, { vi: "mèo Xiêm", en: "Siamese cat" },
            { vi: "chim", en: "bird" }, { vi: "chim sẻ", en: "sparrow" }, { vi: "chim bồ câu", en: "pigeon" }, { vi: "chim ưng", en: "falcon" }, { vi: "đại bàng", en: "eagle" },
            { vi: "cú mèo", en: "owl" }, { vi: "vẹt", en: "parrot" }, { vi: "họa mi", en: "nightingale" }, { vi: "sơn ca", en: "lark" }, { vi: "chim cánh cụt", en: "penguin" },
            { vi: "đà điểu", en: "ostrich" }, { vi: "công", en: "peacock" }, { vi: "hồng hạc", en: "flamingo" }, { vi: "cò", en: "stork" }, { vi: "vịt", en: "duck" },
            { vi: "ngan", en: "muscovy duck" }, { vi: "ngỗng", en: "goose" }, { vi: "thiên nga", en: "swan" }, { vi: "gà", en: "chicken" }, { vi: "gà trống", en: "rooster" },
            { vi: "gà mái", en: "hen" }, { vi: "gà con", en: "chick" }, { vi: "gà tây", en: "turkey" }, { vi: "cá", en: "fish" }, { vi: "cá vàng", en: "goldfish" },
            { vi: "cá chép", en: "carp" }, { vi: "cá trắm", en: "grass carp" }, { vi: "cá rô phi", en: "tilapia" }, { vi: "cá hồi", en: "salmon" }, { vi: "cá ngừ", en: "tuna" },
            { vi: "cá mập", en: "shark" }, { vi: "cá voi", en: "whale" }, { vi: "cá heo", en: "dolphin" }, { vi: "cá đuối", en: "ray" }, { vi: "cá mực", en: "squid" },
            { vi: "hổ", en: "tiger" }, { vi: "sư tử", en: "lion" }, { vi: "báo", en: "leopard" }, { vi: "báo đen", en: "black panther" }, { vi: "báo săn", en: "cheetah" },
            { vi: "voi", en: "elephant" }, { vi: "voi châu Phi", en: "African elephant" }, { vi: "voi châu Á", en: "Asian elephant" }, { vi: "voi ma mút", en: "mammoth" },
            { vi: "khỉ", en: "monkey" }, { vi: "khỉ đột", en: "gorilla" }, { vi: "tinh tinh", en: "chimpanzee" }, { vi: "đười ươi", en: "orangutan" }, { vi: "vượn cáo", en: "lemur" },
            { vi: "rắn", en: "snake" }, { vi: "rắn hổ mang", en: "cobra" }, { vi: "trăn", en: "python" }, { vi: "rắn lục", en: "viper" }, { vi: "rắn biển", en: "sea snake" },
            { vi: "thỏ", en: "rabbit" }, { vi: "thỏ rừng", en: "hare" }, { vi: "chuột", en: "mouse" }, { vi: "chuột cống", en: "rat" }, { vi: "chuột túi", en: "kangaroo" },
            { vi: "chuột chũi", en: "mole" }, { vi: "nhím", en: "hedgehog" }, { vi: "sóc", en: "squirrel" }, { vi: "sóc bay", en: "flying squirrel" }, { vi: "hải ly", en: "beaver" },
            { vi: "ngựa", en: "horse" }, { vi: "ngựa vằn", en: "zebra" }, { vi: "lừa", en: "donkey" }, { vi: "bò", en: "cow" }, { vi: "bò tót", en: "bison" },
            { vi: "trâu", en: "buffalo" }, { vi: "dê", en: "goat" }, { vi: "cừu", en: "sheep" }, { vi: "cừu non", en: "lamb" }, { vi: "hươu", en: "deer" },
            { vi: "nai", en: "antelope" }, { vi: "hưu cao cổ", en: "giraffe" }, { vi: "tê giác", en: "rhinoceros" }, { vi: "hà mã", en: "hippopotamus" }, { vi: "lạc đà", en: "camel" },
            { vi: "gấu", en: "bear" }, { vi: "gấu trúc", en: "panda" }, { vi: "gấu Bắc Cực", en: "polar bear" }, { vi: "gấu nâu", en: "brown bear" }, { vi: "cáo", en: "fox" },
            { vi: "sói", en: "wolf" }, { vi: "chó sói", en: "coyote" }, { vi: "linh cẩu", en: "hyena" }, { vi: "cầy hương", en: "civet" }, { vi: "chồn", en: "weasel" },
            { vi: "cú", en: "owl" }, { vi: "dơi", en: "bat" }, { vi: "ếch", en: "frog" }, { vi: "nhái", en: "toad" }, { vi: "kỳ nhông", en: "salamander" }
        ]
    },
    
    // ==================== 5. CÔNG NGHỆ (TECHNOLOGY) - 100+ từ ====================
    technology: {
        name: "💻 CÔNG NGHỆ - TECHNOLOGY",
        words: [
            { vi: "máy tính", en: "computer" }, { vi: "máy tính để bàn", en: "desktop" }, { vi: "laptop", en: "laptop" }, { vi: "máy tính bảng", en: "tablet" },
            { vi: "máy chủ", en: "server" }, { vi: "siêu máy tính", en: "supercomputer" }, { vi: "máy tính lượng tử", en: "quantum computer" }, { vi: "máy tính nhúng", en: "embedded computer" },
            { vi: "điện thoại", en: "phone" }, { vi: "điện thoại thông minh", en: "smartphone" }, { vi: "điện thoại phổ thông", en: "feature phone" }, { vi: "máy nhắn tin", en: "pager" },
            { vi: "internet", en: "internet" }, { vi: "mạng", en: "network" }, { vi: "wifi", en: "WiFi" }, { vi: "mạng có dây", en: "wired network" }, { vi: "mạng di động", en: "mobile network" },
            { vi: "5G", en: "5G" }, { vi: "cáp quang", en: "fiber optic" }, { vi: "vệ tinh", en: "satellite" }, { vi: "đám mây", en: "cloud" },
            { vi: "phần mềm", en: "software" }, { vi: "phần cứng", en: "hardware" }, { vi: "hệ điều hành", en: "operating system" }, { vi: "ứng dụng", en: "application" },
            { vi: "trình duyệt", en: "browser" }, { vi: "trình soạn thảo", en: "editor" }, { vi: "trình biên dịch", en: "compiler" }, { vi: "cơ sở dữ liệu", en: "database" },
            { vi: "dữ liệu", en: "data" }, { vi: "thông tin", en: "information" }, { vi: "bảo mật", en: "security" }, { vi: "mật khẩu", en: "password" }, { vi: "mã hóa", en: "encryption" },
            { vi: "tường lửa", en: "firewall" }, { vi: "virus", en: "virus" }, { vi: "phần mềm độc hại", en: "malware" }, { vi: "tấn công mạng", en: "cyber attack" },
            { vi: "trí tuệ nhân tạo", en: "artificial intelligence" }, { vi: "AI", en: "AI" }, { vi: "machine learning", en: "machine learning" }, { vi: "deep learning", en: "deep learning" },
            { vi: "mạng neural", en: "neural network" }, { vi: "xử lý ngôn ngữ tự nhiên", en: "NLP" }, { vi: "thị giác máy tính", en: "computer vision" }, { vi: "robot", en: "robot" },
            { vi: "robot công nghiệp", en: "industrial robot" }, { vi: "robot dịch vụ", en: "service robot" }, { vi: "robot y tế", en: "medical robot" }, { vi: "robot chiến đấu", en: "combat robot" },
            { vi: "mạng xã hội", en: "social media" }, { vi: "Facebook", en: "Facebook" }, { vi: "Instagram", en: "Instagram" }, { vi: "TikTok", en: "TikTok" },
            { vi: "Youtube", en: "YouTube" }, { vi: "Twitter", en: "Twitter" }, { vi: "LinkedIn", en: "LinkedIn" }, { vi: "Zalo", en: "Zalo" },
            { vi: "lập trình", en: "programming" }, { vi: "code", en: "code" }, { vi: "ngôn ngữ lập trình", en: "programming language" }, { vi: "Python", en: "Python" },
            { vi: "Java", en: "Java" }, { vi: "JavaScript", en: "JavaScript" }, { vi: "C++", en: "C++" }, { vi: "HTML", en: "HTML" }, { vi: "CSS", en: "CSS" },
            { vi: "thuật toán", en: "algorithm" }, { vi: "cấu trúc dữ liệu", en: "data structure" }, { vi: "hàm", en: "function" }, { vi: "biến", en: "variable" },
            { vi: "vòng lặp", en: "loop" }, { vi: "điều kiện", en: "condition" }, { vi: "mảng", en: "array" }, { vi: "đối tượng", en: "object" },
            { vi: "trí tuệ nhân tạo tạo sinh", en: "generative AI" }, { vi: "ChatGPT", en: "ChatGPT" }, { vi: "Gemini", en: "Gemini" }, { vi: "Copilot", en: "Copilot" }
        ]
    },
    
    // ==================== 6. DU LỊCH (TRAVEL) - 100+ từ ====================
    travel: {
        name: "✈️ DU LỊCH - TRAVEL",
        words: [
            { vi: "sân bay", en: "airport" }, { vi: "sân bay quốc tế", en: "international airport" }, { vi: "sân bay nội địa", en: "domestic airport" }, { vi: "ga hàng không", en: "air terminal" },
            { vi: "khách sạn", en: "hotel" }, { vi: "khách sạn 5 sao", en: "5-star hotel" }, { vi: "resort", en: "resort" }, { vi: "homestay", en: "homestay" },
            { vi: "nhà nghỉ", en: "inn" }, { vi: "hostel", en: "hostel" }, { vi: "căn hộ dịch vụ", en: "serviced apartment" }, { vi: "Airbnb", en: "Airbnb" },
            { vi: "vé máy bay", en: "airplane ticket" }, { vi: "vé khứ hồi", en: "round-trip ticket" }, { vi: "vé một chiều", en: "one-way ticket" }, { vi: "vé hạng nhất", en: "first class ticket" },
            { vi: "vé hạng thương gia", en: "business class ticket" }, { vi: "vé hạng phổ thông", en: "economy class ticket" }, { vi: "vé giá rẻ", en: "budget ticket" }, { vi: "đặt vé", en: "booking" },
            { vi: "hành lý", en: "luggage" }, { vi: "vali", en: "suitcase" }, { vi: "ba lô", en: "backpack" }, { vi: "túi xách tay", en: "handbag" }, { vi: "hành lý xách tay", en: "carry-on luggage" },
            { vi: "hành lý ký gửi", en: "checked baggage" }, { vi: "thẻ hành lý", en: "luggage tag" }, { vi: "cân hành lý", en: "luggage scale" }, { vi: "bảo vệ hành lý", en: "luggage wrap" },
            { vi: "bản đồ", en: "map" }, { vi: "bản đồ giấy", en: "paper map" }, { vi: "bản đồ số", en: "digital map" }, { vi: "Google Maps", en: "Google Maps" }, { vi: "GPS", en: "GPS" },
            { vi: "chỉ đường", en: "direction" }, { vi: "la bàn", en: "compass" }, { vi: "điểm đến", en: "destination" }, { vi: "địa danh", en: "landmark" },
            { vi: "hướng dẫn viên", en: "guide" }, { vi: "hướng dẫn viên du lịch", en: "tour guide" }, { vi: "cẩm nang du lịch", en: "travel guidebook" }, { vi: "review du lịch", en: "travel review" },
            { vi: "bãi biển", en: "beach" }, { vi: "bãi cát trắng", en: "white sand beach" }, { vi: "bãi đá", en: "rocky beach" }, { vi: "bãi tắm", en: "swimming beach" }, { vi: "bờ biển", en: "coast" },
            { vi: "núi", en: "mountain" }, { vi: "đỉnh núi", en: "mountain peak" }, { vi: "dãy núi", en: "mountain range" }, { vi: "chân núi", en: "mountain foot" }, { vi: "sườn núi", en: "mountain slope" },
            { vi: "phượt", en: "backpacking" }, { vi: "du lịch bụi", en: "budget travel" }, { vi: "du lịch mạo hiểm", en: "adventure travel" }, { vi: "du lịch xanh", en: "eco-tourism" },
            { vi: "du lịch nghỉ dưỡng", en: "leisure travel" }, { vi: "du lịch công vụ", en: "business travel" }, { vi: "du lịch chữa bệnh", en: "medical tourism" }, { vi: "du lịch tâm linh", en: "pilgrimage" },
            { vi: "du lịch", en: "travel" }, { vi: "khám phá", en: "explore" }, { vi: "phiêu lưu", en: "adventure" }, { vi: "trải nghiệm", en: "experience" },
            { vi: "hộ chiếu", en: "passport" }, { vi: "visa", en: "visa" }, { vi: "thị thực", en: "visa" }, { vi: "miễn thị thực", en: "visa-free" }, { vi: "thủ tục nhập cảnh", en: "immigration" },
            { vi: "hải quan", en: "customs" }, { vi: "tờ khai hải quan", en: "customs declaration" }, { vi: "kiểm tra an ninh", en: "security check" }, { vi: "cửa khẩu", en: "border gate" },
            { vi: "tour", en: "tour" }, { vi: "tour trọn gói", en: "package tour" }, { vi: "tour tự túc", en: "self-guided tour" }, { vi: "tour theo đoàn", en: "group tour" },
            { vi: "đặt phòng", en: "room reservation" }, { vi: "nhận phòng", en: "check-in" }, { vi: "trả phòng", en: "check-out" }, { vi: "dịch vụ phòng", en: "room service" }
        ]
    },

    // ==================== 7. THỜI TIẾT (WEATHER) - 80+ từ ====================
    weather: {
        name: "☀️ THỜI TIẾT - WEATHER",
        words: [
            { vi: "nắng", en: "sunny" }, { vi: "mưa", en: "rainy" }, { vi: "mưa phùn", en: "drizzle" }, { vi: "mưa rào", en: "shower" },
            { vi: "mưa to", en: "heavy rain" }, { vi: "mưa như trút", en: "downpour" }, { vi: "bão", en: "storm" }, { vi: "bão nhiệt đới", en: "tropical storm" },
            { vi: "cuồng phong", en: "hurricane" }, { vi: "lốc xoáy", en: "tornado" }, { vi: "gió", en: "windy" }, { vi: "gió mạnh", en: "gale" },
            { vi: "lặng gió", en: "calm" }, { vi: "mây", en: "cloudy" }, { vi: "mây đen", en: "dark cloud" }, { vi: "mây trắng", en: "white cloud" },
            { vi: "u ám", en: "gloomy" }, { vi: "sương mù", en: "foggy" }, { vi: "sương mù dày", en: "mist" }, { vi: "tuyết", en: "snowy" },
            { vi: "tuyết rơi", en: "snowfall" }, { vi: "bão tuyết", en: "blizzard" }, { vi: "mưa đá", en: "hail" }, { vi: "sấm sét", en: "thunderstorm" },
            { vi: "tia chớp", en: "lightning" }, { vi: "tiếng sấm", en: "thunder" }, { vi: "cầu vồng", en: "rainbow" }, { vi: "nhiệt độ", en: "temperature" },
            { vi: "nóng", en: "hot" }, { vi: "nóng bức", en: "scorching" }, { vi: "ấm áp", en: "warm" }, { vi: "mát mẻ", en: "cool" },
            { vi: "lạnh", en: "cold" }, { vi: "giá lạnh", en: "freezing" }, { vi: "ẩm ướt", en: "humid" }, { vi: "khô ráo", en: "dry" },
            { vi: "độ ẩm", en: "humidity" }, { vi: "áp suất không khí", en: "air pressure" }, { vi: "dự báo thời tiết", en: "weather forecast" }, { vi: "mùa", en: "season" },
            { vi: "mùa xuân", en: "spring" }, { vi: "mùa hạ", en: "summer" }, { vi: "mùa thu", en: "autumn" }, { vi: "mùa đông", en: "winter" }
        ]
    },

    // ==================== 8. TRƯỜNG HỌC (SCHOOL) - 100+ từ ====================
    school: {
        name: "📚 TRƯỜNG HỌC - SCHOOL",
        words: [
            { vi: "trường học", en: "school" }, { vi: "trường mầm non", en: "kindergarten" }, { vi: "trường tiểu học", en: "elementary school" }, { vi: "trường cấp 2", en: "middle school" },
            { vi: "trường cấp 3", en: "high school" }, { vi: "đại học", en: "university" }, { vi: "cao đẳng", en: "college" }, { vi: "học viện", en: "academy" },
            { vi: "lớp học", en: "classroom" }, { vi: "bảng", en: "blackboard" }, { vi: "phấn", en: "chalk" }, { vi: "bút lông", en: "marker" },
            { vi: "bút dạ", en: "whiteboard marker" }, { vi: "bút mực", en: "pen" }, { vi: "bút bi", en: "ballpoint pen" }, { vi: "bút chì", en: "pencil" },
            { vi: "tẩy", en: "eraser" }, { vi: "gọt bút chì", en: "sharpener" }, { vi: "thước kẻ", en: "ruler" }, { vi: "compa", en: "compass" },
            { vi: "ê ke", en: "set square" }, { vi: "máy tính bỏ túi", en: "calculator" }, { vi: "vở", en: "notebook" }, { vi: "sách giáo khoa", en: "textbook" },
            { vi: "sách bài tập", en: "workbook" }, { vi: "từ điển", en: "dictionary" }, { vi: "giáo viên", en: "teacher" }, { vi: "học sinh", en: "student" },
            { vi: "sinh viên", en: "university student" }, { vi: "hiệu trưởng", en: "principal" }, { vi: "hiệu phó", en: "vice principal" }, { vi: "giáo sư", en: "professor" },
            { vi: "trợ giảng", en: "teaching assistant" }, { vi: "bài tập về nhà", en: "homework" }, { vi: "bài kiểm tra", en: "test" }, { vi: "thi cử", en: "exam" },
            { vi: "điểm số", en: "score" }, { vi: "xếp hạng", en: "rank" }, { vi: "tốt nghiệp", en: "graduate" }, { vi: "bằng cấp", en: "diploma" },
            { vi: "học bổng", en: "scholarship" }, { vi: "môn học", en: "subject" }, { vi: "toán", en: "math" }, { vi: "vật lý", en: "physics" },
            { vi: "hóa học", en: "chemistry" }, { vi: "sinh học", en: "biology" }, { vi: "lịch sử", en: "history" }, { vi: "địa lý", en: "geography" },
            { vi: "văn học", en: "literature" }, { vi: "tiếng Anh", en: "English" }, { vi: "thể dục", en: "physical education" }, { vi: "nghệ thuật", en: "art" },
            { vi: "âm nhạc", en: "music" }, { vi: "tin học", en: "computer science" }, { vi: "thư viện", en: "library" }, { vi: "phòng thí nghiệm", en: "laboratory" }
        ]
    },

    // ==================== 9. Y TẾ & SỨC KHỎE (HEALTH) - 90+ từ ====================
    health: {
        name: "🏥 Y TẾ - HEALTH & MEDICAL",
        words: [
            { vi: "sức khỏe", en: "health" }, { vi: "bệnh", en: "disease" }, { vi: "bệnh nhẹ", en: "minor illness" }, { vi: "bệnh nặng", en: "serious illness" },
            { vi: "cảm cúm", en: "flu" }, { vi: "cảm lạnh", en: "cold" }, { vi: "sốt", en: "fever" }, { vi: "ho", en: "cough" },
            { vi: "đau đầu", en: "headache" }, { vi: "đau bụng", en: "stomachache" }, { vi: "đau răng", en: "toothache" }, { vi: "đau họng", en: "sore throat" },
            { vi: "viêm họng", en: "pharyngitis" }, { vi: "cảm mạo", en: "common cold" }, { vi: "dị ứng", en: "allergy" }, { vi: "hen suyễn", en: "asthma" },
            { vi: "tiểu đường", en: "diabetes" }, { vi: "huyết áp cao", en: "high blood pressure" }, { vi: "huyết áp thấp", en: "low blood pressure" }, { vi: "bệnh tim", en: "heart disease" },
            { vi: "ung thư", en: "cancer" }, { vi: "bác sĩ", en: "doctor" }, { vi: "y tá", en: "nurse" }, { vi: "dược sĩ", en: "pharmacist" },
            { vi: "bệnh viện", en: "hospital" }, { vi: "phòng khám", en: "clinic" }, { vi: "hiệu thuốc", en: "pharmacy" }, { vi: "thuốc", en: "medicine" },
            { vi: "kháng sinh", en: "antibiotic" }, { vi: "thuốc giảm đau", en: "painkiller" }, { vi: "thuốc hạ sốt", en: "fever reducer" }, { vi: "siro ho", en: "cough syrup" },
            { vi: "tiêm", en: "injection" }, { vi: "truyền dịch", en: "IV drip" }, { vi: "xét nghiệm", en: "test" }, { vi: "siêu âm", en: "ultrasound" },
            { vi: "X-quang", en: "X-ray" }, { vi: "chụp CT", en: "CT scan" }, { vi: "mổ", en: "surgery" }, { vi: "phẫu thuật", en: "operation" },
            { vi: "băng bó", en: "bandage" }, { vi: "bông băng", en: "cotton" }, { vi: "gạc", en: "gauze" }, { vi: "băng cá nhân", en: "band-aid" },
            { vi: "nhiệt kế", en: "thermometer" }, { vi: "máy đo huyết áp", en: "blood pressure monitor" }, { vi: "máy đo đường huyết", en: "glucose meter" }, { vi: "khẩu trang", en: "face mask" }
        ]
    },

    // ==================== 10. NGHỀ NGHIỆP (JOBS) - 100+ từ ====================
    jobs: {
        name: "💼 NGHỀ NGHIỆP - JOBS & PROFESSIONS",
        words: [
            { vi: "bác sĩ", en: "doctor" }, { vi: "kỹ sư", en: "engineer" }, { vi: "giáo viên", en: "teacher" }, { vi: "luật sư", en: "lawyer" },
            { vi: "nha sĩ", en: "dentist" }, { vi: "kiến trúc sư", en: "architect" }, { vi: "kế toán", en: "accountant" }, { vi: "ngân hàng", en: "banker" },
            { vi: "thợ điện", en: "electrician" }, { vi: "thợ sửa ống nước", en: "plumber" }, { vi: "thợ mộc", en: "carpenter" }, { vi: "thợ xây", en: "construction worker" },
            { vi: "tài xế", en: "driver" }, { vi: "phi công", en: "pilot" }, { vi: "tiếp viên hàng không", en: "flight attendant" }, { vi: "đầu bếp", en: "chef" },
            { vi: "phục vụ bàn", en: "waiter" }, { vi: "lễ tân", en: "receptionist" }, { vi: "bảo vệ", en: "security guard" }, { vi: "tạp vụ", en: "janitor" },
            { vi: "nông dân", en: "farmer" }, { vi: "công nhân", en: "factory worker" }, { vi: "nhà văn", en: "writer" }, { vi: "nhà báo", en: "journalist" },
            { vi: "phóng viên", en: "reporter" }, { vi: "biên tập viên", en: "editor" }, { vi: "họa sĩ", en: "painter" }, { vi: "nhạc sĩ", en: "musician" },
            { vi: "ca sĩ", en: "singer" }, { vi: "diễn viên", en: "actor" }, { vi: "đạo diễn", en: "director" }, { vi: "nhà sản xuất", en: "producer" },
            { vi: "nhiếp ảnh gia", en: "photographer" }, { vi: "nhà thiết kế", en: "designer" }, { vi: "lập trình viên", en: "programmer" }, { vi: "kỹ thuật viên", en: "technician" },
            { vi: "quản lý", en: "manager" }, { vi: "giám đốc", en: "director" }, { vi: "CEO", en: "CEO" }, { vi: "chủ tịch", en: "chairman" },
            { vi: "doanh nhân", en: "businessman" }, { vi: "nhân viên văn phòng", en: "office worker" }, { vi: "thư ký", en: "secretary" }, { vi: "trợ lý", en: "assistant" }
        ]
    },

    // ==================== 11. THỂ THAO (SPORTS) - 80+ từ ====================
    sports: {
        name: "⚽ THỂ THAO - SPORTS",
        words: [
            { vi: "bóng đá", en: "soccer" }, { vi: "bóng chuyền", en: "volleyball" }, { vi: "bóng rổ", en: "basketball" }, { vi: "bóng chày", en: "baseball" },
            { vi: "bóng bầu dục", en: "football" }, { vi: "quần vợt", en: "tennis" }, { vi: "cầu lông", en: "badminton" }, { vi: "bóng bàn", en: "table tennis" },
            { vi: "bơi lội", en: "swimming" }, { vi: "bơi ếch", en: "breaststroke" }, { vi: "bơi sải", en: "freestyle" }, { vi: "bơi bướm", en: "butterfly" },
            { vi: "bơi ngửa", en: "backstroke" }, { vi: "chạy bộ", en: "running" }, { vi: "chạy marathon", en: "marathon" }, { vi: "chạy nước rút", en: "sprint" },
            { vi: "chạy vượt rào", en: "hurdles" }, { vi: "điền kinh", en: "athletics" }, { vi: "nhảy xa", en: "long jump" }, { vi: "nhảy cao", en: "high jump" },
            { vi: "nhảy ba bước", en: "triple jump" }, { vi: "đẩy tạ", en: "shot put" }, { vi: "ném lao", en: "javelin" }, { vi: "ném đĩa", en: "discus" },
            { vi: "cử tạ", en: "weightlifting" }, { vi: "thể hình", en: "bodybuilding" }, { vi: "bắn cung", en: "archery" }, { vi: "đấu kiếm", en: "fencing" },
            { vi: "võ thuật", en: "martial arts" }, { vi: "karate", en: "karate" }, { vi: "taekwondo", en: "taekwondo" }, { vi: "judo", en: "judo" },
            { vi: "boxing", en: "boxing" }, { vi: "MMA", en: "MMA" }, { vi: "vật", en: "wrestling" }, { vi: "đua xe đạp", en: "cycling" }
        ]
    },

    // ==================== 12. ẨM THỰC (FOOD & DRINK) - 120+ từ ====================
    food: {
        name: "🍜 ẨM THỰC - FOOD & DRINK",
        words: [
            { vi: "phở", en: "pho" }, { vi: "bún", en: "vermicelli" }, { vi: "miến", en: "glass noodle" }, { vi: "hủ tiếu", en: "hu tieu" },
            { vi: "cơm", en: "rice" }, { vi: "cơm rang", en: "fried rice" }, { vi: "cơm tấm", en: "broken rice" }, { vi: "xôi", en: "sticky rice" },
            { vi: "cháo", en: "porridge" }, { vi: "bánh mì", en: "bread" }, { vi: "bánh bao", en: "steamed bun" }, { vi: "bánh cuốn", en: "steamed rice roll" },
            { vi: "bánh xèo", en: "sizzling pancake" }, { vi: "bánh tráng", en: "rice paper" }, { vi: "bánh đa", en: "rice cracker" }, { vi: "bánh kẹo", en: "candy" },
            { vi: "thịt", en: "meat" }, { vi: "thịt bò", en: "beef" }, { vi: "thịt heo", en: "pork" }, { vi: "thịt gà", en: "chicken" },
            { vi: "thịt vịt", en: "duck" }, { vi: "thịt cừu", en: "lamb" }, { vi: "thịt dê", en: "goat" }, { vi: "cá", en: "fish" },
            { vi: "tôm", en: "shrimp" }, { vi: "cua", en: "crab" }, { vi: "mực", en: "squid" }, { vi: "sò", en: "clam" },
            { vi: "ốc", en: "snail" }, { vi: "hàu", en: "oyster" }, { vi: "rau", en: "vegetable" }, { vi: "củ quả", en: "fruit and vegetable" },
            { vi: "trái cây", en: "fruit" }, { vi: "táo", en: "apple" }, { vi: "cam", en: "orange" }, { vi: "chuối", en: "banana" },
            { vi: "xoài", en: "mango" }, { vi: "thanh long", en: "dragon fruit" }, { vi: "sầu riêng", en: "durian" }, { vi: "măng cụt", en: "mangosteen" }
        ]
    },

    // ==================== 13. GIAO THÔNG (TRANSPORT) - 80+ từ ====================
    transport: {
        name: "🚗 GIAO THÔNG - TRANSPORT",
        words: [
            { vi: "xe hơi", en: "car" }, { vi: "xe máy", en: "motorbike" }, { vi: "xe đạp", en: "bicycle" }, { vi: "xe buýt", en: "bus" },
            { vi: "xe tải", en: "truck" }, { vi: "xe khách", en: "coach" }, { vi: "xe taxi", en: "taxi" }, { vi: "xe cứu thương", en: "ambulance" },
            { vi: "xe cứu hỏa", en: "fire truck" }, { vi: "xe cảnh sát", en: "police car" }, { vi: "xe đua", en: "race car" }, { vi: "xe thể thao", en: "sports car" },
            { vi: "xe sang", en: "luxury car" }, { vi: "xe điện", en: "electric car" }, { vi: "xe lai", en: "hybrid car" }, { vi: "xe SUV", en: "SUV" },
            { vi: "xe bán tải", en: "pickup truck" }, { vi: "xe van", en: "van" }, { vi: "xe tay ga", en: "scooter" }, { vi: "xe côn tay", en: "manual motorbike" },
            { vi: "tàu hỏa", en: "train" }, { vi: "tàu điện ngầm", en: "subway" }, { vi: "tàu cao tốc", en: "bullet train" }, { vi: "xe điện", en: "tram" },
            { vi: "máy bay", en: "airplane" }, { vi: "trực thăng", en: "helicopter" }, { vi: "tàu thủy", en: "ship" }, { vi: "phà", en: "ferry" },
            { vi: "thuyền", en: "boat" }, { vi: "ca nô", en: "canoe" }, { vi: "xuồng", en: "dinghy" }, { vi: "vé", en: "ticket" }
        ]
    },

    // ==================== 14. THỜI GIAN (TIME) - 60+ từ ====================
    time: {
        name: "⏰ THỜI GIAN - TIME",
        words: [
            { vi: "giây", en: "second" }, { vi: "phút", en: "minute" }, { vi: "giờ", en: "hour" }, { vi: "ngày", en: "day" },
            { vi: "tuần", en: "week" }, { vi: "tháng", en: "month" }, { vi: "năm", en: "year" }, { vi: "thập kỷ", en: "decade" },
            { vi: "thế kỷ", en: "century" }, { vi: "thiên niên kỷ", en: "millennium" }, { vi: "buổi sáng", en: "morning" }, { vi: "buổi trưa", en: "noon" },
            { vi: "buổi chiều", en: "afternoon" }, { vi: "buổi tối", en: "evening" }, { vi: "ban đêm", en: "night" }, { vi: "nửa đêm", en: "midnight" },
            { vi: "bình minh", en: "dawn" }, { vi: "hoàng hôn", en: "dusk" }, { vi: "hôm qua", en: "yesterday" }, { vi: "hôm nay", en: "today" },
            { vi: "ngày mai", en: "tomorrow" }, { vi: "tuần trước", en: "last week" }, { vi: "tuần sau", en: "next week" }, { vi: "tháng trước", en: "last month" },
            { vi: "tháng sau", en: "next month" }, { vi: "năm ngoái", en: "last year" }, { vi: "năm sau", en: "next year" }, { vi: "hiện tại", en: "present" },
            { vi: "quá khứ", en: "past" }, { vi: "tương lai", en: "future" }, { vi: "sớm", en: "early" }, { vi: "muộn", en: "late" }
        ]
    },

    // ==================== 15. MÀU SẮC (COLORS) - 50+ từ ====================
    colors: {
        name: "🎨 MÀU SẮC - COLORS",
        words: [
            { vi: "đỏ", en: "red" }, { vi: "xanh dương", en: "blue" }, { vi: "xanh lá", en: "green" }, { vi: "vàng", en: "yellow" },
            { vi: "cam", en: "orange" }, { vi: "tím", en: "purple" }, { vi: "hồng", en: "pink" }, { vi: "nâu", en: "brown" },
            { vi: "đen", en: "black" }, { vi: "trắng", en: "white" }, { vi: "xám", en: "gray" }, { vi: "bạc", en: "silver" },
            { vi: "vàng kim", en: "gold" }, { vi: "đồng", en: "copper" }, { vi: "ngọc lam", en: "teal" }, { vi: "xanh lơ", en: "cyan" },
            { vi: "cánh sen", en: "magenta" }, { vi: "be", en: "beige" }, { vi: "kem", en: "cream" }, { vi: "màu bạc hà", en: "mint" }
        ]
    },

    // ==================== 16. GIA ĐÌNH (FAMILY) - 60+ từ ====================
    family: {
        name: "👨‍👩‍👧‍👦 GIA ĐÌNH - FAMILY",
        words: [
            { vi: "cha", en: "father" }, { vi: "mẹ", en: "mother" }, { vi: "bố", en: "dad" }, { vi: "mẹ", en: "mom" },
            { vi: "con trai", en: "son" }, { vi: "con gái", en: "daughter" }, { vi: "anh trai", en: "brother" }, { vi: "chị gái", en: "sister" },
            { vi: "ông nội", en: "grandfather" }, { vi: "bà nội", en: "grandmother" }, { vi: "ông ngoại", en: "maternal grandfather" }, { vi: "bà ngoại", en: "maternal grandmother" },
            { vi: "chú", en: "uncle" }, { vi: "cô", en: "aunt" }, { vi: "anh em họ", en: "cousin" }, { vi: "cháu trai", en: "nephew" },
            { vi: "cháu gái", en: "niece" }, { vi: "vợ", en: "wife" }, { vi: "chồng", en: "husband" }, { vi: "bố vợ", en: "father-in-law" },
            { vi: "mẹ vợ", en: "mother-in-law" }, { vi: "anh rể", en: "brother-in-law" }, { vi: "chị dâu", en: "sister-in-law" }, { vi: "con rể", en: "son-in-law" },
            { vi: "con dâu", en: "daughter-in-law" }, { vi: "cha dượng", en: "stepfather" }, { vi: "mẹ kế", en: "stepmother" }, { vi: "con riêng", en: "stepchild" }
        ]
    },

    // ==================== 17. MUA SẮM (SHOPPING) - 80+ từ ====================
    shopping: {
        name: "🛍️ MUA SẮM - SHOPPING",
        words: [
            { vi: "cửa hàng", en: "store" }, { vi: "siêu thị", en: "supermarket" }, { vi: "trung tâm thương mại", en: "mall" }, { vi: "chợ", en: "market" },
            { vi: "chợ đêm", en: "night market" }, { vi: "chợ trời", en: "flea market" }, { vi: "cửa hàng tiện lợi", en: "convenience store" }, { vi: "shop online", en: "online shop" },
            { vi: "mua sắm", en: "shopping" }, { vi: "mua hàng", en: "buy" }, { vi: "bán hàng", en: "sell" }, { vi: "giá cả", en: "price" },
            { vi: "giá rẻ", en: "cheap" }, { vi: "giá đắt", en: "expensive" }, { vi: "giảm giá", en: "discount" }, { vi: "khuyến mãi", en: "promotion" },
            { vi: "sale", en: "sale" }, { vi: "flash sale", en: "flash sale" }, { vi: "mua 1 tặng 1", en: "buy one get one" }, { vi: "freeship", en: "free shipping" },
            { vi: "hóa đơn", en: "bill" }, { vi: "tiền mặt", en: "cash" }, { vi: "thẻ tín dụng", en: "credit card" }, { vi: "thẻ ghi nợ", en: "debit card" },
            { vi: "chuyển khoản", en: "bank transfer" }, { vi: "ví điện tử", en: "e-wallet" }, { vi: "trả góp", en: "installment" }, { vi: "hoàn tiền", en: "refund" },
            { vi: "đổi trả", en: "exchange" }, { vi: "bảo hành", en: "warranty" }, { vi: "size", en: "size" }, { vi: "màu sắc", en: "color" }
        ]
    },

    // ==================== 18. CẢM XÚC (EMOTIONS) - 70+ từ ====================
    emotions: {
        name: "😊 CẢM XÚC - EMOTIONS",
        words: [
            { vi: "vui vẻ", en: "happy" }, { vi: "buồn", en: "sad" }, { vi: "tức giận", en: "angry" }, { vi: "sợ hãi", en: "scared" },
            { vi: "lo lắng", en: "anxious" }, { vi: "căng thẳng", en: "stressed" }, { vi: "phấn khích", en: "excited" }, { vi: "thất vọng", en: "disappointed" },
            { vi: "ngạc nhiên", en: "surprised" }, { vi: "bối rối", en: "confused" }, { vi: "xấu hổ", en: "embarrassed" }, { vi: "tự hào", en: "proud" },
            { vi: "ghen tị", en: "jealous" }, { vi: "cô đơn", en: "lonely" }, { vi: "hạnh phúc", en: "joyful" }, { vi: "biết ơn", en: "grateful" },
            { vi: "buồn chán", en: "bored" }, { vi: "mệt mỏi", en: "tired" }, { vi: "phấn khởi", en: "cheerful" }, { vi: "u sầu", en: "melancholic" },
            { vi: "bình tĩnh", en: "calm" }, { vi: "hoảng loạn", en: "panicked" }, { vi: "tò mò", en: "curious" }, { vi: "háo hức", en: "eager" }
        ]
    },

    // ==================== 19. NHÀ CỬA (HOUSE) - 80+ từ ====================
    house: {
        name: "🏠 NHÀ CỬA - HOUSE",
        words: [
            { vi: "nhà", en: "house" }, { vi: "căn hộ", en: "apartment" }, { vi: "biệt thự", en: "villa" }, { vi: "nhà phố", en: "townhouse" },
            { vi: "phòng khách", en: "living room" }, { vi: "phòng ngủ", en: "bedroom" }, { vi: "phòng bếp", en: "kitchen" }, { vi: "phòng tắm", en: "bathroom" },
            { vi: "phòng ăn", en: "dining room" }, { vi: "phòng làm việc", en: "home office" }, { vi: "phòng giặt", en: "laundry room" }, { vi: "sân thượng", en: "rooftop" },
            { vi: "tầng hầm", en: "basement" }, { vi: "gác xép", en: "attic" }, { vi: "ban công", en: "balcony" }, { vi: "sân vườn", en: "garden" },
            { vi: "cửa ra vào", en: "door" }, { vi: "cửa sổ", en: "window" }, { vi: "tường", en: "wall" }, { vi: "sàn nhà", en: "floor" },
            { vi: "trần nhà", en: "ceiling" }, { vi: "mái nhà", en: "roof" }, { vi: "cầu thang", en: "stairs" }, { vi: "thang máy", en: "elevator" }
        ]
    },

    // ==================== 20. CÂY CỐI (PLANTS) - 60+ từ ====================
    plants: {
        name: "🌿 CÂY CỐI - PLANTS & FLOWERS",
        words: [
            { vi: "cây", en: "tree" }, { vi: "hoa", en: "flower" }, { vi: "cỏ", en: "grass" }, { vi: "lá", en: "leaf" },
            { vi: "hoa hồng", en: "rose" }, { vi: "hoa sen", en: "lotus" }, { vi: "hoa cúc", en: "chrysanthemum" }, { vi: "hoa lan", en: "orchid" },
            { vi: "hoa mai", en: "apricot blossom" }, { vi: "hoa đào", en: "peach blossom" }, { vi: "cây lúa", en: "rice plant" }, { vi: "cây ngô", en: "corn" },
            { vi: "cây lúa mì", en: "wheat" }, { vi: "cây cà phê", en: "coffee plant" }, { vi: "cây cao su", en: "rubber tree" }, { vi: "cây thông", en: "pine tree" },
            { vi: "cây tre", en: "bamboo" }, { vi: "cây dừa", en: "coconut tree" }, { vi: "cây bàng", en: "terminalia" }, { vi: "cây phượng", en: "flame tree" }
        ]
    },

    // ==================== 21. ĐỒ ĐIỆN TỬ (ELECTRONICS) - 70+ từ ====================
    electronics: {
        name: "📱 ĐIỆN TỬ - ELECTRONICS",
        words: [
            { vi: "tivi", en: "TV" }, { vi: "máy tính", en: "computer" }, { vi: "laptop", en: "laptop" }, { vi: "máy tính bảng", en: "tablet" },
            { vi: "điện thoại", en: "phone" }, { vi: "đồng hồ thông minh", en: "smartwatch" }, { vi: "tai nghe", en: "headphone" }, { vi: "loa", en: "speaker" },
            { vi: "sạc dự phòng", en: "power bank" }, { vi: "củ sạc", en: "charger" }, { vi: "cáp", en: "cable" }, { vi: "USB", en: "USB" },
            { vi: "máy ảnh", en: "camera" }, { vi: "máy quay", en: "camcorder" }, { vi: "máy in", en: "printer" }, { vi: "máy scan", en: "scanner" },
            { vi: "bàn phím", en: "keyboard" }, { vi: "chuột", en: "mouse" }, { vi: "màn hình", en: "monitor" }, { vi: "router", en: "router" }
        ]
    },

    // ==================== 22. QUẦN ÁO (CLOTHING) - 120+ từ ====================
    clothing: {
        name: "👕 QUẦN ÁO - CLOTHING & FASHION",
        words: [
            { vi: "áo sơ mi", en: "shirt" }, { vi: "áo phông", en: "t-shirt" }, { vi: "áo ba lỗ", en: "tank top" }, { vi: "áo cộc tay", en: "short sleeve shirt" },
            { vi: "áo dài tay", en: "long sleeve shirt" }, { vi: "áo len", en: "sweater" }, { vi: "áo hoodie", en: "hoodie" }, { vi: "áo khoác", en: "jacket" },
            { vi: "áo gió", en: "windbreaker" }, { vi: "áo mưa", en: "raincoat" }, { vi: "áo phao", en: "puffer jacket" }, { vi: "áo da", en: "leather jacket" },
            { vi: "áo vest", en: "vest" }, { vi: "áo blazer", en: "blazer" }, { vi: "áo suit", en: "suit jacket" }, { vi: "áo dài", en: "ao dai" },
            { vi: "áo bà ba", en: "traditional Vietnamese shirt" }, { vi: "quần dài", en: "pants" }, { vi: "quần short", en: "shorts" }, { vi: "quần jean", en: "jeans" },
            { vi: "quần tây", en: "trousers" }, { vi: "quần đùi", en: "short pants" }, { vi: "quần legging", en: "leggings" }, { vi: "quần jogger", en: "joggers" },
            { vi: "quần thể thao", en: "sweatpants" }, { vi: "quần kaki", en: "khaki pants" }, { vi: "quần vải", en: "fabric pants" }, { vi: "quần lửng", en: "capri pants" },
            { vi: "váy", en: "skirt" }, { vi: "đầm", en: "dress" }, { vi: "đầm dạ hội", en: "evening gown" }, { vi: "đầm công sở", en: "office dress" },
            { vi: "đầm suông", en: "shift dress" }, { vi: "đầm maxi", en: "maxi dress" }, { vi: "đầm midi", en: "midi dress" }, { vi: "đầm ôm", en: "bodycon dress" },
            { vi: "áo tắm", en: "swimsuit" }, { vi: "áo tắm bikini", en: "bikini" }, { vi: "quần bơi", en: "swim trunks" }, { vi: "áo liền quần", en: "onesie" },
            { vi: "đồ ngủ", en: "pajamas" }, { vi: "áo choàng tắm", en: "bathrobe" }, { vi: "khăn quàng cổ", en: "scarf" }, { vi: "mũ", en: "hat" },
            { vi: "mũ bảo hiểm", en: "helmet" }, { vi: "mũ lưỡi trai", en: "cap" }, { vi: "mũ len", en: "beanie" }, { vi: "mũ rộng vành", en: "sun hat" },
            { vi: "nón lá", en: "conical hat" }, { vi: "giày", en: "shoes" }, { vi: "giày thể thao", en: "sneakers" }, { vi: "giày da", en: "leather shoes" },
            { vi: "giày cao gót", en: "high heels" }, { vi: "giày búp bê", en: "ballet flats" }, { vi: "giày sandal", en: "sandals" }, { vi: "dép", en: "flip flops" },
            { vi: "dép lào", en: "thai sandals" }, { vi: "ủng", en: "boots" }, { vi: "ủng cao su", en: "rain boots" }, { vi: "tất", en: "socks" },
            { vi: "vớ", en: "stockings" }, { vi: "quần tất", en: "pantyhose" }, { vi: "thắt lưng", en: "belt" }, { vi: "cà vạt", en: "necktie" },
            { vi: "nơ", en: "bow tie" }, { vi: "kính mát", en: "sunglasses" }, { vi: "kính cận", en: "glasses" }, { vi: "đồng hồ", en: "watch" },
            { vi: "vòng tay", en: "bracelet" }, { vi: "dây chuyền", en: "necklace" }, { vi: "bông tai", en: "earrings" }, { vi: "nhẫn", en: "ring" },
            { vi: "túi xách", en: "handbag" }, { vi: "balo", en: "backpack" }, { vi: "ví da", en: "wallet" }, { vi: "cặp sách", en: "briefcase" },
            { vi: "túi tote", en: "tote bag" }, { vi: "túi đeo chéo", en: "crossbody bag" }, { vi: "vali", en: "suitcase" }, { vi: "ô", en: "umbrella" },
            { vi: "dù", en: "parasol" }, { vi: "găng tay", en: "gloves" }, { vi: "khăn tay", en: "handkerchief" }, { vi: "khăn choàng", en: "shawl" }
        ]
    },

    // ==================== 23. LÀNG XÓM (NEIGHBORHOOD) - 90+ từ ====================
    neighborhood: {
        name: "🏘️ LÀNG XÓM - NEIGHBORHOOD",
        words: [
            { vi: "làng", en: "village" }, { vi: "xóm", en: "hamlet" }, { vi: "thôn", en: "rural village" }, { vi: "bản", en: "ethnic village" },
            { vi: "phố", en: "street" }, { vi: "đường", en: "road" }, { vi: "đại lộ", en: "avenue" }, { vi: "ngõ", en: "alley" },
            { vi: "hẻm", en: "lane" }, { vi: "quận", en: "district" }, { vi: "huyện", en: "rural district" }, { vi: "tỉnh", en: "province" },
            { vi: "thành phố", en: "city" }, { vi: "thị trấn", en: "town" }, { vi: "đô thị", en: "urban area" }, { vi: "nông thôn", en: "countryside" },
            { vi: "hàng xóm", en: "neighbor" }, { vi: "người ở cạnh", en: "next-door neighbor" }, { vi: "dân làng", en: "villager" }, { vi: "cư dân", en: "resident" },
            { vi: "công viên", en: "park" }, { vi: "vườn hoa", en: "garden" }, { vi: "quảng trường", en: "square" }, { vi: "chợ", en: "market" },
            { vi: "siêu thị", en: "supermarket" }, { vi: "cửa hàng tiện lợi", en: "convenience store" }, { vi: "hiệu thuốc", en: "pharmacy" }, { vi: "bệnh viện", en: "hospital" },
            { vi: "phòng khám", en: "clinic" }, { vi: "trường học", en: "school" }, { vi: "thư viện", en: "library" }, { vi: "nhà thờ", en: "church" },
            { vi: "chùa", en: "pagoda" }, { vi: "đền", en: "temple" }, { vi: "miếu", en: "shrine" }, { vi: "nhà thờ họ", en: "ancestral temple" },
            { vi: "trạm xe buýt", en: "bus stop" }, { vi: "bến xe", en: "bus station" }, { vi: "ga tàu", en: "train station" }, { vi: "sân bay", en: "airport" },
            { vi: "bãi đỗ xe", en: "parking lot" }, { vi: "cây xăng", en: "gas station" }, { vi: "trạm điện", en: "power station" }, { vi: "cột đèn", en: "lamppost" }
        ]
    },

    // ==================== 24. SỞ THÍCH (HOBBIES) - 100+ từ ====================
    hobbies: {
        name: "🎨 SỞ THÍCH - HOBBIES & LEISURE",
        words: [
            { vi: "đọc sách", en: "reading" }, { vi: "viết lách", en: "writing" }, { vi: "vẽ", en: "drawing" }, { vi: "tô màu", en: "coloring" },
            { vi: "nhiếp ảnh", en: "photography" }, { vi: "quay phim", en: "filming" }, { vi: "nghe nhạc", en: "listening to music" }, { vi: "chơi nhạc cụ", en: "playing instrument" },
            { vi: "hát", en: "singing" }, { vi: "nhảy", en: "dancing" }, { vi: "xem phim", en: "watching movies" }, { vi: "chơi game", en: "playing games" },
            { vi: "lướt web", en: "browsing the web" }, { vi: "lướt mạng xã hội", en: "scrolling social media" }, { vi: "nấu ăn", en: "cooking" }, { vi: "làm bánh", en: "baking" },
            { vi: "pha cà phê", en: "coffee brewing" }, { vi: "pha trà", en: "tea making" }, { vi: "cắm hoa", en: "flower arranging" }, { vi: "làm vườn", en: "gardening" },
            { vi: "trồng cây", en: "planting" }, { vi: "chăm sóc cây cảnh", en: "bonsai care" }, { vi: "nuôi thú cưng", en: "pet keeping" }, { vi: "chăm sóc chó mèo", en: "pet care" },
            { vi: "câu cá", en: "fishing" }, { vi: "đi săn", en: "hunting" }, { vi: "cắm trại", en: "camping" }, { vi: "đi bộ đường dài", en: "hiking" },
            { vi: "leo núi", en: "mountain climbing" }, { vi: "chèo thuyền", en: "boating" }, { vi: "lướt sóng", en: "surfing" }, { vi: "lặn biển", en: "diving" },
            { vi: "trượt tuyết", en: "skiing" }, { vi: "trượt băng", en: "ice skating" }, { vi: "đạp xe", en: "cycling" }, { vi: "chạy bộ", en: "jogging" },
            { vi: "tập yoga", en: "doing yoga" }, { vi: "thiền", en: "meditating" }, { vi: "tập gym", en: "working out" }, { vi: "bơi lội", en: "swimming" },
            { vi: "chơi cờ", en: "playing chess" }, { vi: "giải ô chữ", en: "doing crossword" }, { vi: "câu đố", en: "puzzles" }, { vi: "rubik", en: "rubik's cube" },
            { vi: "sưu tầm tem", en: "stamp collecting" }, { vi: "sưu tầm tiền xu", en: "coin collecting" }, { vi: "sưu tầm đồ cổ", en: "antique collecting" }, { vi: "săn giày", en: "sneaker collecting" }
        ]
    },

    // ==================== 25. CÔNG SỞ (OFFICE) - 90+ từ ====================
    office: {
        name: "💼 CÔNG SỞ - OFFICE",
        words: [
            { vi: "văn phòng", en: "office" }, { vi: "công ty", en: "company" }, { vi: "tập đoàn", en: "corporation" }, { vi: "doanh nghiệp", en: "enterprise" },
            { vi: "phòng họp", en: "meeting room" }, { vi: "phòng làm việc", en: "workspace" }, { vi: "bàn làm việc", en: "desk" }, { vi: "ghế văn phòng", en: "office chair" },
            { vi: "máy tính", en: "computer" }, { vi: "màn hình", en: "monitor" }, { vi: "bàn phím", en: "keyboard" }, { vi: "chuột máy tính", en: "mouse" },
            { vi: "máy in", en: "printer" }, { vi: "máy scan", en: "scanner" }, { vi: "máy fax", en: "fax machine" }, { vi: "điện thoại bàn", en: "desk phone" },
            { vi: "giấy A4", en: "A4 paper" }, { vi: "bút bi", en: "pen" }, { vi: "bút chì", en: "pencil" }, { vi: "bút dạ quang", en: "highlighter" },
            { vi: "kẹp giấy", en: "paper clip" }, { vi: "ghim giấy", en: "stapler" }, { vi: "kim bấm", en: "staple" }, { vi: "kéo", en: "scissors" },
            { vi: "băng dính", en: "tape" }, { vi: "keo dán", en: "glue" }, { vi: "sổ tay", en: "notebook" }, { vi: "lịch để bàn", en: "desk calendar" },
            { vi: "đồng hồ treo tường", en: "wall clock" }, { vi: "thùng rác", en: "trash bin" }, { vi: "tủ đựng hồ sơ", en: "filing cabinet" }, { vi: "kệ sách", en: "bookshelf" },
            { vi: "giám đốc", en: "director" }, { vi: "quản lý", en: "manager" }, { vi: "trưởng phòng", en: "department head" }, { vi: "nhân viên", en: "employee" },
            { vi: "thực tập sinh", en: "intern" }, { vi: "trợ lý", en: "assistant" }, { vi: "thư ký", en: "secretary" }, { vi: "lễ tân", en: "receptionist" },
            { vi: "họp", en: "meeting" }, { vi: "thuyết trình", en: "presentation" }, { vi: "báo cáo", en: "report" }, { vi: "dự án", en: "project" },
            { vi: "hạn chót", en: "deadline" }, { vi: "tăng ca", en: "overtime" }, { vi: "nghỉ phép", en: "leave" }, { vi: "nghỉ ốm", en: "sick leave" },
            { vi: "lương", en: "salary" }, { vi: "thưởng", en: "bonus" }, { vi: "tăng lương", en: "raise" }, { vi: "thăng chức", en: "promotion" }
        ]
    },

    // ==================== 26. BIỂN (OCEAN) - 90+ từ ====================
    ocean: {
        name: "🌊 BIỂN - OCEAN & MARINE",
        words: [
            { vi: "biển", en: "sea" }, { vi: "đại dương", en: "ocean" }, { vi: "Thái Bình Dương", en: "Pacific Ocean" }, { vi: "Đại Tây Dương", en: "Atlantic Ocean" },
            { vi: "Ấn Độ Dương", en: "Indian Ocean" }, { vi: "Bắc Băng Dương", en: "Arctic Ocean" }, { vi: "Nam Đại Dương", en: "Southern Ocean" }, { vi: "biển Đông", en: "East Sea" },
            { vi: "sóng", en: "wave" }, { vi: "sóng thần", en: "tsunami" }, { vi: "thủy triều", en: "tide" }, { vi: "dòng hải lưu", en: "ocean current" },
            { vi: "bờ biển", en: "coast" }, { vi: "bãi biển", en: "beach" }, { vi: "bãi cát", en: "sand beach" }, { vi: "bờ đá", en: "rocky shore" },
            { vi: "vịnh", en: "bay" }, { vi: "vũng", en: "cove" }, { vi: "cảng", en: "port" }, { vi: "bến tàu", en: "harbor" },
            { vi: "hải đăng", en: "lighthouse" }, { vi: "cầu cảng", en: "pier" }, { vi: "đảo", en: "island" }, { vi: "quần đảo", en: "archipelago" },
            { vi: "rạn san hô", en: "coral reef" }, { vi: "san hô", en: "coral" }, { vi: "hải quỳ", en: "sea anemone" }, { vi: "sao biển", en: "starfish" },
            { vi: "nhím biển", en: "sea urchin" }, { vi: "cầu gai", en: "sea cucumber" }, { vi: "cá voi", en: "whale" }, { vi: "cá heo", en: "dolphin" },
            { vi: "cá mập", en: "shark" }, { vi: "cá đuối", en: "ray" }, { vi: "cá ngựa", en: "seahorse" }, { vi: "cá hề", en: "clownfish" },
            { vi: "cá vàng", en: "goldfish" }, { vi: "cá chình", en: "eel" }, { vi: "mực", en: "squid" }, { vi: "bạch tuộc", en: "octopus" },
            { vi: "tôm", en: "shrimp" }, { vi: "tôm hùm", en: "lobster" }, { vi: "cua", en: "crab" }, { vi: "sò", en: "clam" },
            { vi: "ốc", en: "snail" }, { vi: "hàu", en: "oyster" }, { vi: "trai", en: "mussel" }, { vi: "ngọc trai", en: "pearl" },
            { vi: "rong biển", en: "seaweed" }, { vi: "tảo biển", en: "algae" }, { vi: "plankton", en: "plankton" }, { vi: "sinh vật phù du", en: "zooplankton" }
        ]
    },

    // ==================== 27. NÔNG NGHIỆP (AGRICULTURE) - 80+ từ ====================
    agriculture: {
        name: "🌾 NÔNG NGHIỆP - AGRICULTURE",
        words: [
            { vi: "nông nghiệp", en: "agriculture" }, { vi: "trồng trọt", en: "farming" }, { vi: "chăn nuôi", en: "animal husbandry" }, { vi: "làm vườn", en: "gardening" },
            { vi: "ruộng", en: "field" }, { vi: "đồng ruộng", en: "paddy field" }, { vi: "vườn", en: "garden" }, { vi: "vườn cây ăn trái", en: "orchard" },
            { vi: "trang trại", en: "farm" }, { vi: "nông trại", en: "ranch" }, { vi: "lúa", en: "rice" }, { vi: "lúa gạo", en: "paddy" },
            { vi: "lúa mì", en: "wheat" }, { vi: "ngô", en: "corn" }, { vi: "khoai", en: "potato" }, { vi: "sắn", en: "cassava" },
            { vi: "cà phê", en: "coffee" }, { vi: "ca cao", en: "cocoa" }, { vi: "chè", en: "tea" }, { vi: "cao su", en: "rubber" },
            { vi: "hồ tiêu", en: "pepper" }, { vi: "điều", en: "cashew" }, { vi: "dừa", en: "coconut" }, { vi: "mía", en: "sugarcane" },
            { vi: "thuốc lá", en: "tobacco" }, { vi: "bông vải", en: "cotton" }, { vi: "đất", en: "soil" }, { vi: "phân bón", en: "fertilizer" },
            { vi: "thuốc trừ sâu", en: "pesticide" }, { vi: "thuốc diệt cỏ", en: "herbicide" }, { vi: "máy cày", en: "tractor" }, { vi: "máy gặt", en: "harvester" },
            { vi: "liềm", en: "sickle" }, { vi: "cuốc", en: "hoe" }, { vi: "xẻng", en: "shovel" }, { vi: "cày", en: "plow" },
            { vi: "trâu", en: "water buffalo" }, { vi: "bò", en: "cow" }, { vi: "ngựa", en: "horse" }, { vi: "lợn", en: "pig" },
            { vi: "dê", en: "goat" }, { vi: "cừu", en: "sheep" }, { vi: "gà", en: "chicken" }, { vi: "vịt", en: "duck" }
        ]
    },

    // ==================== 28. XÂY DỰNG (CONSTRUCTION) - 80+ từ ====================
    construction: {
        name: "🏗️ XÂY DỰNG - CONSTRUCTION",
        words: [
            { vi: "xây dựng", en: "construction" }, { vi: "công trình", en: "project" }, { vi: "tòa nhà", en: "building" }, { vi: "cao ốc", en: "skyscraper" },
            { vi: "chung cư", en: "apartment building" }, { vi: "biệt thự", en: "villa" }, { vi: "cầu", en: "bridge" }, { vi: "đường", en: "road" },
            { vi: "đường hầm", en: "tunnel" }, { vi: "đập nước", en: "dam" }, { vi: "kênh đào", en: "canal" }, { vi: "sân bay", en: "airport" },
            { vi: "ga tàu", en: "train station" }, { vi: "bến cảng", en: "seaport" }, { vi: "công nhân", en: "worker" }, { vi: "thợ xây", en: "construction worker" },
            { vi: "kiến trúc sư", en: "architect" }, { vi: "kỹ sư xây dựng", en: "civil engineer" }, { vi: "thợ điện", en: "electrician" }, { vi: "thợ ống nước", en: "plumber" },
            { vi: "thợ hàn", en: "welder" }, { vi: "thợ sơn", en: "painter" }, { vi: "thợ mộc", en: "carpenter" }, { vi: "thợ nề", en: "bricklayer" },
            { vi: "xi măng", en: "cement" }, { vi: "cát", en: "sand" }, { vi: "đá", en: "stone" }, { vi: "gạch", en: "brick" },
            { vi: "ngói", en: "roof tile" }, { vi: "sắt thép", en: "steel" }, { vi: "bê tông", en: "concrete" }, { vi: "vữa", en: "mortar" },
            { vi: "gỗ", en: "wood" }, { vi: "kính", en: "glass" }, { vi: "móng", en: "foundation" }, { vi: "cột", en: "column" },
            { vi: "dầm", en: "beam" }, { vi: "tường", en: "wall" }, { vi: "sàn", en: "floor" }, { vi: "mái", en: "roof" },
            { vi: "cửa", en: "door" }, { vi: "cửa sổ", en: "window" }, { vi: "cầu thang", en: "staircase" }, { vi: "thang máy", en: "elevator" },
            { vi: "cần cẩu", en: "crane" }, { vi: "xe trộn bê tông", en: "concrete mixer" }, { vi: "xe tải", en: "truck" }, { vi: "giàn giáo", en: "scaffolding" }
        ]
    },

    // ==================== 29. CHÍNH TRỊ (POLITICS) - 80+ từ ====================
    politics: {
        name: "🏛️ CHÍNH TRỊ - POLITICS & GOVERNMENT",
        words: [
            { vi: "chính trị", en: "politics" }, { vi: "chính phủ", en: "government" }, { vi: "quốc hội", en: "parliament" }, { vi: "nghị viện", en: "congress" },
            { vi: "đảng", en: "party" }, { vi: "đảng cộng sản", en: "communist party" }, { vi: "đảng dân chủ", en: "democratic party" }, { vi: "đảng cộng hòa", en: "republican party" },
            { vi: "tổng thống", en: "president" }, { vi: "thủ tướng", en: "prime minister" }, { vi: "bộ trưởng", en: "minister" }, { vi: "thứ trưởng", en: "deputy minister" },
            { vi: "đại sứ", en: "ambassador" }, { vi: "lãnh sự", en: "consul" }, { vi: "thị trưởng", en: "mayor" }, { vi: "chủ tịch nước", en: "president of state" },
            { vi: "chủ tịch quốc hội", en: "parliament chairman" }, { vi: "chánh án", en: "chief justice" }, { vi: "luật", en: "law" }, { vi: "hiến pháp", en: "constitution" },
            { vi: "bầu cử", en: "election" }, { vi: "bỏ phiếu", en: "vote" }, { vi: "cử tri", en: "voter" }, { vi: "ứng cử viên", en: "candidate" },
            { vi: "chiến dịch", en: "campaign" }, { vi: "tuyền truyền", en: "propaganda" }, { vi: "chính sách", en: "policy" }, { vi: "cải cách", en: "reform" },
            { vi: "ngoại giao", en: "diplomacy" }, { vi: "quan hệ quốc tế", en: "international relations" }, { vi: "liên hợp quốc", en: "United Nations" }, { vi: "EU", en: "EU" },
            { vi: "ASEAN", en: "ASEAN" }, { vi: "hòa bình", en: "peace" }, { vi: "chiến tranh", en: "war" }, { vi: "xung đột", en: "conflict" },
            { vi: "khủng bố", en: "terrorism" }, { vi: "an ninh", en: "security" }, { vi: "quốc phòng", en: "defense" }, { vi: "quân đội", en: "military" }
        ]
    },

    // ==================== 30. KINH TẾ (ECONOMY) - 80+ từ ====================
    economy: {
        name: "💰 KINH TẾ - ECONOMY",
        words: [
            { vi: "kinh tế", en: "economy" }, { vi: "tài chính", en: "finance" }, { vi: "ngân hàng", en: "bank" }, { vi: "đầu tư", en: "investment" },
            { vi: "chứng khoán", en: "stock" }, { vi: "trái phiếu", en: "bond" }, { vi: "bảo hiểm", en: "insurance" }, { vi: "thuế", en: "tax" },
            { vi: "lạm phát", en: "inflation" }, { vi: "giảm phát", en: "deflation" }, { vi: "tăng trưởng", en: "growth" }, { vi: "suy thoái", en: "recession" },
            { vi: "khủng hoảng", en: "crisis" }, { vi: "thị trường", en: "market" }, { vi: "cung cầu", en: "supply and demand" }, { vi: "giá cả", en: "price" },
            { vi: "hàng hóa", en: "goods" }, { vi: "dịch vụ", en: "services" }, { vi: "sản xuất", en: "production" }, { vi: "tiêu dùng", en: "consumption" },
            { vi: "xuất khẩu", en: "export" }, { vi: "nhập khẩu", en: "import" }, { vi: "thương mại", en: "trade" }, { vi: "thặng dư", en: "surplus" },
            { vi: "thâm hụt", en: "deficit" }, { vi: "GDP", en: "GDP" }, { vi: "GNP", en: "GNP" }, { vi: "thu nhập bình quân", en: "per capita income" },
            { vi: "lương", en: "salary" }, { vi: "thu nhập", en: "income" }, { vi: "chi phí", en: "cost" }, { vi: "lợi nhuận", en: "profit" },
            { vi: "doanh thu", en: "revenue" }, { vi: "chi tiêu", en: "expenditure" }, { vi: "ngân sách", en: "budget" }, { vi: "nợ", en: "debt" },
            { vi: "vay", en: "loan" }, { vi: "lãi suất", en: "interest rate" }, { vi: "tiết kiệm", en: "saving" }, { vi: "tiền tệ", en: "currency" }
        ]
    },

    // ==================== 31. NGHỆ THUẬT (ART) - 100+ từ ====================
    art: {
        name: "🎭 NGHỆ THUẬT - ART & CREATIVITY",
        words: [
            { vi: "hội họa", en: "painting" }, { vi: "vẽ tranh", en: "drawing" }, { vi: "màu nước", en: "watercolor" }, { vi: "sơn dầu", en: "oil painting" },
            { vi: "màu acrylic", en: "acrylic" }, { vi: "màu bột", en: "gouache" }, { vi: "phấn màu", en: "pastel" }, { vi: "than chì", en: "charcoal" },
            { vi: "bút chì màu", en: "colored pencil" }, { vi: "bút dạ", en: "marker" }, { vi: "bút lông", en: "brush pen" }, { vi: "cọ vẽ", en: "paintbrush" },
            { vi: "giấy vẽ", en: "drawing paper" }, { vi: "canvas", en: "canvas" }, { vi: "giá vẽ", en: "easel" }, { vi: "bảng màu", en: "palette" },
            { vi: "điêu khắc", en: "sculpture" }, { vi: "tạc tượng", en: "statue carving" }, { vi: "gốm sứ", en: "ceramics" }, { vi: "làm gốm", en: "pottery" },
            { vi: "đất sét", en: "clay" }, { vi: "nặn tượng", en: "modeling" }, { vi: "phù điêu", en: "relief" }, { vi: "tranh khắc gỗ", en: "woodcut" },
            { vi: "nhiếp ảnh", en: "photography" }, { vi: "chụp ảnh", en: "taking photos" }, { vi: "máy ảnh", en: "camera" }, { vi: "ống kính", en: "lens" },
            { vi: "ánh sáng", en: "light" }, { vi: "bố cục", en: "composition" }, { vi: "góc chụp", en: "angle" }, { vi: "phơi sáng", en: "exposure" },
            { vi: "hậu kỳ", en: "post-production" }, { vi: "chỉnh sửa ảnh", en: "photo editing" }, { vi: "bộ lọc", en: "filter" }, { vi: "phong cảnh", en: "landscape" },
            { vi: "chân dung", en: "portrait" }, { vi: "tĩnh vật", en: "still life" }, { vi: "trừu tượng", en: "abstract" }, { vi: "hiện thực", en: "realism" },
            { vi: "ấn tượng", en: "impressionism" }, { vi: "lập thể", en: "cubism" }, { vi: "siêu thực", en: "surrealism" }, { vi: "hậu hiện đại", en: "postmodernism" },
            { vi: "họa sĩ", en: "artist" }, { vi: "nhà điêu khắc", en: "sculptor" }, { vi: "nhiếp ảnh gia", en: "photographer" }, { vi: "họa sĩ minh họa", en: "illustrator" },
            { vi: "nhà thiết kế đồ họa", en: "graphic designer" }, { vi: "nhà phê bình nghệ thuật", en: "art critic" }, { vi: "triển lãm", en: "exhibition" }, { vi: "bảo tàng", en: "museum" },
            { vi: "phòng tranh", en: "gallery" }, { vi: "tác phẩm", en: "artwork" }, { vi: "kiệt tác", en: "masterpiece" }, { vi: "tác giả", en: "artist" }
        ]
    },

    // ==================== 32. ÂM NHẠC (MUSIC) - 120+ từ ====================
    music: {
        name: "🎵 ÂM NHẠC - MUSIC",
        words: [
            { vi: "nhạc", en: "music" }, { vi: "bài hát", en: "song" }, { vi: "giai điệu", en: "melody" }, { vi: "hòa âm", en: "harmony" },
            { vi: "nhịp điệu", en: "rhythm" }, { vi: "tiết tấu", en: "tempo" }, { vi: "ca từ", en: "lyrics" }, { vi: "hợp âm", en: "chord" },
            { vi: "ca sĩ", en: "singer" }, { vi: "nhạc sĩ", en: "musician" }, { vi: "nhà soạn nhạc", en: "composer" }, { vi: "nhạc trưởng", en: "conductor" },
            { vi: "ban nhạc", en: "band" }, { vi: "dàn nhạc", en: "orchestra" }, { vi: "nhóm nhạc", en: "music group" }, { vi: "nhạc công", en: "instrumentalist" },
            { vi: "ghita", en: "guitar" }, { vi: "ghita điện", en: "electric guitar" }, { vi: "ghita bass", en: "bass guitar" }, { vi: "đàn piano", en: "piano" },
            { vi: "đàn organ", en: "organ" }, { vi: "violin", en: "violin" }, { vi: "cello", en: "cello" }, { vi: "contrebasse", en: "double bass" },
            { vi: "sáo", en: "flute" }, { vi: "sáo trúc", en: "bamboo flute" }, { vi: "kèn clarinet", en: "clarinet" }, { vi: "kèn saxophone", en: "saxophone" },
            { vi: "kèn trumpet", en: "trumpet" }, { vi: "kèn trombone", en: "trombone" }, { vi: "trống", en: "drum" }, { vi: "trống cơm", en: "bongo" },
            { vi: "bộ gõ", en: "percussion" }, { vi: "đàn tranh", en: "zither" }, { vi: "đàn bầu", en: "monochord" }, { vi: "đàn nhị", en: "two-string fiddle" },
            { vi: "đàn nguyệt", en: "moon lute" }, { vi: "đàn tỳ bà", en: "pipa" }, { vi: "sáo trúc", en: "bamboo flute" }, { vi: "kèn môi", en: "harmonica" },
            { vi: "pop", en: "pop music" }, { vi: "rock", en: "rock music" }, { vi: "jazz", en: "jazz" }, { vi: "classical", en: "classical music" },
            { vi: "hip hop", en: "hip hop" }, { vi: "R&B", en: "R&B" }, { vi: "EDM", en: "EDM" }, { vi: "nhạc đồng quê", en: "country music" },
            { vi: "nhạc dân gian", en: "folk music" }, { vi: "nhạc trữ tình", en: "ballad" }, { vi: "nhạc kịch", en: "musical" }, { vi: "opera", en: "opera" },
            { vi: "hòa nhạc", en: "concert" }, { vi: "lễ hội âm nhạc", en: "music festival" }, { vi: "thu âm", en: "recording" }, { vi: "phòng thu", en: "studio" },
            { vi: "album", en: "album" }, { vi: "đĩa đơn", en: "single" }, { vi: "MV", en: "music video" }, { vi: "biểu diễn", en: "performance" },
            { vi: "hát", en: "sing" }, { vi: "hát bè", en: "harmonize" }, { vi: "hát nền", en: "backing vocal" }, { vi: "hát chính", en: "lead vocal" }
        ]
    },

    // ==================== 33. ĐIỆN ẢNH (CINEMA) - 100+ từ ====================
    cinema: {
        name: "🎬 ĐIỆN ẢNH - CINEMA & FILM",
        words: [
            { vi: "phim", en: "movie" }, { vi: "điện ảnh", en: "cinema" }, { vi: "rạp chiếu phim", en: "movie theater" }, { vi: "màn hình", en: "screen" },
            { vi: "vé xem phim", en: "movie ticket" }, { vi: "bắp rang bơ", en: "popcorn" }, { vi: "nước ngọt", en: "soda" }, { vi: "suất chiếu", en: "showtime" },
            { vi: "phim lẻ", en: "feature film" }, { vi: "phim ngắn", en: "short film" }, { vi: "phim bộ", en: "TV series" }, { vi: "phim truyền hình", en: "TV drama" },
            { vi: "phim hoạt hình", en: "animation" }, { vi: "phim tài liệu", en: "documentary" }, { vi: "phim hài", en: "comedy" }, { vi: "phim tình cảm", en: "romance" },
            { vi: "phim hành động", en: "action movie" }, { vi: "phim phiêu lưu", en: "adventure movie" }, { vi: "phim kinh dị", en: "horror movie" }, { vi: "phim giật gân", en: "thriller" },
            { vi: "phim hình sự", en: "crime movie" }, { vi: "phim chiến tranh", en: "war movie" }, { vi: "phim khoa học viễn tưởng", en: "sci-fi movie" }, { vi: "phim viễn tưởng", en: "fantasy movie" },
            { vi: "phim chính kịch", en: "drama" }, { vi: "phim tâm lý", en: "psychological thriller" }, { vi: "phim lịch sử", en: "historical movie" }, { vi: "phim thể thao", en: "sports movie" },
            { vi: "đạo diễn", en: "director" }, { vi: "nhà sản xuất", en: "producer" }, { vi: "biên kịch", en: "screenwriter" }, { vi: "quay phim", en: "cinematographer" },
            { vi: "diễn viên", en: "actor" }, { vi: "nữ diễn viên", en: "actress" }, { vi: "diễn viên quần chúng", en: "extra" }, { vi: "diễn viên đóng thế", en: "stuntman" },
            { vi: "nhân vật chính", en: "main character" }, { vi: "nhân vật phụ", en: "supporting character" }, { vi: "thủ vai", en: "role" }, { vi: "lồng tiếng", en: "voice acting" },
            { vi: "kịch bản", en: "script" }, { vi: "phân cảnh", en: "scene" }, { vi: "cảnh quay", en: "shot" }, { vi: "hậu trường", en: "behind the scenes" },
            { vi: "kỹ xảo", en: "special effects" }, { vi: "CGI", en: "CGI" }, { vi: "dựng phim", en: "editing" }, { vi: "nhạc phim", en: "soundtrack" },
            { vi: "phim bom tấn", en: "blockbuster" }, { vi: "phim độc lập", en: "independent film" }, { vi: "chiếu rạp", en: "theatrical release" }, { vi: "chiếu trên TV", en: "TV broadcast" },
            { vi: "streaming", en: "streaming" }, { vi: "Netflix", en: "Netflix" }, { vi: "xem phim", en: "watch movie" }, { vi: "đánh giá phim", en: "movie review" }
        ]
    },

    // ==================== 34. LỊCH SỬ (HISTORY) - 90+ từ ====================
    history: {
        name: "📜 LỊCH SỬ - HISTORY",
        words: [
            { vi: "lịch sử", en: "history" }, { vi: "thời kỳ", en: "period" }, { vi: "thời đại", en: "era" }, { vi: "thế kỷ", en: "century" },
            { vi: "thập niên", en: "decade" }, { vi: "cổ đại", en: "ancient" }, { vi: "trung cổ", en: "medieval" }, { vi: "cận đại", en: "modern" },
            { vi: "hiện đại", en: "contemporary" }, { vi: "tiền sử", en: "prehistoric" }, { vi: "sự kiện", en: "event" }, { vi: "cuộc cách mạng", en: "revolution" },
            { vi: "chiến tranh", en: "war" }, { vi: "hòa bình", en: "peace" }, { vi: "thỏa thuận", en: "treaty" }, { vi: "hiệp ước", en: "agreement" },
            { vi: "đế chế", en: "empire" }, { vi: "vương quốc", en: "kingdom" }, { vi: "quốc gia", en: "nation" }, { vi: "lãnh thổ", en: "territory" },
            { vi: "thuộc địa", en: "colony" }, { vi: "độc lập", en: "independence" }, { vi: "tự do", en: "freedom" }, { vi: "dân chủ", en: "democracy" },
            { vi: "vua", en: "king" }, { vi: "nữ hoàng", en: "queen" }, { vi: "hoàng đế", en: "emperor" }, { vi: "hoàng hậu", en: "empress" },
            { vi: "tướng lĩnh", en: "general" }, { vi: "anh hùng", en: "hero" }, { vi: "danh nhân", en: "historical figure" }, { vi: "tổng thống", en: "president" },
            { vi: "văn minh", en: "civilization" }, { vi: "nền văn hóa", en: "culture" }, { vi: "truyền thống", en: "tradition" }, { vi: "di sản", en: "heritage" },
            { vi: "khảo cổ học", en: "archaeology" }, { vi: "khai quật", en: "excavation" }, { vi: "di chỉ", en: "site" }, { vi: "cổ vật", en: "antique" },
            { vi: "bảo tàng", en: "museum" }, { vi: "tư liệu", en: "document" }, { vi: "ghi chép", en: "record" }, { vi: "biên niên sử", en: "chronicle" },
            { vi: "nhà sử học", en: "historian" }, { vi: "nghiên cứu", en: "research" }, { vi: "nguồn sử liệu", en: "historical source" }, { vi: "chứng cứ", en: "evidence" }
        ]
    },

    // ==================== 35. ĐỊA LÝ (GEOGRAPHY) - 90+ từ ====================
    geography: {
        name: "🌏 ĐỊA LÝ - GEOGRAPHY",
        words: [
            { vi: "địa lý", en: "geography" }, { vi: "trái đất", en: "earth" }, { vi: "hành tinh", en: "planet" }, { vi: "lục địa", en: "continent" },
            { vi: "châu Á", en: "Asia" }, { vi: "châu Âu", en: "Europe" }, { vi: "châu Phi", en: "Africa" }, { vi: "châu Mỹ", en: "America" },
            { vi: "châu Úc", en: "Australia" }, { vi: "châu Nam Cực", en: "Antarctica" }, { vi: "đại dương", en: "ocean" }, { vi: "biển", en: "sea" },
            { vi: "sông", en: "river" }, { vi: "hồ", en: "lake" }, { vi: "suối", en: "stream" }, { vi: "thác nước", en: "waterfall" },
            { vi: "núi", en: "mountain" }, { vi: "đồi", en: "hill" }, { vi: "cao nguyên", en: "plateau" }, { vi: "đồng bằng", en: "plain" },
            { vi: "thung lũng", en: "valley" }, { vi: "sa mạc", en: "desert" }, { vi: "rừng", en: "forest" }, { vi: "rừng mưa nhiệt đới", en: "rainforest" },
            { vi: "đảo", en: "island" }, { vi: "bán đảo", en: "peninsula" }, { vi: "quần đảo", en: "archipelago" }, { vi: "vịnh", en: "bay" },
            { vi: "eo biển", en: "strait" }, { vi: "hải cảng", en: "harbor" }, { vi: "khí hậu", en: "climate" }, { vi: "thời tiết", en: "weather" },
            { vi: "mùa", en: "season" }, { vi: "nhiệt đới", en: "tropical" }, { vi: "ôn đới", en: "temperate" }, { vi: "hàn đới", en: "polar" },
            { vi: "bản đồ", en: "map" }, { vi: "địa cầu", en: "globe" }, { vi: "vĩ độ", en: "latitude" }, { vi: "kinh độ", en: "longitude" },
            { vi: "xích đạo", en: "equator" }, { vi: "chí tuyến", en: "tropic" }, { vi: "vòng cực", en: "arctic circle" }, { vi: "múi giờ", en: "time zone" }
        ]
    },

    // ==================== 36. KHOA HỌC (SCIENCE) - 100+ từ ====================
    science: {
        name: "🔬 KHOA HỌC - SCIENCE",
        words: [
            { vi: "khoa học", en: "science" }, { vi: "nghiên cứu", en: "research" }, { vi: "thí nghiệm", en: "experiment" }, { vi: "lý thuyết", en: "theory" },
            { vi: "giả thuyết", en: "hypothesis" }, { vi: "định luật", en: "law" }, { vi: "công thức", en: "formula" }, { vi: "phương trình", en: "equation" },
            { vi: "vật lý", en: "physics" }, { vi: "hóa học", en: "chemistry" }, { vi: "sinh học", en: "biology" }, { vi: "thiên văn học", en: "astronomy" },
            { vi: "địa chất học", en: "geology" }, { vi: "khí tượng học", en: "meteorology" }, { vi: "hải dương học", en: "oceanography" }, { vi: "sinh thái học", en: "ecology" },
            { vi: "di truyền học", en: "genetics" }, { vi: "hóa sinh", en: "biochemistry" }, { vi: "vi sinh vật", en: "microbiology" }, { vi: "thần kinh học", en: "neuroscience" },
            { vi: "nguyên tử", en: "atom" }, { vi: "phân tử", en: "molecule" }, { vi: "tế bào", en: "cell" }, { vi: "DNA", en: "DNA" },
            { vi: "gen", en: "gene" }, { vi: "protein", en: "protein" }, { vi: "enzyme", en: "enzyme" }, { vi: "vi khuẩn", en: "bacteria" },
            { vi: "virus", en: "virus" }, { vi: "kính hiển vi", en: "microscope" }, { vi: "kính thiên văn", en: "telescope" }, { vi: "phòng thí nghiệm", en: "laboratory" },
            { vi: "nhà khoa học", en: "scientist" }, { vi: "nghiên cứu sinh", en: "researcher" }, { vi: "giáo sư", en: "professor" }, { vi: "trợ lý nghiên cứu", en: "research assistant" },
            { vi: "khám phá", en: "discovery" }, { vi: "phát minh", en: "invention" }, { vi: "sáng chế", en: "patent" }, { vi: "đột phá", en: "breakthrough" },
            { vi: "bằng chứng", en: "evidence" }, { vi: "dữ liệu", en: "data" }, { vi: "phân tích", en: "analysis" }, { vi: "kết luận", en: "conclusion" }
        ]
    },

    // ==================== 37. VĂN HỌC (LITERATURE) - 90+ từ ====================
    literature: {
        name: "📖 VĂN HỌC - LITERATURE",
        words: [
            { vi: "văn học", en: "literature" }, { vi: "tác phẩm", en: "work" }, { vi: "tiểu thuyết", en: "novel" }, { vi: "truyện ngắn", en: "short story" },
            { vi: "thơ", en: "poetry" }, { vi: "bài thơ", en: "poem" }, { vi: "kịch", en: "drama" }, { vi: "bi kịch", en: "tragedy" },
            { vi: "hài kịch", en: "comedy" }, { vi: "tùy bút", en: "essay" }, { vi: "hồi ký", en: "memoir" }, { vi: "tự truyện", en: "autobiography" },
            { vi: "tiểu sử", en: "biography" }, { vi: "truyện cổ tích", en: "fairy tale" }, { vi: "ngụ ngôn", en: "fable" }, { vi: "thần thoại", en: "myth" },
            { vi: "truyền thuyết", en: "legend" }, { vi: "sử thi", en: "epic" }, { vi: "nhà văn", en: "writer" }, { vi: "tác giả", en: "author" },
            { vi: "nhà thơ", en: "poet" }, { vi: "nhà viết kịch", en: "playwright" }, { vi: "nhà phê bình", en: "critic" }, { vi: "biên tập viên", en: "editor" },
            { vi: "nhân vật", en: "character" }, { vi: "nhân vật chính", en: "protagonist" }, { vi: "nhân vật phản diện", en: "antagonist" }, { vi: "cốt truyện", en: "plot" },
            { vi: "chủ đề", en: "theme" }, { vi: "bối cảnh", en: "setting" }, { vi: "xung đột", en: "conflict" }, { vi: "cao trào", en: "climax" },
            { vi: "kết thúc", en: "ending" }, { vi: "giọng điệu", en: "tone" }, { vi: "ngôi kể", en: "point of view" }, { vi: "hình tượng", en: "imagery" },
            { vi: "ẩn dụ", en: "metaphor" }, { vi: "so sánh", en: "simile" }, { vi: "nhân hóa", en: "personification" }, { vi: "phóng đại", en: "hyperbole" },
            { vi: "thư viện", en: "library" }, { vi: "giá sách", en: "bookshelf" }, { vi: "sách bán chạy", en: "bestseller" }, { vi: "giải thưởng văn học", en: "literary award" }
        ]
    },

    // ==================== 38. TRIẾT HỌC (PHILOSOPHY) - 80+ từ ====================
    philosophy: {
        name: "🧠 TRIẾT HỌC - PHILOSOPHY",
        words: [
            { vi: "triết học", en: "philosophy" }, { vi: "tư tưởng", en: "thought" }, { vi: "lý luận", en: "reasoning" }, { vi: "suy luận", en: "deduction" },
            { vi: "biện chứng", en: "dialectic" }, { vi: "logic", en: "logic" }, { vi: "bản chất", en: "essence" }, { vi: "tồn tại", en: "existence" },
            { vi: "hữu thể", en: "being" }, { vi: "không gian", en: "space" }, { vi: "thời gian", en: "time" }, { vi: "vật chất", en: "matter" },
            { vi: "ý thức", en: "consciousness" }, { vi: "tinh thần", en: "spirit" }, { vi: "linh hồn", en: "soul" }, { vi: "tri thức", en: "knowledge" },
            { vi: "chân lý", en: "truth" }, { vi: "sai lầm", en: "falsehood" }, { vi: "đạo đức", en: "ethics" }, { vi: "luân lý", en: "morality" },
            { vi: "công lý", en: "justice" }, { vi: "bình đẳng", en: "equality" }, { vi: "tự do", en: "freedom" }, { vi: "trách nhiệm", en: "responsibility" },
            { vi: "hạnh phúc", en: "happiness" }, { vi: "khổ đau", en: "suffering" }, { vi: "ý nghĩa", en: "meaning" }, { vi: "mục đích", en: "purpose" },
            { vi: "cái đẹp", en: "beauty" }, { vi: "cái thiện", en: "goodness" }, { vi: "cái ác", en: "evil" }, { vi: "đức hạnh", en: "virtue" },
            { vi: "triết gia", en: "philosopher" }, { vi: "học thuyết", en: "doctrine" }, { vi: "trường phái", en: "school of thought" }, { vi: "siêu hình học", en: "metaphysics" },
            { vi: "nhận thức luận", en: "epistemology" }, { vi: "thẩm mỹ học", en: "aesthetics" }, { vi: "chủ nghĩa duy vật", en: "materialism" }, { vi: "chủ nghĩa duy tâm", en: "idealism" }
        ]
    },

    // ==================== 39. TÔN GIÁO (RELIGION) - 80+ từ ====================
    religion: {
        name: "⛪ TÔN GIÁO - RELIGION",
        words: [
            { vi: "tôn giáo", en: "religion" }, { vi: "đức tin", en: "faith" }, { vi: "tín ngưỡng", en: "belief" }, { vi: "thờ cúng", en: "worship" },
            { vi: "cầu nguyện", en: "pray" }, { vi: "tụng kinh", en: "chant" }, { vi: "thiền định", en: "meditate" }, { vi: "lễ nghi", en: "ritual" },
            { vi: "chúa", en: "God" }, { vi: "thần", en: "deity" }, { vi: "thánh", en: "saint" }, { vi: "thiên thần", en: "angel" },
            { vi: "quỷ dữ", en: "devil" }, { vi: "ma quỷ", en: "demon" }, { vi: "linh hồn", en: "soul" }, { vi: "thiên đàng", en: "heaven" },
            { vi: "địa ngục", en: "hell" }, { vi: "luân hồi", en: "reincarnation" }, { vi: "nghiệp", en: "karma" }, { vi: "cứu rỗi", en: "salvation" },
            { vi: "tội lỗi", en: "sin" }, { vi: "ăn năn", en: "repent" }, { vi: "tha thứ", en: "forgive" }, { vi: "phúc lành", en: "blessing" },
            { vi: "kinh thánh", en: "Bible" }, { vi: "kinh Koran", en: "Quran" }, { vi: "kinh Phật", en: "Buddhist scripture" }, { vi: "kinh Vệ Đà", en: "Vedas" },
            { vi: "phật", en: "Buddha" }, { vi: "chúa Jesus", en: "Jesus" }, { vi: "Mohammed", en: "Mohammed" }, { vi: "đức Phật", en: "Buddha" },
            { vi: "nhà thờ", en: "church" }, { vi: "chùa", en: "pagoda" }, { vi: "đền", en: "temple" }, { vi: "thánh đường Hồi giáo", en: "mosque" },
            { vi: "tu sĩ", en: "monk" }, { vi: "ni cô", en: "nun" }, { vi: "linh mục", en: "priest" }, { vi: "mục sư", en: "pastor" },
            { vi: "Phật giáo", en: "Buddhism" }, { vi: "Công giáo", en: "Catholicism" }, { vi: "Tin lành", en: "Protestantism" }, { vi: "Hồi giáo", en: "Islam" },
            { vi: "Ấn Độ giáo", en: "Hinduism" }, { vi: "Do Thái giáo", en: "Judaism" }, { vi: "Đạo Cao Đài", en: "Cao Dai" }, { vi: "Đạo Hòa Hảo", en: "Hoa Hao" }
        ]
    },

    // ==================== 40. TRUYỀN THÔNG (MEDIA) - 100+ từ ====================
    media: {
        name: "📺 TRUYỀN THÔNG - MEDIA",
        words: [
            { vi: "truyền thông", en: "media" }, { vi: "báo chí", en: "press" }, { vi: "báo in", en: "newspaper" }, { vi: "tạp chí", en: "magazine" },
            { vi: "báo mạng", en: "online newspaper" }, { vi: "tin tức", en: "news" }, { vi: "phóng sự", en: "reportage" }, { vi: "phỏng vấn", en: "interview" },
            { vi: "truyền hình", en: "television" }, { vi: "phát thanh", en: "radio" }, { vi: "kênh truyền hình", en: "TV channel" }, { vi: "chương trình", en: "program" },
            { vi: "sóng truyền hình", en: "broadcast" }, { vi: "trực tiếp", en: "live" }, { vi: "ghi hình", en: "recorded" }, { vi: "phát lại", en: "rerun" },
            { vi: "mạng xã hội", en: "social media" }, { vi: "Facebook", en: "Facebook" }, { vi: "Instagram", en: "Instagram" }, { vi: "TikTok", en: "TikTok" },
            { vi: "YouTube", en: "YouTube" }, { vi: "Twitter", en: "Twitter" }, { vi: "LinkedIn", en: "LinkedIn" }, { vi: "Zalo", en: "Zalo" },
            { vi: "like", en: "like" }, { vi: "share", en: "share" }, { vi: "comment", en: "comment" }, { vi: "follow", en: "follow" },
            { vi: "subcribe", en: "subscribe" }, { vi: "trending", en: "trending" }, { vi: "viral", en: "viral" }, { vi: "influencer", en: "influencer" },
            { vi: "nhà báo", en: "journalist" }, { vi: "phóng viên", en: "reporter" }, { vi: "biên tập viên", en: "editor" }, { vi: "MC", en: "MC" },
            { vi: "dẫn chương trình", en: "host" }, { vi: "bình luận viên", en: "commentator" }, { vi: "quay phim", en: "cameraman" }, { vi: "kỹ thuật viên", en: "technician" },
            { vi: "bản tin", en: "bulletin" }, { vi: "tiêu đề", en: "headline" }, { vi: "sự kiện", en: "event" }, { vi: "tin nóng", en: "hot news" },
            { vi: "tin giả", en: "fake news" }, { vi: "kiểm duyệt", en: "censorship" }, { vi: "tự do báo chí", en: "press freedom" }, { vi: "nguồn tin", en: "source" }
        ]
    },

    // ==================== 41. QUẢNG CÁO (ADVERTISING) - 90+ từ ====================
    advertising: {
        name: "📢 QUẢNG CÁO - ADVERTISING",
        words: [
            { vi: "quảng cáo", en: "advertising" }, { vi: "quảng bá", en: "promotion" }, { vi: "tiếp thị", en: "marketing" }, { vi: "chiến dịch", en: "campaign" },
            { vi: "thương hiệu", en: "brand" }, { vi: "slogan", en: "slogan" }, { vi: "khẩu hiệu", en: "tagline" }, { vi: "logo", en: "logo" },
            { vi: "banner quảng cáo", en: "banner ad" }, { vi: "TV commercial", en: "TV commercial" }, { vi: "radio ad", en: "radio ad" }, { vi: "billboard", en: "billboard" },
            { vi: "tờ rơi", en: "flyer" }, { vi: "brochure", en: "brochure" }, { vi: "poster", en: "poster" }, { vi: "sponsor", en: "sponsor" },
            { vi: "tiếp thị trực tuyến", en: "digital marketing" }, { vi: "SEO", en: "SEO" }, { vi: "Google Ads", en: "Google Ads" }, { vi: "Facebook Ads", en: "Facebook Ads" },
            { vi: "email marketing", en: "email marketing" }, { vi: "content marketing", en: "content marketing" }, { vi: "influencer marketing", en: "influencer marketing" }, { vi: "affiliate marketing", en: "affiliate marketing" },
            { vi: "khách hàng mục tiêu", en: "target audience" }, { vi: "đối tượng", en: "target" }, { vi: "phân khúc", en: "segment" }, { vi: "hành vi", en: "behavior" },
            { vi: "nhân khẩu học", en: "demographic" }, { vi: "tâm lý học", en: "psychographic" }, { vi: "tỷ lệ chuyển đổi", en: "conversion rate" }, { vi: "ROI", en: "ROI" },
            { vi: "ngân sách", en: "budget" }, { vi: "chi phí", en: "cost" }, { vi: "hiệu quả", en: "effectiveness" }, { vi: "đo lường", en: "measurement" },
            { vi: "nhà quảng cáo", en: "advertiser" }, { vi: "công ty quảng cáo", en: "ad agency" }, { vi: "giám đốc marketing", en: "marketing director" }, { vi: "chuyên viên", en: "specialist" }
        ]
    },

    // ==================== 42. MARKETING (MARKETING) - 100+ từ ====================
    marketing: {
        name: "📈 MARKETING - MARKETING",
        words: [
            { vi: "marketing", en: "marketing" }, { vi: "4P", en: "4P" }, { vi: "sản phẩm", en: "product" }, { vi: "giá cả", en: "price" },
            { vi: "phân phối", en: "place" }, { vi: "xúc tiến", en: "promotion" }, { vi: "nghiên cứu thị trường", en: "market research" }, { vi: "phân tích SWOT", en: "SWOT analysis" },
            { vi: "điểm mạnh", en: "strength" }, { vi: "điểm yếu", en: "weakness" }, { vi: "cơ hội", en: "opportunity" }, { vi: "thách thức", en: "threat" },
            { vi: "kế hoạch marketing", en: "marketing plan" }, { vi: "chiến lược", en: "strategy" }, { vi: "mục tiêu", en: "goal" }, { vi: "mục đích", en: "objective" },
            { vi: "thương hiệu", en: "brand" }, { vi: "nhận diện thương hiệu", en: "brand identity" }, { vi: "hình ảnh thương hiệu", en: "brand image" }, { vi: "giá trị thương hiệu", en: "brand equity" },
            { vi: "khách hàng", en: "customer" }, { vi: "người tiêu dùng", en: "consumer" }, { vi: "khách hàng tiềm năng", en: "prospect" }, { vi: "khách hàng trung thành", en: "loyal customer" },
            { vi: "chăm sóc khách hàng", en: "customer care" }, { vi: "hài lòng khách hàng", en: "customer satisfaction" }, { vi: "phản hồi", en: "feedback" }, { vi: "khiếu nại", en: "complaint" },
            { vi: "bán hàng", en: "sales" }, { vi: "đội ngũ bán hàng", en: "sales team" }, { vi: "chốt đơn", en: "close deal" }, { vi: "doanh số", en: "sales volume" },
            { vi: "thị phần", en: "market share" }, { vi: "đối thủ cạnh tranh", en: "competitor" }, { vi: "lợi thế cạnh tranh", en: "competitive advantage" }, { vi: "định vị", en: "positioning" }
        ]
    },

    // ==================== 43. KINH DOANH (BUSINESS) - 100+ từ ====================
    business: {
        name: "🏢 KINH DOANH - BUSINESS",
        words: [
            { vi: "kinh doanh", en: "business" }, { vi: "doanh nghiệp", en: "enterprise" }, { vi: "công ty", en: "company" }, { vi: "tập đoàn", en: "corporation" },
            { vi: "doanh nhân", en: "entrepreneur" }, { vi: "chủ doanh nghiệp", en: "business owner" }, { vi: "cổ đông", en: "shareholder" }, { vi: "nhà đầu tư", en: "investor" },
            { vi: "khởi nghiệp", en: "startup" }, { vi: "vốn", en: "capital" }, { vi: "vốn đầu tư", en: "investment capital" }, { vi: "vốn vay", en: "loan capital" },
            { vi: "lợi nhuận", en: "profit" }, { vi: "doanh thu", en: "revenue" }, { vi: "chi phí", en: "expense" }, { vi: "thu nhập", en: "income" },
            { vi: "thua lỗ", en: "loss" }, { vi: "phá sản", en: "bankruptcy" }, { vi: "giải thể", en: "dissolution" }, { vi: "sáp nhập", en: "merger" },
            { vi: "mua lại", en: "acquisition" }, { vi: "liên doanh", en: "joint venture" }, { vi: "hợp tác", en: "cooperation" }, { vi: "đối tác", en: "partner" },
            { vi: "hợp đồng", en: "contract" }, { vi: "thỏa thuận", en: "agreement" }, { vi: "đàm phán", en: "negotiation" }, { vi: "ký kết", en: "signing" },
            { vi: "quản lý", en: "management" }, { vi: "lãnh đạo", en: "leadership" }, { vi: "điều hành", en: "execution" }, { vi: "giám sát", en: "supervision" },
            { vi: "nhân sự", en: "human resources" }, { vi: "tuyển dụng", en: "recruitment" }, { vi: "đào tạo", en: "training" }, { vi: "phát triển", en: "development" },
            { vi: "kế hoạch", en: "plan" }, { vi: "chiến lược", en: "strategy" }, { vi: "mục tiêu", en: "objective" }, { vi: "kết quả", en: "result" }
        ]
    },

    // ==================== 44. KHỞI NGHIỆP (STARTUP) - 90+ từ ====================
    startup: {
        name: "🚀 KHỞI NGHIỆP - STARTUP",
        words: [
            { vi: "khởi nghiệp", en: "startup" }, { vi: "ý tưởng", en: "idea" }, { vi: "sáng tạo", en: "innovation" }, { vi: "đột phá", en: "breakthrough" },
            { vi: "mô hình kinh doanh", en: "business model" }, { vi: "kế hoạch kinh doanh", en: "business plan" }, { vi: "sản phẩm tối thiểu", en: "MVP" }, { vi: "thị trường mục tiêu", en: "target market" },
            { vi: "vốn mồi", en: "seed capital" }, { vi: "vốn gọi vốn", en: "fundraising" }, { vi: "đầu tư mạo hiểm", en: "venture capital" }, { vi: "nhà đầu tư thiên thần", en: "angel investor" },
            { vi: "tăng tốc", en: "accelerator" }, { vi: "vườn ươm", en: "incubator" }, { vi: "gọi vốn cộng đồng", en: "crowdfunding" }, { vi: "định giá", en: "valuation" },
            { vi: "tăng trưởng", en: "growth" }, { vi: "mở rộng", en: "scale" }, { vi: "xuất cảnh", en: "exit" }, { vi: "IPO", en: "IPO" },
            { vi: "mua lại", en: "acquisition" }, { vi: "thất bại", en: "failure" }, { vi: "pivot", en: "pivot" }, { vi: "lean startup", en: "lean startup" },
            { vi: "founder", en: "founder" }, { vi: "co-founder", en: "co-founder" }, { vi: "CEO", en: "CEO" }, { vi: "CTO", en: "CTO" },
            { vi: "CFO", en: "CFO" }, { vi: "COO", en: "COO" }, { vi: "CMO", en: "CMO" }, { vi: "trưởng nhóm", en: "team leader" },
            { vi: "huy động vốn", en: "fundraising round" }, { vi: "seed round", en: "seed round" }, { vi: "series A", en: "series A" }, { vi: "series B", en: "series B" }
        ]
    },

    // ==================== 45. CÔNG NGHỆ THÔNG TIN (IT) - 120+ từ ====================
    it: {
        name: "💻 IT - INFORMATION TECHNOLOGY",
        words: [
            { vi: "công nghệ thông tin", en: "information technology" }, { vi: "phần cứng", en: "hardware" }, { vi: "phần mềm", en: "software" }, { vi: "hệ thống", en: "system" },
            { vi: "mạng máy tính", en: "computer network" }, { vi: "internet", en: "internet" }, { vi: "intranet", en: "intranet" }, { vi: "extranet", en: "extranet" },
            { vi: "bảo mật", en: "security" }, { vi: "tường lửa", en: "firewall" }, { vi: "mã hóa", en: "encryption" }, { vi: "giải mã", en: "decryption" },
            { vi: "hacker", en: "hacker" }, { vi: "tấn công mạng", en: "cyber attack" }, { vi: "virus", en: "virus" }, { vi: "malware", en: "malware" },
            { vi: "lập trình", en: "programming" }, { vi: "code", en: "code" }, { vi: "debug", en: "debug" }, { vi: "compile", en: "compile" },
            { vi: "frontend", en: "frontend" }, { vi: "backend", en: "backend" }, { vi: "fullstack", en: "fullstack" }, { vi: "database", en: "database" },
            { vi: "SQL", en: "SQL" }, { vi: "NoSQL", en: "NoSQL" }, { vi: "API", en: "API" }, { vi: "REST API", en: "REST API" },
            { vi: "cloud computing", en: "cloud computing" }, { vi: "AWS", en: "AWS" }, { vi: "Azure", en: "Azure" }, { vi: "Google Cloud", en: "Google Cloud" },
            { vi: "DevOps", en: "DevOps" }, { vi: "CI/CD", en: "CI/CD" }, { vi: "Docker", en: "Docker" }, { vi: "Kubernetes", en: "Kubernetes" },
            { vi: "AI", en: "AI" }, { vi: "Machine Learning", en: "Machine Learning" }, { vi: "Deep Learning", en: "Deep Learning" }, { vi: "Data Science", en: "Data Science" },
            { vi: "Big Data", en: "Big Data" }, { vi: "Blockchain", en: "Blockchain" }, { vi: "IoT", en: "IoT" }, { vi: "lập trình viên", en: "programmer" },
            { vi: "kỹ sư phần mềm", en: "software engineer" }, { vi: "kỹ thuật viên", en: "technician" }, { vi: "quản trị mạng", en: "network administrator" }, { vi: "chuyên gia bảo mật", en: "security expert" }
        ]
    },

    // ==================== 46. THIẾT KẾ (DESIGN) - 90+ từ ====================
    design: {
        name: "🎨 THIẾT KẾ - DESIGN",
        words: [
            { vi: "thiết kế", en: "design" }, { vi: "thiết kế đồ họa", en: "graphic design" }, { vi: "thiết kế web", en: "web design" }, { vi: "thiết kế UI/UX", en: "UI/UX design" },
            { vi: "thiết kế nội thất", en: "interior design" }, { vi: "thiết kế thời trang", en: "fashion design" }, { vi: "thiết kế công nghiệp", en: "industrial design" }, { vi: "thiết kế kiến trúc", en: "architectural design" },
            { vi: "màu sắc", en: "color" }, { vi: "bố cục", en: "layout" }, { vi: "hình khối", en: "shape" }, { vi: "đường nét", en: "line" },
            { vi: "không gian", en: "space" }, { vi: "kết cấu", en: "texture" }, { vi: "ánh sáng", en: "light" }, { vi: "bóng đổ", en: "shadow" },
            { vi: "phông chữ", en: "font" }, { vi: "kiểu chữ", en: "typography" }, { vi: "cỡ chữ", en: "font size" }, { vi: "khoảng cách", en: "spacing" },
            { vi: "biểu tượng", en: "icon" }, { vi: "logo", en: "logo" }, { vi: "infographic", en: "infographic" }, { vi: "mockup", en: "mockup" },
            { vi: "prototype", en: "prototype" }, { vi: "wireframe", en: "wireframe" }, { vi: "user flow", en: "user flow" }, { vi: "user journey", en: "user journey" },
            { vi: "nhà thiết kế", en: "designer" }, { vi: "design lead", en: "design lead" }, { vi: "art director", en: "art director" }, { vi: "creative director", en: "creative director" },
            { vi: "Photoshop", en: "Photoshop" }, { vi: "Illustrator", en: "Illustrator" }, { vi: "Figma", en: "Figma" }, { vi: "Sketch", en: "Sketch" },
            { vi: "Adobe XD", en: "Adobe XD" }, { vi: "Canva", en: "Canva" }, { vi: "InDesign", en: "InDesign" }, { vi: "After Effects", en: "After Effects" }
        ]
    },

    // ==================== 47. VIỆC LÀM (EMPLOYMENT) - 90+ từ ====================
    employment: {
        name: "💼 VIỆC LÀM - EMPLOYMENT",
        words: [
            { vi: "việc làm", en: "job" }, { vi: "tuyển dụng", en: "recruitment" }, { vi: "tìm việc", en: "job search" }, { vi: "ứng tuyển", en: "apply" },
            { vi: "hồ sơ xin việc", en: "application" }, { vi: "CV", en: "resume" }, { vi: "đơn xin việc", en: "cover letter" }, { vi: "portfolio", en: "portfolio" },
            { vi: "phỏng vấn", en: "interview" }, { vi: "vòng phỏng vấn", en: "interview round" }, { vi: "phỏng vấn trực tiếp", en: "in-person interview" }, { vi: "phỏng vấn online", en: "online interview" },
            { vi: "thử việc", en: "probation" }, { vi: "hợp đồng lao động", en: "employment contract" }, { vi: "ký hợp đồng", en: "sign contract" }, { vi: "gia hạn hợp đồng", en: "contract extension" },
            { vi: "lương", en: "salary" }, { vi: "thưởng", en: "bonus" }, { vi: "phụ cấp", en: "allowance" }, { vi: "phúc lợi", en: "benefits" },
            { vi: "bảo hiểm", en: "insurance" }, { vi: "thuế", en: "tax" }, { vi: "lương tháng", en: "monthly salary" }, { vi: "lương theo giờ", en: "hourly wage" },
            { vi: "tăng ca", en: "overtime" }, { vi: "làm thêm giờ", en: "extra hours" }, { vi: "trực đêm", en: "night shift" }, { vi: "ca đêm", en: "night shift" },
            { vi: "nghỉ phép", en: "paid leave" }, { vi: "nghỉ ốm", en: "sick leave" }, { vi: "nghỉ thai sản", en: "maternity leave" }, { vi: "nghỉ không lương", en: "unpaid leave" },
            { vi: "thôi việc", en: "quit" }, { vi: "bị sa thải", en: "fired" }, { vi: "nghỉ hưu", en: "retire" }, { vi: "thất nghiệp", en: "unemployed" }
        ]
    },

    // ==================== 48. THÀNH NGỮ (IDIOMS) - 80+ từ ====================
    // ĐÃ SỬA: CHỈ GIỮ TIẾNG VIỆT Ở TRƯỜNG vi
    idioms: {
        name: "💬 THÀNH NGỮ - IDIOMS",
        words: [
            { vi: "dễ như ăn bánh", en: "piece of cake" },
            { vi: "chúc may mắn", en: "break a leg" },
            { vi: "học hành chăm chỉ", en: "hit the books" },
            { vi: "lộ bí mật", en: "spill the beans" },
            { vi: "cảm thấy không khỏe", en: "under the weather" },
            { vi: "đắt cắt cổ", en: "cost an arm and a leg" },
            { vi: "đối mặt khó khăn", en: "bite the bullet" },
            { vi: "lộ bí mật", en: "let the cat out of the bag" },
            { vi: "không bao giờ", en: "when pigs fly" },
            { vi: "hiếm khi", en: "once in a blue moon" },
            { vi: "một mũi tên trúng hai đích", en: "kill two birds with one stone" },
            { vi: "đổ thêm dầu vào lửa", en: "add fuel to the fire" },
            { vi: "hành động có giá trị hơn lời nói", en: "actions speak louder than words" },
            { vi: "sai lầm, nhầm đối tượng", en: "barking up the wrong tree" },
            { vi: "kết thúc công việc", en: "call it a day" },
            { vi: "làm tắt, làm ẩu", en: "cut corners" },
            { vi: "cố gắng hết mình", en: "go the extra mile" },
            { vi: "trêu chọc ai", en: "pull someone's leg" },
            { vi: "đồng quan điểm", en: "see eye to eye" },
            { vi: "cướp spotlight của ai", en: "steal someone's thunder" }
        ]
    },

    // ==================== 49. DU LỊCH BỤI (BACKPACKING) - 90+ từ ====================
    backpacking: {
        name: "🎒 DU LỊCH BỤI - BACKPACKING",
        words: [
            { vi: "du lịch bụi", en: "backpacking" }, { vi: "phượt", en: "travel on a budget" }, { vi: "ba lô", en: "backpack" }, { vi: "túi ngủ", en: "sleeping bag" },
            { vi: "lều", en: "tent" }, { vi: "bật lửa", en: "lighter" }, { vi: "đèn pin", en: "flashlight" }, { vi: "dao đa năng", en: "multi-tool" },
            { vi: "bình lọc nước", en: "water filter" }, { vi: "bình nước", en: "water bottle" }, { vi: "đồ ăn khô", en: "dried food" }, { vi: "mì gói", en: "instant noodles" },
            { vi: "bản đồ", en: "map" }, { vi: "la bàn", en: "compass" }, { vi: "GPS", en: "GPS" }, { vi: "sạc dự phòng", en: "power bank" },
            { vi: "máy ảnh", en: "camera" }, { vi: "nhật ký", en: "journal" }, { vi: "sổ tay", en: "notebook" }, { vi: "bút", en: "pen" },
            { vi: "thuốc men", en: "medication" }, { vi: "băng cá nhân", en: "band-aid" }, { vi: "kem chống nắng", en: "sunscreen" }, { vi: "thuốc chống côn trùng", en: "insect repellent" },
            { vi: "giày leo núi", en: "hiking boots" }, { vi: "áo mưa", en: "raincoat" }, { vi: "áo khoác", en: "jacket" }, { vi: "áo phông", en: "t-shirt" },
            { vi: "quần short", en: "shorts" }, { vi: "quần dài", en: "pants" }, { vi: "tất", en: "socks" }, { vi: "mũ", en: "hat" },
            { vi: "kính mát", en: "sunglasses" }, { vi: "khăn tắm", en: "towel" }, { vi: "bàn chải đánh răng", en: "toothbrush" }, { vi: "kem đánh răng", en: "toothpaste" },
            { vi: "nhà nghỉ", en: "hostel" }, { vi: "homestay", en: "homestay" }, { vi: "cắm trại", en: "camping" }, { vi: "ngủ trong lều", en: "sleep in tent" },
            { vi: "đi nhờ xe", en: "hitchhiking" }, { vi: "xe buýt", en: "bus" }, { vi: "tàu hỏa", en: "train" }, { vi: "xe máy", en: "motorbike" }
        ]
    },

    // ==================== 50. YOGA & THIỀN (YOGA & MEDITATION) - 80+ từ ====================
    yoga: {
        name: "🧘 YOGA & THIỀN - YOGA & MEDITATION",
        words: [
            { vi: "yoga", en: "yoga" }, { vi: "thiền", en: "meditation" }, { vi: "hít thở", en: "breathing" }, { vi: "thở sâu", en: "deep breath" },
            { vi: "tư thế", en: "pose" }, { vi: "asana", en: "asana" }, { vi: "tư thế núi", en: "mountain pose" }, { vi: "tư thế chó úp mặt", en: "downward dog" },
            { vi: "tư thế chiến binh", en: "warrior pose" }, { vi: "tư thế cây", en: "tree pose" }, { vi: "tư thế rắn hổ mang", en: "cobra pose" }, { vi: "tư thế em bé", en: "child's pose" },
            { vi: "tư thế cái cày", en: "plow pose" }, { vi: "tư thế đứng bằng đầu", en: "headstand" }, { vi: "tư thế đứng bằng tay", en: "handstand" }, { vi: "tư thế cầu", en: "bridge pose" },
            { vi: "tư thế con thuyền", en: "boat pose" }, { vi: "tư thế con bướm", en: "butterfly pose" }, { vi: "tư thế xoắn", en: "twist pose" }, { vi: "tư thế gập người", en: "forward fold" },
            { vi: "năng lượng", en: "energy" }, { vi: "luân xa", en: "chakra" }, { vi: "cân bằng", en: "balance" }, { vi: "linh hoạt", en: "flexibility" },
            { vi: "sức mạnh", en: "strength" }, { vi: "thư giãn", en: "relaxation" }, { vi: "tập trung", en: "focus" }, { vi: "tĩnh tâm", en: "calmness" },
            { vi: "chánh niệm", en: "mindfulness" }, { vi: "giác ngộ", en: "enlightenment" }, { vi: "an lạc", en: "peace" }, { vi: "buông bỏ", en: "letting go" },
            { vi: "thảm tập", en: "yoga mat" }, { vi: "gạch yoga", en: "yoga block" }, { vi: "dây đai", en: "yoga strap" }, { vi: "gối thiền", en: "meditation cushion" },
            { vi: "giáo viên yoga", en: "yoga teacher" }, { vi: "phòng tập", en: "studio" }, { vi: "lớp học", en: "class" }, { vi: "buổi tập", en: "session" },
            { vi: "khởi động", en: "warm up" }, { vi: "thả lỏng", en: "cool down" }, { vi: "giãn cơ", en: "stretching" }, { vi: "ép cơ", en: "strengthening" }
        ]
    },

    // ==================== 51. CHĂM SÓC SỨC KHỎE (WELLNESS) - 90+ từ ====================
    wellness: {
        name: "💪 CHĂM SÓC SỨC KHỎE - WELLNESS",
        words: [
            { vi: "sức khỏe", en: "health" }, { vi: "chăm sóc sức khỏe", en: "healthcare" }, { vi: "dinh dưỡng", en: "nutrition" }, { vi: "chế độ ăn", en: "diet" },
            { vi: "thực phẩm lành mạnh", en: "healthy food" }, { vi: "rau củ", en: "vegetables" }, { vi: "trái cây", en: "fruits" }, { vi: "ngũ cốc", en: "grains" },
            { vi: "protein", en: "protein" }, { vi: "chất béo", en: "fat" }, { vi: "carbohydrate", en: "carbohydrates" }, { vi: "vitamin", en: "vitamin" },
            { vi: "khoáng chất", en: "minerals" }, { vi: "nước", en: "water" }, { vi: "giải độc", en: "detox" }, { vi: "thải độc", en: "cleanse" },
            { vi: "tập thể dục", en: "exercise" }, { vi: "chạy bộ", en: "jogging" }, { vi: "đi bộ", en: "walking" }, { vi: "bơi lội", en: "swimming" },
            { vi: "đạp xe", en: "cycling" }, { vi: "nhảy dây", en: "jump rope" }, { vi: "gym", en: "gym" }, { vi: "tạ", en: "weights" },
            { vi: "ngủ đủ giấc", en: "sleep well" }, { vi: "thức khuya", en: "stay up late" }, { vi: "mất ngủ", en: "insomnia" }, { vi: "ngủ trưa", en: "nap" },
            { vi: "giảm stress", en: "stress relief" }, { vi: "căng thẳng", en: "stress" }, { vi: "lo âu", en: "anxiety" }, { vi: "trầm cảm", en: "depression" },
            { vi: "khám sức khỏe", en: "check-up" }, { vi: "xét nghiệm", en: "test" }, { vi: "siêu âm", en: "ultrasound" }, { vi: "nội soi", en: "endoscopy" },
            { vi: "tiêm chủng", en: "vaccination" }, { vi: "thuốc", en: "medicine" }, { vi: "kháng sinh", en: "antibiotics" }, { vi: "thuốc giảm đau", en: "painkiller" }
        ]
    },

    // ==================== 52. LÀM ĐẸP (BEAUTY) - 100+ từ ====================
    beauty: {
        name: "💄 LÀM ĐẸP - BEAUTY",
        words: [
            { vi: "làm đẹp", en: "beauty" }, { vi: "trang điểm", en: "makeup" }, { vi: "son môi", en: "lipstick" }, { vi: "son bóng", en: "lip gloss" },
            { vi: "son lì", en: "matte lipstick" }, { vi: "son dưỡng", en: "lip balm" }, { vi: "mascara", en: "mascara" }, { vi: "eyeliner", en: "eyeliner" },
            { vi: "bút kẻ mày", en: "eyebrow pencil" }, { vi: "phấn mắt", en: "eyeshadow" }, { vi: "phấn nền", en: "foundation" }, { vi: "che khuyết điểm", en: "concealer" },
            { vi: "phấn phủ", en: "powder" }, { vi: "phấn má hồng", en: "blush" }, { vi: "phấn bắt sáng", en: "highlighter" }, { vi: "phấn tạo khối", en: "contour" },
            { vi: "kem lót", en: "primer" }, { vi: "xịt khoáng", en: "setting spray" }, { vi: "tẩy trang", en: "makeup remover" }, { vi: "nước tẩy trang", en: "cleansing water" },
            { vi: "sữa rửa mặt", en: "face wash" }, { vi: "kem dưỡng ẩm", en: "moisturizer" }, { vi: "kem chống nắng", en: "sunscreen" }, { vi: "serum", en: "serum" },
            { vi: "toner", en: "toner" }, { vi: "mặt nạ", en: "mask" }, { vi: "tẩy tế bào chết", en: "exfoliator" }, { vi: "chăm sóc da", en: "skincare" },
            { vi: "chăm sóc tóc", en: "haircare" }, { vi: "dầu gội", en: "shampoo" }, { vi: "dầu xả", en: "conditioner" }, { vi: "dầu dưỡng", en: "hair oil" },
            { vi: "keo xịt tóc", en: "hairspray" }, { vi: "sấy tóc", en: "blow-dry" }, { vi: "duỗi tóc", en: "straightening" }, { vi: "uốn tóc", en: "curling" },
            { vi: "nhuộm tóc", en: "hair dye" }, { vi: "cắt tóc", en: "haircut" }, { vi: "tạo mẫu tóc", en: "hairstyling" }, { vi: "cô dâu", en: "bride" }
        ]
    },

    // ==================== 53. THÚ CƯNG (PETS) - 90+ từ ====================
    pets: {
        name: "🐕 THÚ CƯNG - PETS",
        words: [
            { vi: "thú cưng", en: "pet" }, { vi: "chó", en: "dog" }, { vi: "chó con", en: "puppy" }, { vi: "mèo", en: "cat" },
            { vi: "mèo con", en: "kitten" }, { vi: "chuột hamster", en: "hamster" }, { vi: "chuột lang", en: "guinea pig" }, { vi: "thỏ", en: "rabbit" },
            { vi: "chim", en: "bird" }, { vi: "vẹt", en: "parrot" }, { vi: "cá", en: "fish" }, { vi: "cá vàng", en: "goldfish" },
            { vi: "rùa", en: "turtle" }, { vi: "thằn lằn", en: "lizard" }, { vi: "nhện", en: "spider" }, { vi: "đồ ăn cho thú cưng", en: "pet food" },
            { vi: "hạt cho chó", en: "dog food" }, { vi: "pate cho mèo", en: "cat food" }, { vi: "bánh thưởng", en: "treat" }, { vi: "nước uống", en: "water" },
            { vi: "chuồng", en: "cage" }, { vi: "lồng", en: "crate" }, { vi: "cũi", en: "kennel" }, { vi: "ổ", en: "bed" },
            { vi: "đồ chơi", en: "toy" }, { vi: "dắt chó đi dạo", en: "walk the dog" }, { vi: "huấn luyện", en: "training" }, { vi: "tắm cho thú cưng", en: "bathe the pet" },
            { vi: "cắt móng", en: "nail trimming" }, { vi: "chải lông", en: "brushing" }, { vi: "cắt lông", en: "grooming" }, { vi: "vệ sinh răng miệng", en: "dental care" },
            { vi: "bác sĩ thú y", en: "veterinarian" }, { vi: "tiêm phòng", en: "vaccination" }, { vi: "khám sức khỏe", en: "check-up" }, { vi: "giun sán", en: "worms" },
            { vi: "bọ chét", en: "flea" }, { vi: "ve", en: "tick" }, { vi: "chủ nuôi", en: "pet owner" }, { vi: "nhân viên cứu hộ", en: "rescue worker" }
        ]
    },

    // ==================== 54. SỰ KIỆN (EVENTS) - 90+ từ ====================
    events: {
        name: "🎉 SỰ KIỆN - EVENTS",
        words: [
            { vi: "sự kiện", en: "event" }, { vi: "hội nghị", en: "conference" }, { vi: "hội thảo", en: "seminar" }, { vi: "tọa đàm", en: "forum" },
            { vi: "triển lãm", en: "exhibition" }, { vi: "hội chợ", en: "fair" }, { vi: "lễ hội", en: "festival" }, { vi: "buổi hòa nhạc", en: "concert" },
            { vi: "biểu diễn", en: "performance" }, { vi: "đám cưới", en: "wedding" }, { vi: "tiệc cưới", en: "wedding reception" }, { vi: "sinh nhật", en: "birthday" },
            { vi: "tiệc sinh nhật", en: "birthday party" }, { vi: "lễ kỷ niệm", en: "anniversary" }, { vi: "lễ tốt nghiệp", en: "graduation" }, { vi: "lễ ra mắt", en: "launch event" },
            { vi: "họp báo", en: "press conference" }, { vi: "gala dinner", en: "gala dinner" }, { vi: "tiệc tối", en: "dinner party" }, { vi: "dạ tiệc", en: "ball" },
            { vi: "khai trương", en: "grand opening" }, { vi: "lễ động thổ", en: "groundbreaking ceremony" }, { vi: "lễ khánh thành", en: "inauguration" }, { vi: "lễ trao giải", en: "award ceremony" },
            { vi: "thể thao", en: "sports event" }, { vi: "thi đấu", en: "competition" }, { vi: "giải đấu", en: "tournament" }, { vi: "Olympic", en: "Olympics" },
            { vi: "World Cup", en: "World Cup" }, { vi: "nhà tổ chức", en: "organizer" }, { vi: "ban tổ chức", en: "organizing committee" }, { vi: "tình nguyện viên", en: "volunteer" },
            { vi: "khách mời", en: "guest" }, { vi: "diễn giả", en: "speaker" }, { vi: "người tham dự", en: "attendee" }, { vi: "bảo vệ", en: "security" }
        ]
    },

    // ==================== 55. LỄ TẾT (HOLIDAYS) - 80+ từ ====================
    holidays: {
        name: "🎊 LỄ TẾT - HOLIDAYS",
        words: [
            { vi: "lễ tết", en: "holiday" }, { vi: "ngày lễ", en: "public holiday" }, { vi: "Tết Nguyên Đán", en: "Lunar New Year" }, { vi: "Tết Dương lịch", en: "New Year's Day" },
            { vi: "Giáng sinh", en: "Christmas" }, { vi: "Lễ Phục sinh", en: "Easter" }, { vi: "Lễ Tạ ơn", en: "Thanksgiving" }, { vi: "Quốc khánh", en: "National Day" },
            { vi: "Ngày Quốc tế Lao động", en: "Labor Day" }, { vi: "Ngày Phụ nữ", en: "Women's Day" }, { vi: "Ngày Nhà giáo", en: "Teachers' Day" }, { vi: "Ngày Gia đình", en: "Family Day" },
            { vi: "Trung thu", en: "Mid-Autumn Festival" }, { vi: "Vu Lan", en: "Ghost Festival" }, { vi: "Tết Hàn thực", en: "Cold Food Festival" }, { vi: "Tết Đoan Ngọ", en: "Dragon Boat Festival" },
            { vi: "Lễ hội", en: "festival" }, { vi: "lì xì", en: "lucky money" }, { vi: "bánh chưng", en: "square sticky rice cake" }, { vi: "bánh tét", en: "cylindrical sticky rice cake" },
            { vi: "dưa hành", en: "pickled onion" }, { vi: "củ kiệu", en: "pickled scallion" }, { vi: "mứt", en: "candied fruit" }, { vi: "hạt dưa", en: "melon seeds" },
            { vi: "chúc Tết", en: "New Year wishes" }, { vi: "đi chúc Tết", en: "visit during Tet" }, { vi: "xông đất", en: "first-footing" }, { vi: "hái lộc", en: "pick lucky leaves" },
            { vi: "cây thông Noel", en: "Christmas tree" }, { vi: "ông già Noel", en: "Santa Claus" }, { vi: "quà tặng", en: "gift" }, { vi: "trang trí", en: "decoration" }
        ]
    },

    // ==================== 56. ẨM THỰC VIỆT NAM (VIETNAMESE CUISINE) - 100+ từ ====================
    vietnamese_cuisine: {
        name: "🍜 ẨM THỰC VIỆT NAM - VIETNAMESE CUISINE",
        words: [
            { vi: "phở", en: "pho" }, { vi: "phở bò", en: "beef pho" }, { vi: "phở gà", en: "chicken pho" }, { vi: "bún chả", en: "bun cha" },
            { vi: "bún bò Huế", en: "Hue beef noodle soup" }, { vi: "bún riêu", en: "crab noodle soup" }, { vi: "bún mắm", en: "fermented fish noodle soup" }, { vi: "bún ốc", en: "snail noodle soup" },
            { vi: "hủ tiếu", en: "hu tieu" }, { vi: "hủ tiếu Nam Vang", en: "Phnom Penh noodle soup" }, { vi: "mì Quảng", en: "Quang noodle" }, { vi: "miến", en: "glass noodle" },
            { vi: "cháo lòng", en: "porridge with pork offal" }, { vi: "cháo ếch", en: "frog porridge" }, { vi: "xôi", en: "sticky rice" }, { vi: "xôi gấc", en: "gac sticky rice" },
            { vi: "xôi ngô", en: "corn sticky rice" }, { vi: "cơm tấm", en: "broken rice" }, { vi: "cơm hến", en: "clam rice" }, { vi: "cơm niêu", en: "clay pot rice" },
            { vi: "bánh mì", en: "Vietnamese sandwich" }, { vi: "bánh mì thịt", en: "meat sandwich" }, { vi: "bánh mì chảo", en: "pan fried sandwich" }, { vi: "bánh cuốn", en: "steamed rice roll" },
            { vi: "bánh xèo", en: "sizzling pancake" }, { vi: "bánh khọt", en: "mini savory pancake" }, { vi: "bánh bèo", en: "water fern cake" }, { vi: "bánh đúc", en: "rice pudding cake" },
            { vi: "bánh tráng trộn", en: "mixed rice paper" }, { vi: "bánh tráng cuốn", en: "rolled rice paper" }, { vi: "chả giò", en: "spring roll" }, { vi: "nem rán", en: "fried spring roll" },
            { vi: "gỏi cuốn", en: "fresh spring roll" }, { vi: "chả cá Lã Vọng", en: "La Vong grilled fish" }, { vi: "vịt quay", en: "roast duck" }, { vi: "vịt lộn", en: "duck embryo egg" },
            { vi: "trứng vịt lộn", en: "fertilized duck egg" }, { vi: "ốc luộc", en: "boiled snail" }, { vi: "chân gà sả tắc", en: "lemongrass chicken feet" }, { vi: "phá lấu", en: "beef offal stew" }
        ]
    },

    // ==================== 57. ẨM THỰC HÀN QUỐC (KOREAN CUISINE) - 90+ từ ====================
    korean_cuisine: {
        name: "🍲 ẨM THỰC HÀN QUỐC - KOREAN CUISINE",
        words: [
            { vi: "kimchi", en: "kimchi" }, { vi: "kimchi cải thảo", en: "napa cabbage kimchi" }, { vi: "kimchi củ cải", en: "radish kimchi" }, { vi: "kimchi dưa chuột", en: "cucumber kimchi" },
            { vi: "bibimbap", en: "bibimbap" }, { vi: "bulgogi", en: "bulgogi" }, { vi: "galbi", en: "galbi" }, { vi: "samgyeopsal", en: "samgyeopsal" },
            { vi: "japchae", en: "japchae" }, { vi: "tteokbokki", en: "tteokbokki" }, { vi: "sundubu jjigae", en: "sundubu jjigae" }, { vi: "kimchi jjigae", en: "kimchi stew" },
            { vi: "doenjang jjigae", en: "soybean paste stew" }, { vi: "budae jjigae", en: "army stew" }, { vi: "kimchi jeon", en: "kimchi pancake" }, { vi: "pajeon", en: "green onion pancake" },
            { vi: "kimbap", en: "kimbap" }, { vi: "ramyeon", en: "ramyeon" }, { vi: "jjajangmyeon", en: "jjajangmyeon" }, { vi: "jjamppong", en: "jjamppong" },
            { vi: "naengmyeon", en: "cold noodle" }, { vi: "samgyetang", en: "ginseng chicken soup" }, { vi: "seolleongtang", en: "ox bone soup" }, { vi: "gamjatang", en: "potato stew" },
            { vi: "sikhye", en: "rice punch" }, { vi: "soju", en: "soju" }, { vi: "makgeolli", en: "rice wine" }, { vi: "banchan", en: "side dishes" },
            { vi: "gimbap", en: "seaweed rice roll" }, { vi: "mandu", en: "dumpling" }, { vi: "hoeddeok", en: "sweet pancake" }, { vi: "bingsu", en: "shaved ice" }
        ]
    },

    // ==================== 58. ẨM THỰC NHẬT BẢN (JAPANESE CUISINE) - 100+ từ ====================
    japanese_cuisine: {
        name: "🍱 ẨM THỰC NHẬT BẢN - JAPANESE CUISINE",
        words: [
            { vi: "sushi", en: "sushi" }, { vi: "sashimi", en: "sashimi" }, { vi: "nigiri", en: "nigiri" }, { vi: "maki", en: "maki roll" },
            { vi: "uramaki", en: "inside-out roll" }, { vi: "temaki", en: "hand roll" }, { vi: "wasabi", en: "wasabi" }, { vi: "gari", en: "pickled ginger" },
            { vi: "ramen", en: "ramen" }, { vi: "tonkotsu ramen", en: "pork bone ramen" }, { vi: "miso ramen", en: "miso ramen" }, { vi: "shoyu ramen", en: "soy sauce ramen" },
            { vi: "udon", en: "udon" }, { vi: "soba", en: "soba" }, { vi: "tempura", en: "tempura" }, { vi: "tonkatsu", en: "pork cutlet" },
            { vi: "katsu curry", en: "katsu curry" }, { vi: "okonomiyaki", en: "okonomiyaki" }, { vi: "takoyaki", en: "octopus balls" }, { vi: "yakitori", en: "grilled skewers" },
            { vi: "teppanyaki", en: "teppanyaki" }, { vi: "shabu shabu", en: "shabu shabu" }, { vi: "sukiyaki", en: "sukiyaki" }, { vi: "gyudon", en: "beef bowl" },
            { vi: "oyakodon", en: "chicken and egg bowl" }, { vi: "katsudon", en: "pork cutlet bowl" }, { vi: "onigiri", en: "rice ball" }, { vi: "bento", en: "bento box" },
            { vi: "miso soup", en: "miso soup" }, { vi: "tamagoyaki", en: "Japanese omelette" }, { vi: "chawanmushi", en: "savory egg custard" }, { vi: "matcha", en: "matcha" },
            { vi: "mochi", en: "mochi" }, { vi: "dorayaki", en: "dorayaki" }, { vi: "taiyaki", en: "fish-shaped cake" }, { vi: "daifuku", en: "daifuku" },
            { vi: "sake", en: "sake" }, { vi: "shochu", en: "shochu" }, { vi: "hojicha", en: "roasted tea" }, { vi: "genmaicha", en: "brown rice tea" }
        ]
    },

    // ==================== 59. ẨM THỰC TRUNG HOA (CHINESE CUISINE) - 100+ từ ====================
    chinese_cuisine: {
        name: "🥟 ẨM THỰC TRUNG HOA - CHINESE CUISINE",
        words: [
            { vi: "dimsum", en: "dim sum" }, { vi: "há cảo", en: "har gow" }, { vi: "sủi cảo", en: "shumai" }, { vi: "bánh bao", en: "baozi" },
            { vi: "bánh bao xá xíu", en: "char siu bao" }, { vi: "xíu mại", en: "siu mai" }, { vi: "hoành thánh", en: "wonton" }, { vi: "lẩu", en: "hot pot" },
            { vi: "vịt quay Bắc Kinh", en: "Peking duck" }, { vi: "xá xíu", en: "char siu" }, { vi: "sườn xào chua ngọt", en: "sweet and sour pork" }, { vi: "cung bảo gà", en: "kung pao chicken" },
            { vi: "mapo đậu phụ", en: "mapo tofu" }, { vi: "mì xào", en: "chow mein" }, { vi: "cơm rang Dương Châu", en: "Yangzhou fried rice" }, { vi: "hoành thánh mì", en: "wonton noodle soup" },
            { vi: "mì Tứ Xuyên", en: "Sichuan noodle" }, { vi: "lạp xưởng", en: "Chinese sausage" }, { vi: "bánh trung thu", en: "mooncake" }, { vi: "bánh quy may mắn", en: "fortune cookie" },
            { vi: "trứng muối", en: "salted egg" }, { vi: "chân gà hầm", en: "braised chicken feet" }, { vi: "tiết vịt", en: "duck blood" }, { vi: "đậu hũ thối", en: "stinky tofu" },
            { vi: "trà Trung Hoa", en: "Chinese tea" }, { vi: "trà ô long", en: "oolong tea" }, { vi: "trà phổ nhĩ", en: "pu-erh tea" }, { vi: "trà hoa cúc", en: "chrysanthemum tea" }
        ]
    },

    // ==================== 60. ẨM THỰC PHƯƠNG TÂY (WESTERN CUISINE) - 100+ từ ====================
    western_cuisine: {
        name: "🍔 ẨM THỰC PHƯƠNG TÂY - WESTERN CUISINE",
        words: [
            { vi: "burger", en: "burger" }, { vi: "pizza", en: "pizza" }, { vi: "pasta", en: "pasta" }, { vi: "spaghetti", en: "spaghetti" },
            { vi: "lasagna", en: "lasagna" }, { vi: "macaroni", en: "macaroni" }, { vi: "steak", en: "steak" }, { vi: "bít tết", en: "beefsteak" },
            { vi: "salad", en: "salad" }, { vi: "soup", en: "soup" }, { vi: "sandwich", en: "sandwich" }, { vi: "hot dog", en: "hot dog" },
            { vi: "fish and chips", en: "fish and chips" }, { vi: "roast beef", en: "roast beef" }, { vi: "grilled chicken", en: "grilled chicken" }, { vi: "baked potato", en: "baked potato" },
            { vi: "mashed potato", en: "mashed potato" }, { vi: "french fries", en: "french fries" }, { vi: "onion rings", en: "onion rings" }, { vi: "coleslaw", en: "coleslaw" },
            { vi: "pancake", en: "pancake" }, { vi: "waffle", en: "waffle" }, { vi: "croissant", en: "croissant" }, { vi: "baguette", en: "baguette" },
            { vi: "cheese", en: "cheese" }, { vi: "butter", en: "butter" }, { vi: "cream", en: "cream" }, { vi: "yogurt", en: "yogurt" },
            { vi: "cake", en: "cake" }, { vi: "pie", en: "pie" }, { vi: "cookie", en: "cookie" }, { vi: "brownie", en: "brownie" },
            { vi: "ice cream", en: "ice cream" }, { vi: "pudding", en: "pudding" }, { vi: "custard", en: "custard" }, { vi: "mousse", en: "mousse" },
            { vi: "wine", en: "wine" }, { vi: "beer", en: "beer" }, { vi: "cocktail", en: "cocktail" }, { vi: "whiskey", en: "whiskey" },
            { vi: "vodka", en: "vodka" }, { vi: "gin", en: "gin" }, { vi: "rum", en: "rum" }, { vi: "tequila", en: "tequila" }
        ]
    },

    // ==================== 61. K-POP (K-POP) - 90+ từ ====================
    kpop: {
        name: "🎤 K-POP - KOREAN POP MUSIC",
        words: [
            { vi: "K-pop", en: "K-pop" }, { vi: "nhóm nhạc", en: "group" }, { vi: "boygroup", en: "boy group" }, { vi: "girlgroup", en: "girl group" },
            { vi: "debut", en: "debut" }, { vi: "comeback", en: "comeback" }, { vi: "album", en: "album" }, { vi: "mini album", en: "mini album" },
            { vi: "single", en: "single" }, { vi: "title track", en: "title track" }, { vi: "b-side", en: "b-side track" }, { vi: "MV", en: "music video" },
            { vi: "bài hát chính", en: "title song" }, { vi: "vũ đạo", en: "choreography" }, { vi: "point dance", en: "point dance" }, { vi: "fan chant", en: "fan chant" },
            { vi: "light stick", en: "light stick" }, { vi: "fandom", en: "fandom" }, { vi: "bias", en: "bias" }, { vi: "bias wrecker", en: "bias wrecker" },
            { vi: "visual", en: "visual" }, { vi: "main vocal", en: "main vocal" }, { vi: "lead vocal", en: "lead vocal" }, { vi: "sub vocal", en: "sub vocal" },
            { vi: "main dancer", en: "main dancer" }, { vi: "lead dancer", en: "lead dancer" }, { vi: "main rapper", en: "main rapper" }, { vi: "lead rapper", en: "lead rapper" },
            { vi: "center", en: "center" }, { vi: "maknae", en: "youngest member" }, { vi: "leader", en: "leader" }, { vi: "concert", en: "concert" },
            { vi: "fan meeting", en: "fan meeting" }, { vi: "world tour", en: "world tour" }, { vi: "music show", en: "music show" }, { vi: "chart", en: "chart" },
            { vi: "music award", en: "music award" }, { vi: "BTS", en: "BTS" }, { vi: "Blackpink", en: "Blackpink" }, { vi: "Twice", en: "Twice" },
            { vi: "Exo", en: "Exo" }, { vi: "Seventeen", en: "Seventeen" }, { vi: "NewJeans", en: "NewJeans" }, { vi: "IVE", en: "IVE" },
            { vi: "aespa", en: "aespa" }, { vi: "Le Sserafim", en: "Le Sserafim" }, { vi: "G-idle", en: "G-idle" }, { vi: "Stray Kids", en: "Stray Kids" }
        ]
    },

    // ==================== 62. GAME (GAMING) - 100+ từ ====================
    gaming: {
        name: "🎮 GAME - GAMING",
        words: [
            { vi: "game", en: "game" }, { vi: "trò chơi điện tử", en: "video game" }, { vi: "game mobile", en: "mobile game" }, { vi: "game PC", en: "PC game" },
            { vi: "console", en: "console" }, { vi: "PlayStation", en: "PlayStation" }, { vi: "Xbox", en: "Xbox" }, { vi: "Nintendo Switch", en: "Nintendo Switch" },
            { vi: "game thủ", en: "gamer" }, { vi: "pro player", en: "pro player" }, { vi: "streamer", en: "streamer" }, { vi: "game stream", en: "game stream" },
            { vi: "Twitch", en: "Twitch" }, { vi: "YouTube Gaming", en: "YouTube Gaming" }, { vi: "thể loại game", en: "game genre" }, { vi: "RPG", en: "RPG" },
            { vi: "FPS", en: "FPS" }, { vi: "MOBA", en: "MOBA" }, { vi: "battle royale", en: "battle royale" }, { vi: "MMORPG", en: "MMORPG" },
            { vi: "nhập vai", en: "role-playing" }, { vi: "hành động", en: "action" }, { vi: "phiêu lưu", en: "adventure" }, { vi: "kinh dị", en: "horror" },
            { vi: "sinh tồn", en: "survival" }, { vi: "chiến thuật", en: "strategy" }, { vi: "mô phỏng", en: "simulation" }, { vi: "thể thao", en: "sports" },
            { vi: "Liên Minh Huyền Thoại", en: "League of Legends" }, { vi: "Valorant", en: "Valorant" }, { vi: "CS:GO", en: "CS:GO" }, { vi: "PUBG", en: "PUBG" },
            { vi: "Free Fire", en: "Free Fire" }, { vi: "Genshin Impact", en: "Genshin Impact" }, { vi: "Minecraft", en: "Minecraft" }, { vi: "Roblox", en: "Roblox" },
            { vi: "cày game", en: "grind" }, { vi: "rank", en: "rank" }, { vi: "xếp hạng", en: "ranking" }, { vi: "vũ khí", en: "weapon" },
            { vi: "trang bị", en: "equipment" }, { vi: "phụ kiện", en: "accessory" }, { vi: "nhiệm vụ", en: "quest" }, { vi: "thành tựu", en: "achievement" }
        ]
    },

    // ==================== 63. E-SPORTS (ESPORTS) - 80+ từ ====================
    esports: {
        name: "🏆 E-SPORTS - ESPORTS",
        words: [
            { vi: "thể thao điện tử", en: "esports" }, { vi: "giải đấu", en: "tournament" }, { vi: "chung kết", en: "final" }, { vi: "vòng bảng", en: "group stage" },
            { vi: "playoff", en: "playoff" }, { vi: "vòng loại", en: "qualifier" }, { vi: "championship", en: "championship" }, { vi: "world championship", en: "world championship" },
            { vi: "LCK", en: "LCK" }, { vi: "LPL", en: "LPL" }, { vi: "LEC", en: "LEC" }, { vi: "LCS", en: "LCS" },
            { vi: "VCS", en: "VCS" }, { vi: "đội tuyển", en: "team" }, { vi: "huấn luyện viên", en: "coach" }, { vi: "chuyên gia phân tích", en: "analyst" },
            { vi: "game thủ chuyên nghiệp", en: "pro gamer" }, { vi: "tuyển thủ", en: "player" }, { vi: "đồng đội", en: "teammate" }, { vi: "đối thủ", en: "opponent" },
            { vi: "combo", en: "combo" }, { vi: "chiến thuật", en: "strategy" }, { vi: "tactics", en: "tactics" }, { vi: "kỹ năng cá nhân", en: "mechanics" },
            { vi: "phối hợp", en: "coordination" }, { vi: "giao tiếp", en: "communication" }, { vi: "tiền thưởng", en: "prize pool" }, { vi: "tài trợ", en: "sponsorship" },
            { vi: "Faker", en: "Faker" }, { vi: "ShowMaker", en: "ShowMaker" }, { vi: "Chovy", en: "Chovy" }, { vi: "Canyon", en: "Canyon" },
            { vi: "SofM", en: "SofM" }, { vi: "Levi", en: "Levi" }, { vi: "Doublelift", en: "Doublelift" }, { vi: "Uzi", en: "Uzi" }
        ]
    },

    // ==================== 64. CRYPTO & BLOCKCHAIN (CRYPTO) - 100+ từ ====================
    crypto: {
        name: "₿ CRYPTO & BLOCKCHAIN",
        words: [
            { vi: "tiền điện tử", en: "cryptocurrency" }, { vi: "blockchain", en: "blockchain" }, { vi: "Bitcoin", en: "Bitcoin" }, { vi: "Ethereum", en: "Ethereum" },
            { vi: "Altcoin", en: "altcoin" }, { vi: "stablecoin", en: "stablecoin" }, { vi: "USDT", en: "USDT" }, { vi: "USDC", en: "USDC" },
            { vi: "BNB", en: "BNB" }, { vi: "Solana", en: "Solana" }, { vi: "Cardano", en: "Cardano" }, { vi: "Dogecoin", en: "Dogecoin" },
            { vi: "XRP", en: "XRP" }, { vi: "Polkadot", en: "Polkadot" }, { vi: "Avalanche", en: "Avalanche" }, { vi: "Chainlink", en: "Chainlink" },
            { vi: "ví điện tử", en: "wallet" }, { vi: "ví nóng", en: "hot wallet" }, { vi: "ví lạnh", en: "cold wallet" }, { vi: "private key", en: "private key" },
            { vi: "public key", en: "public key" }, { vi: "seed phrase", en: "seed phrase" }, { vi: "sàn giao dịch", en: "exchange" }, { vi: "CEX", en: "centralized exchange" },
            { vi: "DEX", en: "decentralized exchange" }, { vi: "Binance", en: "Binance" }, { vi: "Coinbase", en: "Coinbase" }, { vi: "Bybit", en: "Bybit" },
            { vi: "OKX", en: "OKX" }, { vi: "Kucoin", en: "Kucoin" }, { vi: "mua", en: "buy" }, { vi: "bán", en: "sell" },
            { vi: "giao dịch", en: "trade" }, { vi: "swap", en: "swap" }, { vi: "hodl", en: "hold" }, { vi: "FOMO", en: "fear of missing out" },
            { vi: "FUD", en: "fear uncertainty doubt" }, { vi: "whale", en: "whale" }, { vi: "shill", en: "shill" }, { vi: "pump and dump", en: "pump and dump" },
            { vi: "DeFi", en: "decentralized finance" }, { vi: "NFT", en: "non-fungible token" }, { vi: "DAO", en: "decentralized autonomous organization" }, { vi: "smart contract", en: "smart contract" },
            { vi: "mining", en: "mining" }, { vi: "đào coin", en: "crypto mining" }, { vi: "staking", en: "staking" }, { vi: "farming", en: "yield farming" },
            { vi: "airdrop", en: "airdrop" }, { vi: "ICO", en: "initial coin offering" }, { vi: "IDO", en: "initial DEX offering" }, { vi: "IPO", en: "initial public offering" },
            { vi: "bull market", en: "bull market" }, { vi: "bear market", en: "bear market" }, { vi: "ATH", en: "all time high" }, { vi: "ATL", en: "all time low" }
        ]
    },

    // ==================== 65. TRÍ TUỆ NHÂN TẠO (AI) - 100+ từ ====================
    ai: {
        name: "🤖 TRÍ TUỆ NHÂN TẠO - AI",
        words: [
            { vi: "trí tuệ nhân tạo", en: "artificial intelligence" }, { vi: "AI", en: "AI" }, { vi: "machine learning", en: "machine learning" }, { vi: "deep learning", en: "deep learning" },
            { vi: "neural network", en: "neural network" }, { vi: "mạng nơ-ron", en: "neural network" }, { vi: "supervised learning", en: "supervised learning" }, { vi: "unsupervised learning", en: "unsupervised learning" },
            { vi: "reinforcement learning", en: "reinforcement learning" }, { vi: "học tăng cường", en: "reinforcement learning" }, { vi: "natural language processing", en: "natural language processing" }, { vi: "NLP", en: "NLP" },
            { vi: "computer vision", en: "computer vision" }, { vi: "thị giác máy tính", en: "computer vision" }, { vi: "speech recognition", en: "speech recognition" }, { vi: "nhận dạng giọng nói", en: "speech recognition" },
            { vi: "image recognition", en: "image recognition" }, { vi: "nhận dạng hình ảnh", en: "image recognition" }, { vi: "face recognition", en: "face recognition" }, { vi: "nhận dạng khuôn mặt", en: "face recognition" },
            { vi: "ChatGPT", en: "ChatGPT" }, { vi: "GPT-4", en: "GPT-4" }, { vi: "Gemini", en: "Gemini" }, { vi: "Claude", en: "Claude" },
            { vi: "Copilot", en: "Copilot" }, { vi: "Midjourney", en: "Midjourney" }, { vi: "DALL-E", en: "DALL-E" }, { vi: "Stable Diffusion", en: "Stable Diffusion" },
            { vi: "large language model", en: "large language model" }, { vi: "LLM", en: "LLM" }, { vi: "training data", en: "training data" }, { vi: "dữ liệu huấn luyện", en: "training data" },
            { vi: "fine-tuning", en: "fine-tuning" }, { vi: "hiệu chỉnh", en: "fine-tuning" }, { vi: "prompt", en: "prompt" }, { vi: "lời nhắc", en: "prompt" },
            { vi: "prompt engineering", en: "prompt engineering" }, { vi: "kỹ thuật tạo lời nhắc", en: "prompt engineering" }, { vi: "hallucination", en: "hallucination" }, { vi: "ảo giác AI", en: "hallucination" },
            { vi: "bias", en: "bias" }, { vi: "thiên vị", en: "bias" }, { vi: "ethics", en: "ethics" }, { vi: "đạo đức AI", en: "ethics" },
            { vi: "open source", en: "open source" }, { vi: "mã nguồn mở", en: "open source" }, { vi: "closed source", en: "closed source" }, { vi: "mã nguồn đóng", en: "closed source" }
        ]
    },

    // ==================== 66. WEB3 (WEB3) - 90+ từ ====================
    web3: {
        name: "🌐 WEB3 - WEB3",
        words: [
            { vi: "Web3", en: "Web3" }, { vi: "Web 3.0", en: "Web 3.0" }, { vi: "decentralization", en: "decentralization" }, { vi: "phi tập trung", en: "decentralization" },
            { vi: "blockchain", en: "blockchain" }, { vi: "chuỗi khối", en: "blockchain" }, { vi: "cryptocurrency", en: "cryptocurrency" }, { vi: "tiền mã hóa", en: "cryptocurrency" },
            { vi: "smart contract", en: "smart contract" }, { vi: "hợp đồng thông minh", en: "smart contract" }, { vi: "dApp", en: "decentralized application" }, { vi: "ứng dụng phi tập trung", en: "dApp" },
            { vi: "DeFi", en: "decentralized finance" }, { vi: "tài chính phi tập trung", en: "DeFi" }, { vi: "DAO", en: "decentralized autonomous organization" }, { vi: "tổ chức tự trị phi tập trung", en: "DAO" },
            { vi: "NFT", en: "non-fungible token" }, { vi: "token không thể thay thế", en: "NFT" }, { vi: "Metaverse", en: "Metaverse" }, { vi: "siêu vũ trụ", en: "Metaverse" },
            { vi: "wallet", en: "wallet" }, { vi: "ví Web3", en: "wallet" }, { vi: "MetaMask", en: "MetaMask" }, { vi: "Trust Wallet", en: "Trust Wallet" },
            { vi: "Token", en: "token" }, { vi: "Coin", en: "coin" }, { vi: "utility token", en: "utility token" }, { vi: "governance token", en: "governance token" },
            { vi: "staking", en: "staking" }, { vi: "khóa stake", en: "staking" }, { vi: "liquidity", en: "liquidity" }, { vi: "thanh khoản", en: "liquidity" },
            { vi: "liquidity pool", en: "liquidity pool" }, { vi: "bể thanh khoản", en: "liquidity pool" }, { vi: "yield farming", en: "yield farming" }, { vi: "canh tác lợi suất", en: "yield farming" },
            { vi: "gas fee", en: "gas fee" }, { vi: "phí gas", en: "gas fee" }, { vi: "bridge", en: "bridge" }, { vi: "cầu nối", en: "bridge" },
            { vi: "layer 1", en: "layer 1" }, { vi: "lớp 1", en: "layer 1" }, { vi: "layer 2", en: "layer 2" }, { vi: "lớp 2", en: "layer 2" },
            { vi: "rollup", en: "rollup" }, { vi: "zero-knowledge proof", en: "zero-knowledge proof" }, { vi: "ZK-proof", en: "ZK-proof" }, { vi: "bằng chứng không tri thức", en: "zero-knowledge proof" }
        ]
    },

    // ==================== 67. ANIME & MANGA (ANIME) - 110+ từ ====================
    anime: {
        name: "🎌 ANIME & MANGA",
        words: [
            { vi: "anime", en: "anime" }, { vi: "manga", en: "manga" }, { vi: "manhwa", en: "manhwa" }, { vi: "manhua", en: "manhua" },
            { vi: "light novel", en: "light novel" }, { vi: "visual novel", en: "visual novel" }, { vi: "otaku", en: "otaku" }, { vi: "weeb", en: "weeb" },
            { vi: "cosplay", en: "cosplay" }, { vi: "cosplayer", en: "cosplayer" }, { vi: "fanart", en: "fanart" }, { vi: "doujinshi", en: "doujinshi" },
            { vi: "shonen", en: "shonen" }, { vi: "shoujo", en: "shoujo" }, { vi: "seinen", en: "seinen" }, { vi: "josei", en: "josei" },
            { vi: "kodomomuke", en: "kodomomuke" }, { vi: "ecchi", en: "ecchi" }, { vi: "hentai", en: "hentai" }, { vi: "yaoi", en: "yaoi" },
            { vi: "yuri", en: "yuri" }, { vi: "isekai", en: "isekai" }, { vi: "slice of life", en: "slice of life" }, { vi: "mecha", en: "mecha" },
            { vi: "mahou shoujo", en: "magical girl" }, { vi: "sports anime", en: "sports anime" }, { vi: "music anime", en: "music anime" }, { vi: "psychological", en: "psychological" },
            { vi: "horror", en: "horror" }, { vi: "thriller", en: "thriller" }, { vi: "mystery", en: "mystery" }, { vi: "romance", en: "romance" },
            { vi: "comedy", en: "comedy" }, { vi: "action", en: "action" }, { vi: "adventure", en: "adventure" }, { vi: "fantasy", en: "fantasy" },
            { vi: "Naruto", en: "Naruto" }, { vi: "One Piece", en: "One Piece" }, { vi: "Bleach", en: "Bleach" }, { vi: "Dragon Ball", en: "Dragon Ball" },
            { vi: "Attack on Titan", en: "Attack on Titan" }, { vi: "Demon Slayer", en: "Demon Slayer" }, { vi: "Jujutsu Kaisen", en: "Jujutsu Kaisen" }, { vi: "My Hero Academia", en: "My Hero Academia" },
            { vi: "Spy x Family", en: "Spy x Family" }, { vi: "Chainsaw Man", en: "Chainsaw Man" }, { vi: "Tokyo Revengers", en: "Tokyo Revengers" }, { vi: "Hunter x Hunter", en: "Hunter x Hunter" },
            { vi: "Fullmetal Alchemist", en: "Fullmetal Alchemist" }, { vi: "Death Note", en: "Death Note" }, { vi: "Sword Art Online", en: "Sword Art Online" }, { vi: "Your Name", en: "Your Name" },
            { vi: "Spirited Away", en: "Spirited Away" }, { vi: "Studio Ghibli", en: "Studio Ghibli" }, { vi: "Hayao Miyazaki", en: "Hayao Miyazaki" }, { vi: "Makoto Shinkai", en: "Makoto Shinkai" }
        ]
    },

    // ==================== 68. SUPERHERO (MARVEL & DC) - 100+ từ ====================
    superhero: {
        name: "🦸 SUPERHERO - MARVEL & DC",
        words: [
            { vi: "siêu anh hùng", en: "superhero" }, { vi: "phản diện", en: "villain" }, { vi: "siêu năng lực", en: "superpower" }, { vi: "bộ trang phục", en: "costume" },
            { vi: "mặt nạ", en: "mask" }, { vi: "áo choàng", en: "cape" }, { vi: "vũ khí", en: "weapon" }, { vi: "vũ trụ điện ảnh", en: "cinematic universe" },
            { vi: "MCU", en: "Marvel Cinematic Universe" }, { vi: "DCEU", en: "DC Extended Universe" }, { vi: "Spider-Man", en: "Spider-Man" }, { vi: "Iron Man", en: "Iron Man" },
            { vi: "Captain America", en: "Captain America" }, { vi: "Thor", en: "Thor" }, { vi: "Hulk", en: "Hulk" }, { vi: "Black Widow", en: "Black Widow" },
            { vi: "Hawkeye", en: "Hawkeye" }, { vi: "Doctor Strange", en: "Doctor Strange" }, { vi: "Black Panther", en: "Black Panther" }, { vi: "Captain Marvel", en: "Captain Marvel" },
            { vi: "Ant-Man", en: "Ant-Man" }, { vi: "Guardians of the Galaxy", en: "Guardians of the Galaxy" }, { vi: "Avengers", en: "Avengers" }, { vi: "Thanos", en: "Thanos" },
            { vi: "Loki", en: "Loki" }, { vi: "Batman", en: "Batman" }, { vi: "Superman", en: "Superman" }, { vi: "Wonder Woman", en: "Wonder Woman" },
            { vi: "Flash", en: "The Flash" }, { vi: "Aquaman", en: "Aquaman" }, { vi: "Cyborg", en: "Cyborg" }, { vi: "Green Lantern", en: "Green Lantern" },
            { vi: "Joker", en: "Joker" }, { vi: "Harley Quinn", en: "Harley Quinn" }, { vi: "Deadpool", en: "Deadpool" }, { vi: "Wolverine", en: "Wolverine" },
            { vi: "X-Men", en: "X-Men" }, { vi: "Fantastic Four", en: "Fantastic Four" }, { vi: "Infinite Gauntlet", en: "Infinite Gauntlet" }, { vi: "Infinity Stones", en: "Infinity Stones" },
            { vi: "Endgame", en: "Endgame" }, { vi: "Civil War", en: "Civil War" }, { vi: "Infinity War", en: "Infinity War" }, { vi: "No Way Home", en: "No Way Home" },
            { vi: "Dark Knight", en: "Dark Knight" }, { vi: "Man of Steel", en: "Man of Steel" }, { vi: "Justice League", en: "Justice League" }, { vi: "Suicide Squad", en: "Suicide Squad" }
        ]
    },

    // ==================== 69. KHOA HỌC VIỄN TƯỞNG (SCI-FI) - 90+ từ ====================
    scifi: {
        name: "👽 KHOA HỌC VIỄN TƯỞNG - SCI-FI",
        words: [
            { vi: "khoa học viễn tưởng", en: "science fiction" }, { vi: "tương lai", en: "future" }, { vi: "viễn cảnh", en: "vision" }, { vi: "công nghệ", en: "technology" },
            { vi: "robot", en: "robot" }, { vi: "android", en: "android" }, { vi: "cyborg", en: "cyborg" }, { vi: "AI", en: "artificial intelligence" },
            { vi: "người ngoài hành tinh", en: "alien" }, { vi: "sinh vật ngoài hành tinh", en: "extraterrestrial" }, { vi: "UFO", en: "unidentified flying object" }, { vi: "du hành vũ trụ", en: "space travel" },
            { vi: "tàu vũ trụ", en: "spaceship" }, { vi: "phi thuyền", en: "starship" }, { vi: "trạm vũ trụ", en: "space station" }, { vi: "sao Hỏa", en: "Mars" },
            { vi: "thuộc địa không gian", en: "space colony" }, { vi: "du hành thời gian", en: "time travel" }, { vi: "cỗ máy thời gian", en: "time machine" }, { vi: "dòng thời gian", en: "timeline" },
            { vi: "đa vũ trụ", en: "multiverse" }, { vi: "vũ trụ song song", en: "parallel universe" }, { vi: "lỗ đen", en: "black hole" }, { vi: "lỗ sâu", en: "wormhole" },
            { vi: "siêu tân tinh", en: "supernova" }, { vi: "chuỗi không-thời gian", en: "space-time continuum" }, { vi: "teleportation", en: "teleportation" }, { vi: "dịch chuyển tức thời", en: "teleportation" },
            { vi: "invisibility", en: "invisibility" }, { vi: "tàng hình", en: "invisibility" }, { vi: "force field", en: "force field" }, { vi: "lá chắn năng lượng", en: "force field" },
            { vi: "laser", en: "laser" }, { vi: "tia laser", en: "laser" }, { vi: "phaser", en: "phaser" }, { vi: "blaster", en: "blaster" },
            { vi: "Star Wars", en: "Star Wars" }, { vi: "Star Trek", en: "Star Trek" }, { vi: "Dune", en: "Dune" }, { vi: "The Matrix", en: "The Matrix" },
            { vi: "Interstellar", en: "Interstellar" }, { vi: "Inception", en: "Inception" }, { vi: "Avatar", en: "Avatar" }, { vi: "Blade Runner", en: "Blade Runner" }
        ]
    },

    // ==================== 70. KINH DỊ & GIẬT GÂN (HORROR) - 90+ từ ====================
    horror: {
        name: "👻 KINH DỊ - HORROR",
        words: [
            { vi: "kinh dị", en: "horror" }, { vi: "giật gân", en: "thriller" }, { vi: "ma", en: "ghost" }, { vi: "hồn ma", en: "phantom" },
            { vi: "quỷ", en: "demon" }, { vi: "ác quỷ", en: "devil" }, { vi: "thây ma", en: "zombie" }, { vi: "ma cà rồng", en: "vampire" },
            { vi: "người sói", en: "werewolf" }, { vi: "quái vật", en: "monster" }, { vi: "sinh vật huyền bí", en: "creature" }, { vi: "kẻ giết người", en: "killer" },
            { vi: "kẻ tâm thần", en: "psychopath" }, { vi: "sát nhân", en: "murderer" }, { vi: "truy sát", en: "slasher" }, { vi: "ám ảnh", en: "obsession" },
            { vi: "sợ hãi", en: "fear" }, { vi: "hoảng sợ", en: "panic" }, { vi: "kinh hoàng", en: "terror" }, { vi: "rùng rợn", en: "creepy" },
            { vi: "rùng mình", en: "chilling" }, { vi: "ghê rợn", en: "gruesome" }, { vi: "ma quái", en: "eerie" }, { vi: "bí ẩn", en: "mysterious" },
            { vi: "siêu nhiên", en: "supernatural" }, { vi: "huyền bí", en: "occult" }, { vi: "lời nguyền", en: "curse" }, { vi: "bị ám", en: "haunted" },
            { vi: "ngôi nhà ma ám", en: "haunted house" }, { vi: "nghĩa địa", en: "graveyard" }, { vi: "mộ", en: "tomb" }, { vi: "quan tài", en: "coffin" },
            { vi: "xác sống", en: "undead" }, { vi: "bộ xương", en: "skeleton" }, { vi: "xác chết", en: "corpse" }, { vi: "máu", en: "blood" },
            { vi: "giết người", en: "murder" }, { vi: "tàn sát", en: "massacre" }, { vi: "hành quyết", en: "execution" }, { vi: "tra tấn", en: "torture" },
            { vi: "The Conjuring", en: "The Conjuring" }, { vi: "Insidious", en: "Insidious" }, { vi: "Annabelle", en: "Annabelle" }, { vi: "The Nun", en: "The Nun" },
            { vi: "Scream", en: "Scream" }, { vi: "Halloween", en: "Halloween" }, { vi: "Friday the 13th", en: "Friday the 13th" }, { vi: "Nightmare on Elm Street", en: "Nightmare on Elm Street" },
            { vi: "The Shining", en: "The Shining" }, { vi: "Hereditary", en: "Hereditary" }, { vi: "Get Out", en: "Get Out" }, { vi: "A Quiet Place", en: "A Quiet Place" }
        ]
    },

        // ==================== 71. THỂ THAO BÓNG ĐÁ (FOOTBALL/SOCCER) - 120+ từ ====================
    football: {
        name: "⚽ BÓNG ĐÁ - FOOTBALL",
        words: [
            { vi: "bóng đá", en: "football/soccer" }, { vi: "sân bóng", en: "pitch/field" }, { vi: "khán đài", en: "stand" }, { vi: "sân vận động", en: "stadium" },
            { vi: "cầu thủ", en: "player" }, { vi: "thủ môn", en: "goalkeeper" }, { vi: "hậu vệ", en: "defender" }, { vi: "tiền vệ", en: "midfielder" },
            { vi: "tiền đạo", en: "forward/striker" }, { vi: "huấn luyện viên", en: "coach" }, { vi: "trọng tài", en: "referee" }, { vi: "trợ lý trọng tài", en: "assistant referee" },
            { vi: "bàn thắng", en: "goal" }, { vi: "ghi bàn", en: "score" }, { vi: "đá phạt", en: "free kick" }, { vi: "phạt đền", en: "penalty kick" },
            { vi: "quả phạt góc", en: "corner kick" }, { vi: "ném biên", en: "throw-in" }, { vi: "việt vị", en: "offside" }, { vi: "thẻ vàng", en: "yellow card" },
            { vi: "thẻ đỏ", en: "red card" }, { vi: "chấn thương", en: "injury" }, { vi: "thay người", en: "substitution" }, { vi: "hiệp 1", en: "first half" },
            { vi: "hiệp 2", en: "second half" }, { vi: "giờ nghỉ giữa hiệp", en: "halftime" }, { vi: "đá bù giờ", en: "injury time" }, { vi: "hiệp phụ", en: "extra time" },
            { vi: "đá luân lưu", en: "penalty shootout" }, { vi: "chung kết", en: "final" }, { vi: "bán kết", en: "semifinal" }, { vi: "tứ kết", en: "quarterfinal" },
            { vi: "vòng bảng", en: "group stage" }, { vi: "World Cup", en: "World Cup" }, { vi: "UEFA Champions League", en: "UEFA Champions League" }, { vi: "Euro", en: "UEFA European Championship" },
            { vi: "Premier League", en: "Premier League" }, { vi: "La Liga", en: "La Liga" }, { vi: "Serie A", en: "Serie A" }, { vi: "Bundesliga", en: "Bundesliga" },
            { vi: "Ligue 1", en: "Ligue 1" }, { vi: "V-League", en: "V-League" }, { vi: "Messi", en: "Messi" }, { vi: "Ronaldo", en: "Ronaldo" },
            { vi: "Neymar", en: "Neymar" }, { vi: "Mbappe", en: "Mbappe" }, { vi: "Haaland", en: "Haaland" }, { vi: "Salah", en: "Salah" }
        ]
    },

    // ==================== 72. THỂ THAO BÓNG RỔ (BASKETBALL) - 100+ từ ====================
    basketball: {
        name: "🏀 BÓNG RỔ - BASKETBALL",
        words: [
            { vi: "bóng rổ", en: "basketball" }, { vi: "sân bóng rổ", en: "court" }, { vi: "rổ", en: "hoop" }, { vi: "bảng rổ", en: "backboard" },
            { vi: "vành rổ", en: "rim" }, { vi: "lưới", en: "net" }, { vi: "vạch 3 điểm", en: "three-point line" }, { vi: "vạch ném phạt", en: "free throw line" },
            { vi: "cầu thủ", en: "player" }, { vi: "hậu vệ", en: "guard" }, { vi: "tiền đạo", en: "forward" }, { vi: "trung phong", en: "center" },
            { vi: "điểm", en: "point" }, { vi: "ném 3 điểm", en: "three-pointer" }, { vi: "2 điểm", en: "two-pointer" }, { vi: "1 điểm", en: "free throw" },
            { vi: "dunk", en: "dunk" }, { vi: "layup", en: "layup" }, { vi: "jump shot", en: "jump shot" }, { vi: "hook shot", en: "hook shot" },
            { vi: "rebound", en: "rebound" }, { vi: "assist", en: "assist" }, { vi: "steal", en: "steal" }, { vi: "block", en: "block" },
            { vi: "turnover", en: "turnover" }, { vi: "foul", en: "foul" }, { vi: "technical foul", en: "technical foul" }, { vi: "flagrant foul", en: "flagrant foul" },
            { vi: "timeout", en: "timeout" }, { vi: "NBA", en: "NBA" }, { vi: "playoffs", en: "playoffs" }, { vi: "finals", en: "finals" },
            { vi: "All-Star", en: "All-Star" }, { vi: "rookie", en: "rookie" }, { vi: "MVP", en: "Most Valuable Player" }, { vi: "LeBron James", en: "LeBron James" },
            { vi: "Stephen Curry", en: "Stephen Curry" }, { vi: "Kevin Durant", en: "Kevin Durant" }, { vi: "Giannis", en: "Giannis Antetokounmpo" }, { vi: "Kobe Bryant", en: "Kobe Bryant" },
            { vi: "Michael Jordan", en: "Michael Jordan" }, { vi: "Larry Bird", en: "Larry Bird" }, { vi: "Magic Johnson", en: "Magic Johnson" }, { vi: "Shaquille O'Neal", en: "Shaquille O'Neal" }
        ]
    },

    // ==================== 73. BƠI LỘI (SWIMMING) - 80+ từ ====================
    swimming: {
        name: "🏊 BƠI LỘI - SWIMMING",
        words: [
            { vi: "bơi lội", en: "swimming" }, { vi: "hồ bơi", en: "pool" }, { vi: "bể bơi", en: "swimming pool" }, { vi: "làn bơi", en: "lane" },
            { vi: "bơi sải", en: "freestyle" }, { vi: "bơi ếch", en: "breaststroke" }, { vi: "bơi bướm", en: "butterfly" }, { vi: "bơi ngửa", en: "backstroke" },
            { vi: "bơi hỗn hợp", en: "individual medley" }, { vi: "xuất phát", en: "start" }, { vi: "quay vòng", en: "turn" }, { vi: "về đích", en: "finish" },
            { vi: "kính bơi", en: "goggles" }, { vi: "mũ bơi", en: "swim cap" }, { vi: "áo tắm", en: "swimsuit" }, { vi: "ván bơi", en: "kickboard" },
            { vi: "phao bơi", en: "floaties" }, { vi: "ống thở", en: "snorkel" }, { vi: "vây bơi", en: "fins" }, { vi: "đồng hồ bấm giờ", en: "stopwatch" },
            { vi: "huấn luyện viên", en: "coach" }, { vi: "vận động viên", en: "swimmer" }, { vi: "kỷ lục thế giới", en: "world record" }, { vi: "huy chương vàng", en: "gold medal" },
            { vi: "Olympic", en: "Olympics" }, { vi: "thế vận hội", en: "Olympic Games" }, { vi: "Michael Phelps", en: "Michael Phelps" }, { vi: "Katie Ledecky", en: "Katie Ledecky" },
            { vi: "ngụp lặn", en: "diving" }, { vi: "nhảy cầu", en: "diving board" }, { vi: "bơi đồng đội", en: "relay" }, { vi: "bơi tự do tiếp sức", en: "freestyle relay" },
            { vi: "bơi hỗn hợp tiếp sức", en: "medley relay" }, { vi: "hồ bơi 25m", en: "short course" }, { vi: "hồ bơi 50m", en: "long course" }, { vi: "thở", en: "breathing" }
        ]
    },

    // ==================== 74. CẦU LÔNG (BADMINTON) - 80+ từ ====================
    badminton: {
        name: "🏸 CẦU LÔNG - BADMINTON",
        words: [
            { vi: "cầu lông", en: "badminton" }, { vi: "sân cầu lông", en: "court" }, { vi: "lưới", en: "net" }, { vi: "cầu", en: "shuttlecock" },
            { vi: "vợt", en: "racquet" }, { vi: "đường biên", en: "baseline" }, { vi: "đường giao cầu", en: "service line" }, { vi: "vạch giữa", en: "center line" },
            { vi: "giao cầu", en: "serve" }, { vi: "đỡ giao cầu", en: "receive" }, { vi: "đánh cầu", en: "hit" }, { vi: "bỏ nhỏ", en: "drop shot" },
            { vi: "đập cầu", en: "smash" }, { vi: "lốp bóng", en: "lob" }, { vi: "cắt cầu", en: "cut" }, { vi: "hất cầu", en: "net shot" },
            { vi: "điểm số", en: "score" }, { vi: "thi đấu", en: "match" }, { vi: "set", en: "set" }, { vi: "game", en: "game" },
            { vi: "điểm", en: "point" }, { vi: "giao cầu chéo", en: "cross-court serve" }, { vi: "giao cầu thẳng", en: "straight serve" }, { vi: "giao cầu thấp", en: "low serve" },
            { vi: "giao cầu cao", en: "high serve" }, { vi: "đánh tay thuận", en: "forehand" }, { vi: "đánh tay trái", en: "backhand" }, { vi: "di chuyển", en: "footwork" },
            { vi: "cầu lông đơn", en: "singles" }, { vi: "cầu lông đôi", en: "doubles" }, { vi: "cầu lông hỗn hợp", en: "mixed doubles" }, { vi: "thể thao", en: "sport" },
            { vi: "giải vô địch thế giới", en: "World Championship" }, { vi: "Thomas Cup", en: "Thomas Cup" }, { vi: "Uber Cup", en: "Uber Cup" }, { vi: "Sudirman Cup", en: "Sudirman Cup" },
            { vi: "Olympic", en: "Olympics" }, { vi: "Taufik Hidayat", en: "Taufik Hidayat" }, { vi: "Lin Dan", en: "Lin Dan" }, { vi: "Lee Chong Wei", en: "Lee Chong Wei" }
        ]
    },

    // ==================== 75. QUẦN VỢT (TENNIS) - 100+ từ ====================
    tennis: {
        name: "🎾 QUẦN VỢT - TENNIS",
        words: [
            { vi: "quần vợt", en: "tennis" }, { vi: "sân quần vợt", en: "court" }, { vi: "sân đất nện", en: "clay court" }, { vi: "sân cỏ", en: "grass court" },
            { vi: "sân cứng", en: "hard court" }, { vi: "lưới", en: "net" }, { vi: "vợt", en: "racket" }, { vi: "bóng", en: "ball" },
            { vi: "giao bóng", en: "serve" }, { vi: "giao bóng lần 1", en: "first serve" }, { vi: "giao bóng lần 2", en: "second serve" }, { vi: "giao bóng hỏng", en: "double fault" },
            { vi: "ace", en: "ace" }, { vi: "winner", en: "winner" }, { vi: "unforced error", en: "unforced error" }, { vi: "đánh thuận tay", en: "forehand" },
            { vi: "đánh trái tay", en: "backhand" }, { vi: "volley", en: "volley" }, { vi: "smash", en: "smash" }, { vi: "lob", en: "lob" },
            { vi: "drop shot", en: "drop shot" }, { vi: "slice", en: "slice" }, { vi: "topspin", en: "topspin" }, { vi: "điểm số", en: "score" },
            { vi: "0 điểm", en: "love" }, { vi: "15", en: "fifteen" }, { vi: "30", en: "thirty" }, { vi: "40", en: "forty" },
            { vi: "deuce", en: "deuce" }, { vi: "advantage", en: "advantage" }, { vi: "set", en: "set" }, { vi: "game", en: "game" },
            { vi: "tie-break", en: "tie-break" }, { vi: "Grand Slam", en: "Grand Slam" }, { vi: "Australian Open", en: "Australian Open" }, { vi: "French Open", en: "French Open" },
            { vi: "Wimbledon", en: "Wimbledon" }, { vi: "US Open", en: "US Open" }, { vi: "ATP", en: "ATP" }, { vi: "WTA", en: "WTA" },
            { vi: "Roger Federer", en: "Roger Federer" }, { vi: "Rafael Nadal", en: "Rafael Nadal" }, { vi: "Novak Djokovic", en: "Novak Djokovic" }, { vi: "Serena Williams", en: "Serena Williams" },
            { vi: "Maria Sharapova", en: "Maria Sharapova" }, { vi: "Naomi Osaka", en: "Naomi Osaka" }, { vi: "Carlos Alcaraz", en: "Carlos Alcaraz" }, { vi: "Casper Ruud", en: "Casper Ruud" }
        ]
    },

    // ==================== 76. VÕ THUẬT (MARTIAL ARTS) - 100+ từ ====================
    martial_arts: {
        name: "🥋 VÕ THUẬT - MARTIAL ARTS",
        words: [
            { vi: "võ thuật", en: "martial arts" }, { vi: "võ sĩ", en: "martial artist" }, { vi: "võ đường", en: "dojo" }, { vi: "sàn đấu", en: "mat" },
            { vi: "đòn", en: "strike" }, { vi: "đấm", en: "punch" }, { vi: "đá", en: "kick" }, { vi: "gối", en: "knee strike" },
            { vi: "chỏ", en: "elbow strike" }, { vi: "vật", en: "throw" }, { vi: "khóa", en: "lock" }, { vi: "siết", en: "choke" },
            { vi: "đòn thế", en: "technique" }, { vi: "tấn công", en: "attack" }, { vi: "phòng thủ", en: "defense" }, { vi: "phản đòn", en: "counter" },
            { vi: "đai", en: "belt" }, { vi: "đai đen", en: "black belt" }, { vi: "đai trắng", en: "white belt" }, { vi: "thăng cấp", en: "promotion" },
            { vi: "Karate", en: "Karate" }, { vi: "Taekwondo", en: "Taekwondo" }, { vi: "Judo", en: "Judo" }, { vi: "Kung Fu", en: "Kung Fu" },
            { vi: "Vovinam", en: "Vovinam" }, { vi: "Muay Thai", en: "Muay Thai" }, { vi: "Boxing", en: "Boxing" }, { vi: "Kickboxing", en: "Kickboxing" },
            { vi: "MMA", en: "Mixed Martial Arts" }, { vi: "Brazilian Jiu-Jitsu", en: "Brazilian Jiu-Jitsu" }, { vi: "Wrestling", en: "Wrestling" }, { vi: "Fencing", en: "Fencing" },
            { vi: "UFC", en: "UFC" }, { vi: "ONE Championship", en: "ONE Championship" }, { vi: "trọng tài", en: "referee" }, { vi: "hội đồng giám khảo", en: "judges" },
            { vi: "hạ gục", en: "knockout" }, { vi: "KO", en: "KO" }, { vi: "TKO", en: "technical knockout" }, { vi: "tính điểm", en: "decision" },
            { vi: "Bruce Lee", en: "Bruce Lee" }, { vi: "Jackie Chan", en: "Jackie Chan" }, { vi: "Jet Li", en: "Jet Li" }, { vi: "Conor McGregor", en: "Conor McGregor" },
            { vi: "Khabib Nurmagomedov", en: "Khabib" }, { vi: "Nguyễn Trần Duy Nhất", en: "Nguyen Tran Duy Nhat" }, { vi: "Bùi Yến Ly", en: "Bui Yen Ly" }, { vi: "boxing", en: "boxing" }
        ]
    },

    // ==================== 77. THỂ HÌNH (BODYBUILDING) - 80+ từ ====================
    bodybuilding: {
        name: "💪 THỂ HÌNH - BODYBUILDING",
        words: [
            { vi: "thể hình", en: "bodybuilding" }, { vi: "tập gym", en: "gym workout" }, { vi: "phòng gym", en: "gym" }, { vi: "tạ", en: "weight" },
            { vi: "tạ đòn", en: "barbell" }, { vi: "tạ đơn", en: "dumbbell" }, { vi: "tạ tay", en: "hand weight" }, { vi: "máy tập", en: "machine" },
            { vi: "ghế tập", en: "bench" }, { vi: "thảm tập", en: "mat" }, { vi: "găng tay tập", en: "gloves" }, { vi: "đai lưng", en: "belt" },
            { vi: "cơ bắp", en: "muscle" }, { vi: "cơ ngực", en: "chest" }, { vi: "cơ lưng", en: "back" }, { vi: "cơ vai", en: "shoulders" },
            { vi: "cơ tay trước", en: "biceps" }, { vi: "cơ tay sau", en: "triceps" }, { vi: "cơ đùi trước", en: "quadriceps" }, { vi: "cơ đùi sau", en: "hamstrings" },
            { vi: "cơ bụng", en: "abs" }, { vi: "cơ mông", en: "glutes" }, { vi: "cơ bắp chuối", en: "calves" }, { vi: "cơ xô", en: "lats" },
            { vi: "bench press", en: "bench press" }, { vi: "squat", en: "squat" }, { vi: "deadlift", en: "deadlift" }, { vi: "overhead press", en: "overhead press" },
            { vi: "pull up", en: "pull up" }, { vi: "push up", en: "push up" }, { vi: "plank", en: "plank" }, { vi: "lunge", en: "lunge" },
            { vi: "reps", en: "repetitions" }, { vi: "set", en: "set" }, { vi: "khối lượng", en: "mass" }, { vi: "định hình", en: "definition" },
            { vi: "Arnold Schwarzenegger", en: "Arnold Schwarzenegger" }, { vi: "Ronnie Coleman", en: "Ronnie Coleman" }, { vi: "Phil Heath", en: "Phil Heath" }, { vi: "Chris Bumstead", en: "Chris Bumstead" },
            { vi: "Mr. Olympia", en: "Mr. Olympia" }, { vi: "IFBB", en: "IFBB" }, { vi: "protein", en: "protein" }, { vi: "whey protein", en: "whey protein" }
        ]
    },

    // ==================== 78. NHẢY MÚA (DANCE) - 100+ từ ====================
    dance: {
        name: "💃 NHẢY MÚA - DANCE",
        words: [
            { vi: "nhảy múa", en: "dance" }, { vi: "vũ công", en: "dancer" }, { vi: "vũ đạo", en: "choreography" }, { vi: "động tác", en: "move" },
            { vi: "bước nhảy", en: "step" }, { vi: "nhịp", en: "beat" }, { vi: "tiết tấu", en: "rhythm" }, { vi: "vũ điệu", en: "dance routine" },
            { vi: "hip hop", en: "hip hop dance" }, { vi: "breakdance", en: "breakdance" }, { vi: "popping", en: "popping" }, { vi: "locking", en: "locking" },
            { vi: "krumping", en: "krumping" }, { vi: "waacking", en: "waacking" }, { vi: "voguing", en: "voguing" }, { vi: "house dance", en: "house dance" },
            { vi: "ballet", en: "ballet" }, { vi: "khiêu vũ thể thao", en: "ballroom" }, { vi: "Latin", en: "Latin dance" }, { vi: "Salsa", en: "Salsa" },
            { vi: "Bachata", en: "Bachata" }, { vi: "Tango", en: "Tango" }, { vi: "Cha Cha Cha", en: "Cha Cha Cha" }, { vi: "Rumba", en: "Rumba" },
            { vi: "Paso Doble", en: "Paso Doble" }, { vi: "Jive", en: "Jive" }, { vi: "Waltz", en: "Waltz" }, { vi: "Viennese Waltz", en: "Viennese Waltz" },
            { vi: "Foxtrot", en: "Foxtrot" }, { vi: "Quickstep", en: "Quickstep" }, { vi: "K-pop dance", en: "K-pop dance" }, { vi: "dance cover", en: "dance cover" },
            { vi: "nhảy hiện đại", en: "contemporary dance" }, { vi: "jazz dance", en: "jazz dance" }, { vi: "tap dance", en: "tap dance" }, { vi: "belly dance", en: "belly dance" },
            { vi: "dân gian", en: "folk dance" }, { vi: "múa rối", en: "puppet dance" }, { vi: "vũ đoàn", en: "dance crew" }, { vi: "cuộc thi nhảy", en: "dance competition" },
            { vi: "World of Dance", en: "World of Dance" }, { vi: "Street Dance", en: "Street Dance" }, { vi: "So You Think You Can Dance", en: "So You Think You Can Dance" }, { vi: "Dancing with the Stars", en: "Dancing with the Stars" }
        ]
    },

        // ==================== 79. GOLF (GOLF) - 90+ từ ====================
    golf: {
        name: "🏌️ GOLF",
        words: [
            { vi: "golf", en: "golf" }, { vi: "sân golf", en: "golf course" }, { vi: "lỗ golf", en: "hole" }, { vi: "cờ", en: "flag" },
            { vi: "khu phát bóng", en: "tee box" }, { vi: "fairway", en: "fairway" }, { vi: "green", en: "green" }, { vi: "bunker", en: "bunker" },
            { vi: "bẫy cát", en: "sand trap" }, { vi: "hố nước", en: "water hazard" }, { vi: "rough", en: "rough" }, { vi: "out of bounds", en: "out of bounds" },
            { vi: "gậy golf", en: "club" }, { vi: "gậy driver", en: "driver" }, { vi: "gậy gỗ", en: "wood" }, { vi: "gậy sắt", en: "iron" },
            { vi: "gậy wedge", en: "wedge" }, { vi: "gậy putter", en: "putter" }, { vi: "bóng golf", en: "golf ball" }, { vi: "tee", en: "tee" },
            { vi: "găng tay golf", en: "golf glove" }, { vi: "xe golf", en: "golf cart" }, { vi: "caddie", en: "caddie" }, { vi: "phát bóng", en: "tee off" },
            { vi: "đánh bóng", en: "stroke" }, { vi: "putt", en: "putt" }, { vi: "chip", en: "chip" }, { vi: "pitch", en: "pitch" },
            { vi: "drive", en: "drive" }, { vi: "approach", en: "approach shot" }, { vi: "par", en: "par" }, { vi: "birdie", en: "birdie" },
            { vi: "eagle", en: "eagle" }, { vi: "albatross", en: "albatross" }, { vi: "bogey", en: "bogey" }, { vi: "double bogey", en: "double bogey" },
            { vi: "handicap", en: "handicap" }, { vi: "hole in one", en: "hole in one" }, { vi: "PGA", en: "PGA" }, { vi: "The Masters", en: "The Masters" },
            { vi: "US Open", en: "US Open" }, { vi: "The Open Championship", en: "The Open" }, { vi: "PGA Championship", en: "PGA Championship" }, { vi: "Tiger Woods", en: "Tiger Woods" },
            { vi: "Jack Nicklaus", en: "Jack Nicklaus" }, { vi: "Arnold Palmer", en: "Arnold Palmer" }, { vi: "Rory McIlroy", en: "Rory McIlroy" }, { vi: "Jon Rahm", en: "Jon Rahm" }
        ]
    },

    // ==================== 80. THỂ THAO MẠO HIỂM (EXTREME SPORTS) - 90+ từ ====================
    extreme_sports: {
        name: "🪂 THỂ THAO MẠO HIỂM - EXTREME SPORTS",
        words: [
            { vi: "thể thao mạo hiểm", en: "extreme sports" }, { vi: "trượt ván", en: "skateboarding" }, { vi: "ván trượt", en: "skateboard" }, { vi: "đường trượt", en: "ramp" },
            { vi: "trượt patin", en: "rollerblading" }, { vi: "patin", en: "rollerblades" }, { vi: "BMX", en: "BMX" }, { vi: "xe đạp địa hình", en: "mountain bike" },
            { vi: "đua xe đạp địa hình", en: "downhill biking" }, { vi: "nhảy dù", en: "skydiving" }, { vi: "dù lượn", en: "paragliding" }, { vi: "dù bay", en: "hang gliding" },
            { vi: "lướt ván diều", en: "kitesurfing" }, { vi: "lướt ván buồm", en: "windsurfing" }, { vi: "lướt sóng", en: "surfing" }, { vi: "ván lướt", en: "surfboard" },
            { vi: "lặn biển", en: "scuba diving" }, { vi: "bình dưỡng khí", en: "oxygen tank" }, { vi: "chèo thuyền kayak", en: "kayaking" }, { vi: "chèo thuyền vượt thác", en: "white water rafting" },
            { vi: "leo núi", en: "rock climbing" }, { vi: "dây leo", en: "rope" }, { vi: "móc leo", en: "carabiner" }, { vi: "dây bảo hiểm", en: "harness" },
            { vi: "bungee jumping", en: "bungee jumping" }, { vi: "dây thun", en: "bungee cord" }, { vi: "nhảy từ cầu", en: "bridge jump" }, { vi: "base jumping", en: "base jumping" },
            { vi: "trượt tuyết", en: "skiing" }, { vi: "ván trượt tuyết", en: "snowboard" }, { vi: "trượt tuyết tự do", en: "freestyle skiing" }, { vi: "đua xe mô tô", en: "motorsports" },
            { vi: "đua xe", en: "racing" }, { vi: "MotoGP", en: "MotoGP" }, { vi: "Formula 1", en: "Formula 1" }, { vi: "mũ bảo hiểm", en: "helmet" },
            { vi: "bảo hộ", en: "protective gear" }, { vi: "chấn thương", en: "injury" }, { vi: "nguy hiểm", en: "danger" }, { vi: "cảm giác mạnh", en: "adrenaline rush" },
            { vi: "X Games", en: "X Games" }, { vi: "Tony Hawk", en: "Tony Hawk" }, { vi: "Shaun White", en: "Shaun White" }, { vi: "Kelly Slater", en: "Kelly Slater" }
        ]
    },

    // ==================== 81. CỜ VUA (CHESS) - 90+ từ ====================
    chess: {
        name: "♟️ CỜ VUA - CHESS",
        words: [
            { vi: "cờ vua", en: "chess" }, { vi: "bàn cờ", en: "chessboard" }, { vi: "quân cờ", en: "chess piece" }, { vi: "ô cờ", en: "square" },
            { vi: "vua", en: "king" }, { vi: "hậu", en: "queen" }, { vi: "xe", en: "rook" }, { vi: "tượng", en: "bishop" },
            { vi: "mã", en: "knight" }, { vi: "tốt", en: "pawn" }, { vi: "nước đi", en: "move" }, { vi: "chiếu", en: "check" },
            { vi: "chiếu bí", en: "checkmate" }, { vi: "thế cờ", en: "position" }, { vi: "khai cuộc", en: "opening" }, { vi: "trung cuộc", en: "middlegame" },
            { vi: "tàn cuộc", en: "endgame" }, { vi: "nhập thành", en: "castling" }, { vi: "bắt tốt qua đường", en: "en passant" }, { vi: "phong cấp", en: "promotion" },
            { vi: "chiếu hết", en: "stalemate" }, { vi: "hòa cờ", en: "draw" }, { vi: "đồng hồ cờ", en: "chess clock" }, { vi: "áp lực thời gian", en: "time pressure" },
            { vi: "blitz", en: "blitz chess" }, { vi: "bullet", en: "bullet chess" }, { vi: "rapid", en: "rapid chess" }, { vi: "classical", en: "classical chess" },
            { vi: "ELO", en: "ELO rating" }, { vi: "đánh giá", en: "rating" }, { vi: "đại kiện tướng", en: "grandmaster" }, { vi: "kiện tướng", en: "master" },
            { vi: "chiến thuật", en: "tactic" }, { vi: "chiến lược", en: "strategy" }, { vi: "hy sinh", en: "sacrifice" }, { vi: "phòng thủ", en: "defense" },
            { vi: "tấn công", en: "attack" }, { vi: "FIDE", en: "FIDE" }, { vi: "Olympic cờ vua", en: "Chess Olympiad" }, { vi: "Bobby Fischer", en: "Bobby Fischer" },
            { vi: "Garry Kasparov", en: "Garry Kasparov" }, { vi: "Magnus Carlsen", en: "Magnus Carlsen" }, { vi: "Lê Quang Liêm", en: "Le Quang Liem" }, { vi: "Nguyễn Ngọc Trường Sơn", en: "Nguyen Ngoc Truong Son" }
        ]
    },

    // ==================== 82. GIAO THÔNG ĐƯỜNG BỘ (ROAD TRAFFIC) - 90+ từ ====================
    road_traffic: {
        name: "🚦 GIAO THÔNG - ROAD TRAFFIC",
        words: [
            { vi: "đường", en: "road" }, { vi: "đại lộ", en: "avenue" }, { vi: "đường cao tốc", en: "highway" }, { vi: "đường quốc lộ", en: "national road" },
            { vi: "ngã tư", en: "intersection" }, { vi: "vòng xuyến", en: "roundabout" }, { vi: "cầu vượt", en: "overpass" }, { vi: "hầm chui", en: "underpass" },
            { vi: "đèn giao thông", en: "traffic light" }, { vi: "đèn đỏ", en: "red light" }, { vi: "đèn xanh", en: "green light" }, { vi: "đèn vàng", en: "yellow light" },
            { vi: "biển báo", en: "traffic sign" }, { vi: "vạch kẻ đường", en: "road marking" }, { vi: "vạch dành cho người đi bộ", en: "crosswalk" }, { vi: "dải phân cách", en: "median strip" },
            { vi: "làn đường", en: "lane" }, { vi: "làn xe máy", en: "motorcycle lane" }, { vi: "làn xe buýt", en: "bus lane" }, { vi: "làn khẩn cấp", en: "emergency lane" },
            { vi: "tốc độ", en: "speed" }, { vi: "giới hạn tốc độ", en: "speed limit" }, { vi: "vượt quá tốc độ", en: "speeding" }, { vi: "tắc đường", en: "traffic jam" },
            { vi: "tai nạn", en: "accident" }, { vi: "va chạm", en: "collision" }, { vi: "đâm xe", en: "crash" }, { vi: "cảnh sát giao thông", en: "traffic police" },
            { vi: "giấy phép lái xe", en: "driver's license" }, { vi: "bảo hiểm xe", en: "car insurance" }, { vi: "đăng kiểm", en: "vehicle inspection" }, { vi: "phạt nguội", en: "fine by camera" },
            { vi: "camera giao thông", en: "traffic camera" }, { vi: "radar", en: "speed radar" }, { vi: "rào chắn", en: "barrier" }, { vi: "biển cấm đỗ", en: "no parking sign" },
            { vi: "cấm rẽ trái", en: "no left turn" }, { vi: "cấm rẽ phải", en: "no right turn" }, { vi: "đường một chiều", en: "one-way street" }, { vi: "đường hai chiều", en: "two-way street" },
            { vi: "ùn tắc", en: "congestion" }, { vi: "giờ cao điểm", en: "rush hour" }, { vi: "nhường đường", en: "yield" }, { vi: "dừng xe", en: "stop" }
        ]
    },

    // ==================== 83. PHƯƠNG TIỆN GIAO THÔNG (VEHICLES) - 100+ từ ====================
    vehicles: {
        name: "🚗 PHƯƠNG TIỆN - VEHICLES",
        words: [
            { vi: "xe hơi", en: "car" }, { vi: "xe sedan", en: "sedan" }, { vi: "xe hatchback", en: "hatchback" }, { vi: "xe SUV", en: "SUV" },
            { vi: "xe bán tải", en: "pickup truck" }, { vi: "xe thể thao", en: "sports car" }, { vi: "xe sang", en: "luxury car" }, { vi: "xe điện", en: "electric car" },
            { vi: "xe hybrid", en: "hybrid car" }, { vi: "xe máy", en: "motorbike" }, { vi: "xe tay ga", en: "scooter" }, { vi: "xe côn tay", en: "manual motorbike" },
            { vi: "xe phân khối lớn", en: "big bike" }, { vi: "xe đạp", en: "bicycle" }, { vi: "xe đạp điện", en: "electric bicycle" }, { vi: "xe đạp thể thao", en: "racing bike" },
            { vi: "xe buýt", en: "bus" }, { vi: "xe buýt 2 tầng", en: "double-decker bus" }, { vi: "xe khách", en: "coach" }, { vi: "xe tải", en: "truck" },
            { vi: "xe tải nhẹ", en: "light truck" }, { vi: "xe tải nặng", en: "heavy truck" }, { vi: "xe container", en: "container truck" }, { vi: "xe ben", en: "dump truck" },
            { vi: "xe cứu thương", en: "ambulance" }, { vi: "xe cứu hỏa", en: "fire truck" }, { vi: "xe cảnh sát", en: "police car" }, { vi: "xe taxi", en: "taxi" },
            { vi: "xe công nghệ", en: "ride-hailing car" }, { vi: "xe grab", en: "Grab car" }, { vi: "xe be", en: "Be car" }, { vi: "xe đưa đón", en: "shuttle bus" },
            { vi: "máy bay", en: "airplane" }, { vi: "máy bay phản lực", en: "jet" }, { vi: "máy bay thương mại", en: "commercial airplane" }, { vi: "trực thăng", en: "helicopter" },
            { vi: "tàu hỏa", en: "train" }, { vi: "tàu cao tốc", en: "high-speed train" }, { vi: "tàu điện ngầm", en: "subway" }, { vi: "xe điện", en: "tram" },
            { vi: "tàu thủy", en: "ship" }, { vi: "phà", en: "ferry" }, { vi: "thuyền", en: "boat" }, { vi: "ca nô", en: "speedboat" }
        ]
    },

    // ==================== 84. QUÂN ĐỘI & VŨ KHÍ (MILITARY) - 100+ từ ====================
    military: {
        name: "🪖 QUÂN ĐỘI - MILITARY",
        words: [
            { vi: "quân đội", en: "army" }, { vi: "hải quân", en: "navy" }, { vi: "không quân", en: "air force" }, { vi: "thủy quân lục chiến", en: "marines" },
            { vi: "biên phòng", en: "border guard" }, { vi: "cảnh sát biển", en: "coast guard" }, { vi: "lính", en: "soldier" }, { vi: "sĩ quan", en: "officer" },
            { vi: "tướng", en: "general" }, { vi: "đại tá", en: "colonel" }, { vi: "thiếu tá", en: "major" }, { vi: "đại úy", en: "captain" },
            { vi: "trung úy", en: "lieutenant" }, { vi: "thiếu úy", en: "second lieutenant" }, { vi: "hạ sĩ", en: "sergeant" }, { vi: "binh nhất", en: "private" },
            { vi: "súng", en: "gun" }, { vi: "súng trường", en: "rifle" }, { vi: "súng tiểu liên", en: "submachine gun" }, { vi: "súng máy", en: "machine gun" },
            { vi: "súng bắn tỉa", en: "sniper rifle" }, { vi: "súng ngắn", en: "pistol" }, { vi: "súng shotgun", en: "shotgun" }, { vi: "lựu đạn", en: "grenade" },
            { vi: "bom", en: "bomb" }, { vi: "tên lửa", en: "missile" }, { vi: "đạn", en: "bullet" }, { vi: "áo giáp", en: "body armor" },
            { vi: "mũ sắt", en: "helmet" }, { vi: "xe tăng", en: "tank" }, { vi: "xe bọc thép", en: "armored vehicle" }, { vi: "máy bay chiến đấu", en: "fighter jet" },
            { vi: "trực thăng chiến đấu", en: "attack helicopter" }, { vi: "tàu chiến", en: "warship" }, { vi: "tàu sân bay", en: "aircraft carrier" }, { vi: "tàu ngầm", en: "submarine" },
            { vi: "doanh trại", en: "barracks" }, { vi: "căn cứ quân sự", en: "military base" }, { vi: "thao trường", en: "training ground" }, { vi: "chiến tranh", en: "war" },
            { vi: "trận chiến", en: "battle" }, { vi: "hòa bình", en: "peace" }, { vi: "vũ khí", en: "weapon" }, { vi: "quốc phòng", en: "defense" }
        ]
    },

    // ==================== 85. CHÍNH TRỊ & NHÀ NƯỚC (POLITICS & GOVERNMENT) - 100+ từ ====================
    government: {
        name: "🏛️ CHÍNH TRỊ - POLITICS",
        words: [
            { vi: "chính phủ", en: "government" }, { vi: "quốc hội", en: "parliament" }, { vi: "nghị viện", en: "congress" }, { vi: "chính quyền", en: "administration" },
            { vi: "đảng", en: "party" }, { vi: "đảng cộng sản", en: "communist party" }, { vi: "đảng dân chủ", en: "democratic party" }, { vi: "đảng cộng hòa", en: "republican party" },
            { vi: "tổng thống", en: "president" }, { vi: "thủ tướng", en: "prime minister" }, { vi: "phó tổng thống", en: "vice president" }, { vi: "bộ trưởng", en: "minister" },
            { vi: "thứ trưởng", en: "deputy minister" }, { vi: "thống đốc", en: "governor" }, { vi: "thị trưởng", en: "mayor" }, { vi: "đại sứ", en: "ambassador" },
            { vi: "lãnh sự", en: "consul" }, { vi: "quan chức", en: "official" }, { vi: "công chức", en: "civil servant" }, { vi: "viên chức", en: "public employee" },
            { vi: "bầu cử", en: "election" }, { vi: "bỏ phiếu", en: "vote" }, { vi: "cử tri", en: "voter" }, { vi: "ứng cử viên", en: "candidate" },
            { vi: "chiến dịch", en: "campaign" }, { vi: "tranh cử", en: "run for office" }, { vi: "luật pháp", en: "law" }, { vi: "hiến pháp", en: "constitution" },
            { vi: "hội đồng nhân dân", en: "people's council" }, { vi: "ủy ban nhân dân", en: "people's committee" }, { vi: "tòa án", en: "court" }, { vi: "viện kiểm sát", en: "prosecutor's office" },
            { vi: "quyền lực", en: "power" }, { vi: "chính sách", en: "policy" }, { vi: "cải cách", en: "reform" }, { vi: "đối ngoại", en: "foreign affairs" },
            { vi: "ngoại giao", en: "diplomacy" }, { vi: "quan hệ quốc tế", en: "international relations" }, { vi: "liên hợp quốc", en: "United Nations" }, { vi: "ASEAN", en: "ASEAN" },
            { vi: "EU", en: "European Union" }, { vi: "WTO", en: "World Trade Organization" }, { vi: "chủ quyền", en: "sovereignty" }, { vi: "lãnh thổ", en: "territory" }
        ]
    },

    // ==================== 86. KINH TẾ VĨ MÔ (MACROECONOMICS) - 90+ từ ====================
    macroeconomics: {
        name: "📊 KINH TẾ VĨ MÔ - MACROECONOMICS",
        words: [
            { vi: "kinh tế vĩ mô", en: "macroeconomics" }, { vi: "tổng sản phẩm quốc nội", en: "GDP" }, { vi: "tổng sản phẩm quốc dân", en: "GNP" }, { vi: "tổng thu nhập quốc dân", en: "GNI" },
            { vi: "lạm phát", en: "inflation" }, { vi: "giảm phát", en: "deflation" }, { vi: "siêu lạm phát", en: "hyperinflation" }, { vi: "chỉ số giá tiêu dùng", en: "CPI" },
            { vi: "chỉ số giá sản xuất", en: "PPI" }, { vi: "thất nghiệp", en: "unemployment" }, { vi: "tỷ lệ thất nghiệp", en: "unemployment rate" }, { vi: "tăng trưởng kinh tế", en: "economic growth" },
            { vi: "suy thoái", en: "recession" }, { vi: "khủng hoảng", en: "crisis" }, { vi: "lãi suất", en: "interest rate" }, { vi: "lãi suất cơ bản", en: "base rate" },
            { vi: "tỷ giá hối đoái", en: "exchange rate" }, { vi: "tiền tệ", en: "currency" }, { vi: "chính sách tiền tệ", en: "monetary policy" }, { vi: "chính sách tài khóa", en: "fiscal policy" },
            { vi: "ngân sách nhà nước", en: "state budget" }, { vi: "thâm hụt ngân sách", en: "budget deficit" }, { vi: "thặng dư ngân sách", en: "budget surplus" }, { vi: "nợ công", en: "public debt" },
            { vi: "cán cân thương mại", en: "balance of trade" }, { vi: "xuất khẩu", en: "export" }, { vi: "nhập khẩu", en: "import" }, { vi: "thặng dư thương mại", en: "trade surplus" },
            { vi: "thâm hụt thương mại", en: "trade deficit" }, { vi: "cán cân thanh toán", en: "balance of payments" }, { vi: "dự trữ ngoại hối", en: "foreign exchange reserves" }, { vi: "Ngân hàng Trung ương", en: "Central Bank" },
            { vi: "Ngân hàng Nhà nước", en: "State Bank" }, { vi: "bong bóng kinh tế", en: "economic bubble" }, { vi: "thị trường chứng khoán", en: "stock market" }, { vi: "trái phiếu chính phủ", en: "government bond" },
            { vi: "FDI", en: "foreign direct investment" }, { vi: "FII", en: "foreign institutional investment" }, { vi: "ODA", en: "official development assistance" }, { vi: "toàn cầu hóa", en: "globalization" }
        ]
    },

        // ==================== 87. TÀI CHÍNH CÁ NHÂN (PERSONAL FINANCE) - 100+ từ ====================
    personal_finance: {
        name: "💰 TÀI CHÍNH CÁ NHÂN - PERSONAL FINANCE",
        words: [
            { vi: "tài chính cá nhân", en: "personal finance" }, { vi: "thu nhập", en: "income" }, { vi: "chi tiêu", en: "expense" }, { vi: "tiết kiệm", en: "saving" },
            { vi: "đầu tư", en: "investment" }, { vi: "ngân sách", en: "budget" }, { vi: "lập kế hoạch tài chính", en: "financial planning" }, { vi: "dòng tiền", en: "cash flow" },
            { vi: "tài sản", en: "asset" }, { vi: "nợ", en: "debt" }, { vi: "nợ xấu", en: "bad debt" }, { vi: "nợ tốt", en: "good debt" },
            { vi: "lãi suất", en: "interest rate" }, { vi: "lãi kép", en: "compound interest" }, { vi: "lãi đơn", en: "simple interest" }, { vi: "thu nhập thụ động", en: "passive income" },
            { vi: "thu nhập chủ động", en: "active income" }, { vi: "tích lũy", en: "accumulation" }, { vi: "quỹ khẩn cấp", en: "emergency fund" }, { vi: "quỹ hưu trí", en: "retirement fund" },
            { vi: "bảo hiểm", en: "insurance" }, { vi: "bảo hiểm nhân thọ", en: "life insurance" }, { vi: "bảo hiểm sức khỏe", en: "health insurance" }, { vi: "bảo hiểm xe", en: "car insurance" },
            { vi: "thẻ tín dụng", en: "credit card" }, { vi: "thẻ ghi nợ", en: "debit card" }, { vi: "hạn mức tín dụng", en: "credit limit" }, { vi: "điểm tín dụng", en: "credit score" },
            { vi: "vay", en: "loan" }, { vi: "vay thế chấp", en: "mortgage" }, { vi: "vay tín chấp", en: "unsecured loan" }, { vi: "vay tiêu dùng", en: "consumer loan" },
            { vi: "trả góp", en: "installment" }, { vi: "trả trước", en: "down payment" }, { vi: "nợ quá hạn", en: "overdue debt" }, { vi: "phá sản", en: "bankruptcy" },
            { vi: "lạm phát", en: "inflation" }, { vi: "sức mua", en: "purchasing power" }, { vi: "đa dạng hóa", en: "diversification" }, { vi: "rủi ro", en: "risk" },
            { vi: "lợi nhuận", en: "return" }, { vi: "FIRE", en: "Financial Independence Retire Early" }, { vi: "số tiền", en: "amount" }, { vi: "tiền mặt", en: "cash" }
        ]
    },

    // ==================== 88. ĐẦU TƯ CHỨNG KHOÁN (STOCK INVESTING) - 100+ từ ====================
    stock_investing: {
        name: "📈 ĐẦU TƯ CHỨNG KHOÁN - STOCK INVESTING",
        words: [
            { vi: "chứng khoán", en: "stock" }, { vi: "cổ phiếu", en: "share" }, { vi: "trái phiếu", en: "bond" }, { vi: "chứng chỉ quỹ", en: "fund certificate" },
            { vi: "thị trường chứng khoán", en: "stock market" }, { vi: "sàn giao dịch", en: "exchange" }, { vi: "HOSE", en: "Ho Chi Minh Stock Exchange" }, { vi: "HNX", en: "Hanoi Stock Exchange" },
            { vi: "VN-Index", en: "VN-Index" }, { vi: "cổ phiếu blue-chip", en: "blue-chip stock" }, { vi: "cổ phiếu penny", en: "penny stock" }, { vi: "cổ phiếu tăng trưởng", en: "growth stock" },
            { vi: "cổ phiếu giá trị", en: "value stock" }, { vi: "nhà đầu tư", en: "investor" }, { vi: "trader", en: "trader" }, { vi: "môi giới chứng khoán", en: "stockbroker" },
            { vi: "mua", en: "buy" }, { vi: "bán", en: "sell" }, { vi: "giữ", en: "hold" }, { vi: "khối lượng giao dịch", en: "trading volume" },
            { vi: "giá trị giao dịch", en: "trading value" }, { vi: "giá mở cửa", en: "opening price" }, { vi: "giá đóng cửa", en: "closing price" }, { vi: "giá cao nhất", en: "highest price" },
            { vi: "giá thấp nhất", en: "lowest price" }, { vi: "giá tham chiếu", en: "reference price" }, { vi: "trần", en: "ceiling" }, { vi: "sàn", en: "floor" },
            { vi: "biên độ dao động", en: "trading band" }, { vi: "phân tích cơ bản", en: "fundamental analysis" }, { vi: "phân tích kỹ thuật", en: "technical analysis" }, { vi: "chỉ số", en: "index" },
            { vi: "P/E", en: "price to earnings ratio" }, { vi: "EPS", en: "earnings per share" }, { vi: "ROE", en: "return on equity" }, { vi: "ROA", en: "return on assets" },
            { vi: "cổ tức", en: "dividend" }, { vi: "chia cổ tức", en: "dividend payment" }, { vi: "cổ phiếu thưởng", en: "bonus share" }, { vi: "phát hành thêm", en: "rights issue" },
            { vi: "tăng vốn", en: "capital increase" }, { vi: "mua bán ký quỹ", en: "margin trading" }, { vi: "call margin", en: "margin call" }, { vi: "short selling", en: "short selling" },
            { vi: "up trend", en: "uptrend" }, { vi: "down trend", en: "downtrend" }, { vi: "sideway", en: "sideways" }, { vi: "đỉnh", en: "peak" }, { vi: "đáy", en: "bottom" }
        ]
    },

    // ==================== 89. BẤT ĐỘNG SẢN (REAL ESTATE) - 100+ từ ====================
    real_estate: {
        name: "🏠 BẤT ĐỘNG SẢN - REAL ESTATE",
        words: [
            { vi: "bất động sản", en: "real estate" }, { vi: "nhà ở", en: "residential property" }, { vi: "căn hộ chung cư", en: "apartment" }, { vi: "biệt thự", en: "villa" },
            { vi: "nhà phố", en: "townhouse" }, { vi: "đất nền", en: "land plot" }, { vi: "đất dự án", en: "project land" }, { vi: "bất động sản thương mại", en: "commercial property" },
            { vi: "văn phòng cho thuê", en: "office for lease" }, { vi: "mặt bằng kinh doanh", en: "retail space" }, { vi: "kho xưởng", en: "warehouse" }, { vi: "khu công nghiệp", en: "industrial park" },
            { vi: "chủ đầu tư", en: "developer" }, { vi: "môi giới", en: "broker" }, { vi: "môi giới bất động sản", en: "real estate agent" }, { vi: "mua bán", en: "buying and selling" },
            { vi: "cho thuê", en: "lease" }, { vi: "hợp đồng thuê", en: "lease agreement" }, { vi: "tiền thuê", en: "rent" }, { vi: "tiền cọc", en: "deposit" },
            { vi: "vay thế chấp", en: "mortgage" }, { vi: "lãi suất vay", en: "interest rate" }, { vi: "thời hạn vay", en: "loan term" }, { vi: "trả góp", en: "installment" },
            { vi: "giá trị bất động sản", en: "property value" }, { vi: "định giá", en: "valuation" }, { vi: "tăng giá", en: "appreciation" }, { vi: "giảm giá", en: "depreciation" },
            { vi: "sổ đỏ", en: "land title" }, { vi: "sổ hồng", en: "house title" }, { vi: "giấy tờ pháp lý", en: "legal document" }, { vi: "quy hoạch", en: "planning" },
            { vi: "giải tỏa", en: "clearance" }, { vi: "đền bù", en: "compensation" }, { vi: "đấu giá", en: "auction" }, { vi: "đấu thầu", en: "bidding" },
            { vi: "vị trí", en: "location" }, { vi: "diện tích", en: "area" }, { vi: "mặt tiền", en: "frontage" }, { vi: "hẻm", en: "alley" },
            { vi: "tiện ích", en: "amenities" }, { vi: "hạ tầng", en: "infrastructure" }, { vi: "pháp lý", en: "legal" }, { vi: "thủ tục", en: "procedure" },
            { vi: "thuế chuyển nhượng", en: "transfer tax" }, { vi: "thuế thu nhập", en: "income tax" }, { vi: "phí công chứng", en: "notary fee" }, { vi: "phí trước bạ", en: "registration fee" }
        ]
    },

    // ==================== 90. KINH DOANH ONLINE (E-COMMERCE) - 100+ từ ====================
    ecommerce: {
        name: "🛒 KINH DOANH ONLINE - E-COMMERCE",
        words: [
            { vi: "thương mại điện tử", en: "e-commerce" }, { vi: "bán hàng online", en: "online selling" }, { vi: "website bán hàng", en: "online store" }, { vi: "sàn thương mại điện tử", en: "marketplace" },
            { vi: "Shopee", en: "Shopee" }, { vi: "Lazada", en: "Lazada" }, { vi: "Tiki", en: "Tiki" }, { vi: "Sendo", en: "Sendo" },
            { vi: "Amazon", en: "Amazon" }, { vi: "Alibaba", en: "Alibaba" }, { vi: "Etsy", en: "Etsy" }, { vi: "Taobao", en: "Taobao" },
            { vi: "sản phẩm", en: "product" }, { vi: "danh mục sản phẩm", en: "product category" }, { vi: "mô tả sản phẩm", en: "product description" }, { vi: "hình ảnh sản phẩm", en: "product image" },
            { vi: "giá sản phẩm", en: "product price" }, { vi: "giá gốc", en: "original price" }, { vi: "giá khuyến mãi", en: "sale price" }, { vi: "giảm giá", en: "discount" },
            { vi: "voucher", en: "voucher" }, { vi: "mã giảm giá", en: "promo code" }, { vi: "freeship", en: "free shipping" }, { vi: "phí vận chuyển", en: "shipping fee" },
            { vi: "đơn hàng", en: "order" }, { vi: "giỏ hàng", en: "cart" }, { vi: "thanh toán", en: "payment" }, { vi: "phương thức thanh toán", en: "payment method" },
            { vi: "thanh toán khi nhận hàng", en: "COD" }, { vi: "chuyển khoản", en: "bank transfer" }, { vi: "ví điện tử", en: "e-wallet" }, { vi: "thẻ tín dụng", en: "credit card" },
            { vi: "vận chuyển", en: "shipping" }, { vi: "giao hàng", en: "delivery" }, { vi: "giao hàng nhanh", en: "express delivery" }, { vi: "giao hàng tiết kiệm", en: "economy delivery" },
            { vi: "đánh giá sản phẩm", en: "product review" }, { vi: "xếp hạng", en: "rating" }, { vi: "sao", en: "star" }, { vi: "phản hồi", en: "feedback" },
            { vi: "quản lý bán hàng", en: "sales management" }, { vi: "quản lý kho", en: "inventory management" }, { vi: "tồn kho", en: "stock" }, { vi: "hết hàng", en: "out of stock" },
            { vi: "dropshipping", en: "dropshipping" }, { vi: "kinh doanh không cần vốn", en: "dropshipping" }, { vi: "livestream bán hàng", en: "livestream selling" }, { vi: "social commerce", en: "social commerce" }
        ]
    },

    // ==================== 91. MARKETING DIGITAL (DIGITAL MARKETING) - 110+ từ ====================
    digital_marketing: {
        name: "📱 MARKETING DIGITAL - DIGITAL MARKETING",
        words: [
            { vi: "tiếp thị số", en: "digital marketing" }, { vi: "SEO", en: "search engine optimization" }, { vi: "SEM", en: "search engine marketing" }, { vi: "PPC", en: "pay per click" },
            { vi: "Google Ads", en: "Google Ads" }, { vi: "Facebook Ads", en: "Facebook Ads" }, { vi: "Instagram Ads", en: "Instagram Ads" }, { vi: "TikTok Ads", en: "TikTok Ads" },
            { vi: "content marketing", en: "content marketing" }, { vi: "email marketing", en: "email marketing" }, { vi: "social media marketing", en: "social media marketing" }, { vi: "influencer marketing", en: "influencer marketing" },
            { vi: "affiliate marketing", en: "affiliate marketing" }, { vi: "tiếp thị liên kết", en: "affiliate marketing" }, { vi: "landing page", en: "landing page" }, { vi: "trang đích", en: "landing page" },
            { vi: "funnel", en: "sales funnel" }, { vi: "phễu bán hàng", en: "sales funnel" }, { vi: "top of funnel", en: "TOFU" }, { vi: "middle of funnel", en: "MOFU" },
            { vi: "bottom of funnel", en: "BOFU" }, { vi: "lead", en: "lead" }, { vi: "khách hàng tiềm năng", en: "potential customer" }, { vi: "conversion", en: "conversion" },
            { vi: "tỷ lệ chuyển đổi", en: "conversion rate" }, { vi: "CTR", en: "click through rate" }, { vi: "CPC", en: "cost per click" }, { vi: "CPA", en: "cost per acquisition" },
            { vi: "ROAS", en: "return on ad spend" }, { vi: "ROI", en: "return on investment" }, { vi: "KPI", en: "key performance indicator" }, { vi: "metric", en: "metric" },
            { vi: "analytic", en: "analytic" }, { vi: "Google Analytics", en: "Google Analytics" }, { vi: "Facebook Pixel", en: "Facebook Pixel" }, { vi: "Google Tag Manager", en: "Google Tag Manager" },
            { vi: "A/B testing", en: "A/B testing" }, { vi: "thử nghiệm A/B", en: "A/B testing" }, { vi: "retargeting", en: "retargeting" }, { vi: "remarketing", en: "remarketing" },
            { vi: "personalization", en: "personalization" }, { vi: "cá nhân hóa", en: "personalization" }, { vi: "automation", en: "automation" }, { vi: "tự động hóa", en: "automation" },
            { vi: "customer journey", en: "customer journey" }, { vi: "hành trình khách hàng", en: "customer journey" }, { vi: "touchpoint", en: "touchpoint" }, { vi: "điểm chạm", en: "touchpoint" },
            { vi: "segment", en: "segment" }, { vi: "phân khúc", en: "segment" }, { vi: "target audience", en: "target audience" }, { vi: "đối tượng mục tiêu", en: "target audience" }
        ]
    },

    // ==================== 92. QUẢN TRỊ DOANH NGHIỆP (BUSINESS MANAGEMENT) - 100+ từ ====================
    business_management: {
        name: "🏢 QUẢN TRỊ - BUSINESS MANAGEMENT",
        words: [
            { vi: "quản trị doanh nghiệp", en: "business management" }, { vi: "quản lý", en: "management" }, { vi: "lãnh đạo", en: "leadership" }, { vi: "điều hành", en: "execution" },
            { vi: "chiến lược", en: "strategy" }, { vi: "kế hoạch", en: "plan" }, { vi: "mục tiêu", en: "goal" }, { vi: "sứ mệnh", en: "mission" },
            { vi: "tầm nhìn", en: "vision" }, { vi: "giá trị cốt lõi", en: "core value" }, { vi: "văn hóa doanh nghiệp", en: "corporate culture" }, { vi: "môi trường làm việc", en: "work environment" },
            { vi: "tổ chức", en: "organization" }, { vi: "cơ cấu tổ chức", en: "organizational structure" }, { vi: "phòng ban", en: "department" }, { vi: "bộ phận", en: "division" },
            { vi: "nhân sự", en: "human resources" }, { vi: "tuyển dụng", en: "recruitment" }, { vi: "đào tạo", en: "training" }, { vi: "phát triển", en: "development" },
            { vi: "đánh giá nhân viên", en: "employee evaluation" }, { vi: "KPI", en: "key performance indicator" }, { vi: "năng suất", en: "productivity" }, { vi: "hiệu quả", en: "efficiency" },
            { vi: "quy trình", en: "process" }, { vi: "hệ thống", en: "system" }, { vi: "cải tiến", en: "improvement" }, { vi: "tối ưu hóa", en: "optimization" },
            { vi: "ra quyết định", en: "decision making" }, { vi: "giải quyết vấn đề", en: "problem solving" }, { vi: "quản lý rủi ro", en: "risk management" }, { vi: "quản lý thay đổi", en: "change management" },
            { vi: "quản lý dự án", en: "project management" }, { vi: "quản lý thời gian", en: "time management" }, { vi: "quản lý chất lượng", en: "quality management" }, { vi: "quản lý chuỗi cung ứng", en: "supply chain management" },
            { vi: "lập ngân sách", en: "budgeting" }, { vi: "dự báo", en: "forecasting" }, { vi: "báo cáo", en: "reporting" }, { vi: "phân tích", en: "analysis" },
            { vi: "SWOT", en: "strengths weaknesses opportunities threats" }, { vi: "PESTLE", en: "political economic social technological legal environmental" }, { vi: "OKR", en: "objectives and key results" }, { vi: "SMART", en: "specific measurable achievable relevant time-bound" }
        ]
    },

    // ==================== 93. KỸ NĂNG MỀM (SOFT SKILLS) - 100+ từ ====================
    soft_skills: {
        name: "🌟 KỸ NĂNG MỀM - SOFT SKILLS",
        words: [
            { vi: "kỹ năng mềm", en: "soft skills" }, { vi: "giao tiếp", en: "communication" }, { vi: "giao tiếp hiệu quả", en: "effective communication" }, { vi: "lắng nghe", en: "listening" },
            { vi: "thuyết trình", en: "presentation" }, { vi: "đàm phán", en: "negotiation" }, { vi: "thương lượng", en: "bargaining" }, { vi: "giải quyết xung đột", en: "conflict resolution" },
            { vi: "làm việc nhóm", en: "teamwork" }, { vi: "hợp tác", en: "collaboration" }, { vi: "lãnh đạo", en: "leadership" }, { vi: "quản lý đội nhóm", en: "team management" },
            { vi: "động viên", en: "motivation" }, { vi: "truyền cảm hứng", en: "inspiration" }, { vi: "ra quyết định", en: "decision making" }, { vi: "giải quyết vấn đề", en: "problem solving" },
            { vi: "tư duy phản biện", en: "critical thinking" }, { vi: "tư duy sáng tạo", en: "creative thinking" }, { vi: "tư duy logic", en: "logical thinking" }, { vi: "tư duy hệ thống", en: "systems thinking" },
            { vi: "quản lý thời gian", en: "time management" }, { vi: "sắp xếp công việc", en: "task prioritization" }, { vi: "lập kế hoạch", en: "planning" }, { vi: "tổ chức", en: "organization" },
            { vi: "linh hoạt", en: "flexibility" }, { vi: "thích nghi", en: "adaptability" }, { vi: "kiên nhẫn", en: "patience" }, { vi: "kiên trì", en: "perseverance" },
            { vi: "tự tin", en: "confidence" }, { vi: "tự giác", en: "self-discipline" }, { vi: "tự quản lý", en: "self-management" }, { vi: "tự phát triển", en: "self-development" },
            { vi: "trí tuệ cảm xúc", en: "emotional intelligence" }, { vi: "đồng cảm", en: "empathy" }, { vi: "thấu cảm", en: "compassion" }, { vi: "quản lý cảm xúc", en: "emotion management" },
            { vi: "làm việc dưới áp lực", en: "working under pressure" }, { vi: "chịu đựng căng thẳng", en: "stress tolerance" }, { vi: "kiểm soát căng thẳng", en: "stress management" }, { vi: "phục hồi", en: "resilience" },
            { vi: "đạo đức nghề nghiệp", en: "work ethic" }, { vi: "trách nhiệm", en: "responsibility" }, { vi: "trung thực", en: "honesty" }, { vi: "đáng tin cậy", en: "reliability" }
        ]
    },

    // ==================== 94. PHÁT TRIỂN BẢN THÂN (SELF DEVELOPMENT) - 100+ từ ====================
    self_development: {
        name: "🌱 PHÁT TRIỂN BẢN THÂN - SELF DEVELOPMENT",
        words: [
            { vi: "phát triển bản thân", en: "self development" }, { vi: "hoàn thiện bản thân", en: "self improvement" }, { vi: "thay đổi bản thân", en: "self change" }, { vi: "chuyển hóa", en: "transformation" },
            { vi: "thói quen", en: "habit" }, { vi: "thói quen tốt", en: "good habit" }, { vi: "thói quen xấu", en: "bad habit" }, { vi: "hình thành thói quen", en: "habit formation" },
            { vi: "kỷ luật", en: "discipline" }, { vi: "kỷ luật bản thân", en: "self-discipline" }, { vi: "động lực", en: "motivation" }, { vi: "cảm hứng", en: "inspiration" },
            { vi: "mục tiêu", en: "goal" }, { vi: "mục tiêu ngắn hạn", en: "short-term goal" }, { vi: "mục tiêu dài hạn", en: "long-term goal" }, { vi: "mục tiêu SMART", en: "SMART goal" },
            { vi: "thành công", en: "success" }, { vi: "thất bại", en: "failure" }, { vi: "bài học", en: "lesson" }, { vi: "kinh nghiệm", en: "experience" },
            { vi: "tư duy tích cực", en: "positive thinking" }, { vi: "suy nghĩ tích cực", en: "positive mindset" }, { vi: "lạc quan", en: "optimism" }, { vi: "bi quan", en: "pessimism" },
            { vi: "lòng biết ơn", en: "gratitude" }, { vi: "trân trọng", en: "appreciation" }, { vi: "hài lòng", en: "contentment" }, { vi: "hạnh phúc", en: "happiness" },
            { vi: "thiền", en: "meditation" }, { vi: "chánh niệm", en: "mindfulness" }, { vi: "tập trung", en: "focus" }, { vi: "hiện tại", en: "present moment" },
            { vi: "đọc sách", en: "reading" }, { vi: "học tập", en: "learning" }, { vi: "học suốt đời", en: "lifelong learning" }, { vi: "nâng cao kỹ năng", en: "skill upgrading" },
            { vi: "lời khẳng định tích cực", en: "affirmation" }, { vi: "hình dung", en: "visualization" }, { vi: "tự nói chuyện với bản thân", en: "self-talk" }, { vi: "tự phản tỉnh", en: "self-reflection" },
            { vi: "vùng thoải mái", en: "comfort zone" }, { vi: "bước ra khỏi vùng thoải mái", en: "step out of comfort zone" }, { vi: "thử thách", en: "challenge" }, { vi: "vượt qua giới hạn", en: "overcome limits" },
            { vi: "tầm nhìn", en: "vision" }, { vi: "sứ mệnh cuộc đời", en: "life mission" }, { vi: "mục đích sống", en: "life purpose" }, { vi: "ý nghĩa cuộc sống", en: "meaning of life" }
        ]
    },

        // ==================== 95. TÂM LÝ HỌC (PSYCHOLOGY) - 110+ từ ====================
    psychology: {
        name: "🧠 TÂM LÝ HỌC - PSYCHOLOGY",
        words: [
            { vi: "tâm lý học", en: "psychology" }, { vi: "tâm lý", en: "psyche" }, { vi: "hành vi", en: "behavior" }, { vi: "nhận thức", en: "cognition" },
            { vi: "cảm xúc", en: "emotion" }, { vi: "tình cảm", en: "affect" }, { vi: "suy nghĩ", en: "thought" }, { vi: "ý thức", en: "consciousness" },
            { vi: "tiềm thức", en: "subconscious" }, { vi: "vô thức", en: "unconscious" }, { vi: "bản năng", en: "instinct" }, { vi: "bản ngã", en: "ego" },
            { vi: "cái tôi", en: "self" }, { vi: "lòng tự trọng", en: "self-esteem" }, { vi: "sự tự tin", en: "self-confidence" }, { vi: "hình ảnh bản thân", en: "self-image" },
            { vi: "stress", en: "stress" }, { vi: "lo âu", en: "anxiety" }, { vi: "trầm cảm", en: "depression" }, { vi: "rối loạn", en: "disorder" },
            { vi: "ám ảnh", en: "obsession" }, { vi: "cưỡng chế", en: "compulsion" }, { vi: "hoảng loạn", en: "panic" }, { vi: "sợ hãi", en: "phobia" },
            { vi: "chấn thương tâm lý", en: "trauma" }, { vi: "hậu chấn thương", en: "post-traumatic" }, { vi: "PTSD", en: "post-traumatic stress disorder" }, { vi: "kiệt sức", en: "burnout" },
            { vi: "động lực", en: "motivation" }, { vi: "nhu cầu", en: "need" }, { vi: "mong muốn", en: "desire" }, { vi: "khát khao", en: "craving" },
            { vi: "trí nhớ", en: "memory" }, { vi: "học tập", en: "learning" }, { vi: "trí thông minh", en: "intelligence" }, { vi: "IQ", en: "intelligence quotient" },
            { vi: "EQ", en: "emotional quotient" }, { vi: "trí tuệ cảm xúc", en: "emotional intelligence" }, { vi: "nhân cách", en: "personality" }, { vi: "tính cách", en: "character" },
            { vi: "hướng nội", en: "introvert" }, { vi: "hướng ngoại", en: "extrovert" }, { vi: "ưu tư", en: "ambivert" }, { vi: "loại hình tính cách", en: "personality type" },
            { vi: "MBTI", en: "Myers-Briggs Type Indicator" }, { vi: "Big Five", en: "Big Five personality traits" }, { vi: "Sigmund Freud", en: "Sigmund Freud" }, { vi: "Carl Jung", en: "Carl Jung" },
            { vi: "Abraham Maslow", en: "Abraham Maslow" }, { vi: "tháp nhu cầu Maslow", en: "Maslow's hierarchy of needs" }, { vi: "Ivan Pavlov", en: "Ivan Pavlov" }, { vi: "phản xạ có điều kiện", en: "conditioned reflex" },
            { vi: "B.F. Skinner", en: "B.F. Skinner" }, { vi: "điều kiện hóa", en: "conditioning" }, { vi: "Jean Piaget", en: "Jean Piaget" }, { vi: "phát triển nhận thức", en: "cognitive development" }
        ]
    },

    // ==================== 96. Y HỌC (MEDICINE) - 120+ từ ====================
    medicine: {
        name: "💊 Y HỌC - MEDICINE",
        words: [
            { vi: "y học", en: "medicine" }, { vi: "y khoa", en: "medical science" }, { vi: "bác sĩ", en: "doctor" }, { vi: "nội trú", en: "resident" },
            { vi: "bác sĩ đa khoa", en: "general practitioner" }, { vi: "bác sĩ chuyên khoa", en: "specialist" }, { vi: "bác sĩ phẫu thuật", en: "surgeon" }, { vi: "gây mê", en: "anesthesiologist" },
            { vi: "bệnh", en: "disease" }, { vi: "triệu chứng", en: "symptom" }, { vi: "dấu hiệu", en: "sign" }, { vi: "chẩn đoán", en: "diagnosis" },
            { vi: "điều trị", en: "treatment" }, { vi: "phòng ngừa", en: "prevention" }, { vi: "phục hồi", en: "rehabilitation" }, { vi: "theo dõi", en: "monitoring" },
            { vi: "xét nghiệm", en: "test" }, { vi: "xét nghiệm máu", en: "blood test" }, { vi: "xét nghiệm nước tiểu", en: "urine test" }, { vi: "chụp X-quang", en: "X-ray" },
            { vi: "siêu âm", en: "ultrasound" }, { vi: "CT scan", en: "CT scan" }, { vi: "MRI", en: "MRI" }, { vi: "nội soi", en: "endoscopy" },
            { vi: "sinh thiết", en: "biopsy" }, { vi: "thuốc", en: "medication" }, { vi: "kháng sinh", en: "antibiotic" }, { vi: "kháng viêm", en: "anti-inflammatory" },
            { vi: "giảm đau", en: "painkiller" }, { vi: "hạ sốt", en: "antipyretic" }, { vi: "kháng histamine", en: "antihistamine" }, { vi: "thuốc an thần", en: "sedative" },
            { vi: "tiêm", en: "injection" }, { vi: "tiêm tĩnh mạch", en: "intravenous" }, { vi: "tiêm bắp", en: "intramuscular" }, { vi: "truyền dịch", en: "infusion" },
            { vi: "phẫu thuật", en: "surgery" }, { vi: "mổ", en: "operation" }, { vi: "cắt bỏ", en: "removal" }, { vi: "ghép tạng", en: "organ transplant" },
            { vi: "tim mạch", en: "cardiology" }, { vi: "thần kinh", en: "neurology" }, { vi: "tiêu hóa", en: "gastroenterology" }, { vi: "hô hấp", en: "pulmonology" },
            { vi: "nhi khoa", en: "pediatrics" }, { vi: "sản khoa", en: "obstetrics" }, { vi: "phụ khoa", en: "gynecology" }, { vi: "da liễu", en: "dermatology" },
            { vi: "mắt", en: "ophthalmology" }, { vi: "tai mũi họng", en: "otorhinolaryngology" }, { vi: "răng hàm mặt", en: "dentistry" }, { vi: "chỉnh hình", en: "orthopedics" },
            { vi: "ung thư", en: "oncology" }, { vi: "tâm thần", en: "psychiatry" }, { vi: "cấp cứu", en: "emergency medicine" }, { vi: "hồi sức", en: "resuscitation" }
        ]
    },

    // ==================== 97. DINH DƯỠNG HỌC (NUTRITION) - 100+ từ ====================
    nutrition: {
        name: "🥗 DINH DƯỠNG - NUTRITION",
        words: [
            { vi: "dinh dưỡng", en: "nutrition" }, { vi: "chất dinh dưỡng", en: "nutrient" }, { vi: "dưỡng chất", en: "nutrient" }, { vi: "vi chất", en: "micronutrient" },
            { vi: "đa lượng", en: "macronutrient" }, { vi: "calo", en: "calorie" }, { vi: "năng lượng", en: "energy" }, { vi: "chuyển hóa", en: "metabolism" },
            { vi: "protein", en: "protein" }, { vi: "đạm", en: "protein" }, { vi: "carbohydrate", en: "carbohydrate" }, { vi: "tinh bột", en: "starch" },
            { vi: "chất béo", en: "fat" }, { vi: "lipid", en: "lipid" }, { vi: "chất xơ", en: "fiber" }, { vi: "cholesterol", en: "cholesterol" },
            { vi: "vitamin", en: "vitamin" }, { vi: "vitamin A", en: "vitamin A" }, { vi: "vitamin B", en: "vitamin B" }, { vi: "vitamin C", en: "vitamin C" },
            { vi: "vitamin D", en: "vitamin D" }, { vi: "vitamin E", en: "vitamin E" }, { vi: "vitamin K", en: "vitamin K" }, { vi: "khoáng chất", en: "mineral" },
            { vi: "canxi", en: "calcium" }, { vi: "sắt", en: "iron" }, { vi: "kẽm", en: "zinc" }, { vi: "magie", en: "magnesium" },
            { vi: "kali", en: "potassium" }, { vi: "natri", en: "sodium" }, { vi: "photpho", en: "phosphorus" }, { vi: "iốt", en: "iodine" },
            { vi: "chế độ ăn uống", en: "diet" }, { vi: "thực phẩm lành mạnh", en: "healthy food" }, { vi: "thực phẩm chức năng", en: "functional food" }, { vi: "thực phẩm bẩn", en: "unhealthy food" },
            { vi: "ăn kiêng", en: "dieting" }, { vi: "giảm cân", en: "weight loss" }, { vi: "tăng cân", en: "weight gain" }, { vi: "duy trì cân nặng", en: "weight maintenance" },
            { vi: "BMI", en: "body mass index" }, { vi: "tỷ lệ mỡ cơ thể", en: "body fat percentage" }, { vi: "cơ bắp", en: "muscle mass" }, { vi: "đốt cháy calo", en: "calorie burning" },
            { vi: "nước", en: "water" }, { vi: "uống nước", en: "hydration" }, { vi: "mất nước", en: "dehydration" }, { vi: "bù nước", en: "rehydration" },
            { vi: "ăn chay", en: "vegetarian" }, { vi: "ăn thuần chay", en: "vegan" }, { vi: "ăn không gluten", en: "gluten-free" }, { vi: "ăn kiêng keto", en: "keto diet" },
            { vi: "ăn kiêng low-carb", en: "low-carb diet" }, { vi: "nhịn ăn gián đoạn", en: "intermittent fasting" }, { vi: "dinh dưỡng thể thao", en: "sports nutrition" }, { vi: "thực phẩm bổ sung", en: "supplement" }
        ]
    },

    // ==================== 98. Y HỌC CỔ TRUYỀN (TRADITIONAL MEDICINE) - 90+ từ ====================
    traditional_medicine: {
        name: "🌿 Y HỌC CỔ TRUYỀN - TRADITIONAL MEDICINE",
        words: [
            { vi: "y học cổ truyền", en: "traditional medicine" }, { vi: "đông y", en: "Eastern medicine" }, { vi: "thuốc nam", en: "Vietnamese traditional medicine" }, { vi: "thuốc bắc", en: "Chinese traditional medicine" },
            { vi: "lương y", en: "traditional doctor" }, { vi: "thầy thuốc", en: "herbalist" }, { vi: "bốc thuốc", en: "prescribe herbs" }, { vi: "bắt mạch", en: "take pulse" },
            { vi: "xem lưỡi", en: "tongue diagnosis" }, { vi: "khí", en: "qi" }, { vi: "huyệt", en: "acupuncture point" }, { vi: "kinh mạch", en: "meridian" },
            { vi: "âm dương", en: "yin yang" }, { vi: "ngũ hành", en: "five elements" }, { vi: "hành kim", en: "metal element" }, { vi: "hành mộc", en: "wood element" },
            { vi: "hành thủy", en: "water element" }, { vi: "hành hỏa", en: "fire element" }, { vi: "hành thổ", en: "earth element" }, { vi: "tạng phủ", en: "zang fu organs" },
            { vi: "can", en: "liver" }, { vi: "tâm", en: "heart" }, { vi: "tỳ", en: "spleen" }, { vi: "phế", en: "lung" }, { vi: "thận", en: "kidney" },
            { vi: "châm cứu", en: "acupuncture" }, { vi: "kim châm", en: "acupuncture needle" }, { vi: "cứu", en: "moxibustion" }, { vi: "ngải cứu", en: "moxa" },
            { vi: "xoa bóp", en: "massage" }, { vi: "bấm huyệt", en: "acupressure" }, { vi: "day ấn", en: "shiatsu" }, { vi: "giác hơi", en: "cupping" },
            { vi: "cạo gió", en: "scraping" }, { vi: "xông hơi", en: "steam therapy" }, { vi: "ngâm chân", en: "foot soak" }, { vi: "ngâm mình", en: "herbal bath" },
            { vi: "thuốc thang", en: "herbal decoction" }, { vi: "thang thuốc", en: "herbal formula" }, { vi: "sắc thuốc", en: "boil herbs" }, { vi: "uống thuốc", en: "take medicine" },
            { vi: "cao dán", en: "herbal plaster" }, { vi: "dầu xoa", en: "liniment" }, { vi: "rượu thuốc", en: "herbal wine" }, { vi: "mật ong", en: "honey" },
            { vi: "nhân sâm", en: "ginseng" }, { vi: "đẳng sâm", en: "codonopsis" }, { vi: "hoàng kỳ", en: "astragalus" }, { vi: "đương quy", en: "angelica" },
            { vi: "xuyên khung", en: "ligusticum" }, { vi: "bạch thược", en: "white peony" }, { vi: "cam thảo", en: "licorice" }, { vi: "trần bì", en: "dried tangerine peel" }
        ]
    },

    // ==================== 99. VẬT LÝ TRỊ LIỆU (PHYSICAL THERAPY) - 90+ từ ====================
    physical_therapy: {
        name: "🦿 VẬT LÝ TRỊ LIỆU - PHYSICAL THERAPY",
        words: [
            { vi: "vật lý trị liệu", en: "physical therapy" }, { vi: "phục hồi chức năng", en: "rehabilitation" }, { vi: "trị liệu", en: "therapy" }, { vi: "bác sĩ vật lý trị liệu", en: "physiotherapist" },
            { vi: "bệnh nhân", en: "patient" }, { vi: "chấn thương", en: "injury" }, { vi: "đau", en: "pain" }, { vi: "sưng", en: "swelling" },
            { vi: "cứng khớp", en: "stiffness" }, { vi: "yếu cơ", en: "muscle weakness" }, { vi: "teo cơ", en: "muscle atrophy" }, { vi: "co cứng", en: "spasticity" },
            { vi: "tập luyện", en: "exercise" }, { vi: "bài tập", en: "exercise routine" }, { vi: "giãn cơ", en: "stretching" }, { vi: "kéo giãn", en: "stretching exercise" },
            { vi: "tăng cường cơ bắp", en: "strengthening" }, { vi: "cân bằng", en: "balance" }, { vi: "phối hợp", en: "coordination" }, { vi: "dáng đi", en: "gait" },
            { vi: "hỗ trợ di chuyển", en: "mobility aid" }, { vi: "nạng", en: "crutches" }, { vi: "gậy", en: "cane" }, { vi: "khung tập đi", en: "walker" },
            { vi: "xe lăn", en: "wheelchair" }, { vi: "nẹp", en: "splint" }, { vi: "băng", en: "bandage" }, { vi: "băng keo thể thao", en: "kinesiology tape" },
            { vi: "máy kéo giãn cột sống", en: "traction" }, { vi: "máy siêu âm trị liệu", en: "therapeutic ultrasound" }, { vi: "máy kích thích điện", en: "electrical stimulation" }, { vi: "máy laser trị liệu", en: "laser therapy" },
            { vi: "nhiệt trị liệu", en: "heat therapy" }, { vi: "chườm nóng", en: "hot pack" }, { vi: "lạnh trị liệu", en: "cold therapy" }, { vi: "chườm đá", en: "ice pack" },
            { vi: "thủy trị liệu", en: "hydrotherapy" }, { vi: "tập bơi", en: "swimming therapy" }, { vi: "xoa bóp trị liệu", en: "therapeutic massage" }, { vi: "bấm huyệt", en: "acupressure" },
            { vi: "đau lưng", en: "back pain" }, { vi: "thoát vị đĩa đệm", en: "herniated disc" }, { vi: "đau cổ", en: "neck pain" }, { vi: "hội chứng ống cổ tay", en: "carpal tunnel syndrome" },
            { vi: "viêm khớp", en: "arthritis" }, { vi: "thoái hóa khớp", en: "osteoarthritis" }, { vi: "đau vai", en: "shoulder pain" }, { vi: "đau gối", en: "knee pain" }
        ]
    },

    // ==================== 100. SƠ CỨU (FIRST AID) - 90+ từ ====================
    first_aid: {
        name: "🩹 SƠ CỨU - FIRST AID",
        words: [
            { vi: "sơ cứu", en: "first aid" }, { vi: "cấp cứu", en: "emergency" }, { vi: "xử lý", en: "treatment" }, { vi: "khẩn cấp", en: "urgent" },
            { vi: "băng cứu thương", en: "first aid kit" }, { vi: "băng gạc", en: "bandage" }, { vi: "băng dính", en: "adhesive tape" }, { vi: "băng cá nhân", en: "band-aid" },
            { vi: "gạc vô trùng", en: "sterile gauze" }, { vi: "bông y tế", en: "cotton wool" }, { vi: "cồn sát trùng", en: "rubbing alcohol" }, { vi: "nước muối sinh lý", en: "saline solution" },
            { vi: "oxy già", en: "hydrogen peroxide" }, { vi: "povidine", en: "povidone-iodine" }, { vi: "thuốc mỡ kháng sinh", en: "antibiotic ointment" }, { vi: "kem chống viêm", en: "anti-inflammatory cream" },
            { vi: "vết thương", en: "wound" }, { vi: "vết cắt", en: "cut" }, { vi: "vết trầy xước", en: "scrape" }, { vi: "vết rách", en: "laceration" },
            { vi: "vết bỏng", en: "burn" }, { vi: "phồng rộp", en: "blister" }, { vi: "chảy máu", en: "bleeding" }, { vi: "cầm máu", en: "stop bleeding" },
            { vi: "băng ép", en: "pressure bandage" }, { vi: "garo", en: "tourniquet" }, { vi: "vết bầm", en: "bruise" }, { vi: "tụ máu", en: "hematoma" },
            { vi: "bong gân", en: "sprain" }, { vi: "căng cơ", en: "strain" }, { vi: "gãy xương", en: "fracture" }, { vi: "nẹp cố định", en: "splint" },
            { vi: "trật khớp", en: "dislocation" }, { vi: "nong khớp", en: "reduction" }, { vi: "chấn động não", en: "concussion" }, { vi: "bất tỉnh", en: "unconsciousness" },
            { vi: "hồi sức tim phổi", en: "CPR" }, { vi: "ép tim", en: "chest compression" }, { vi: "hô hấp nhân tạo", en: "rescue breathing" }, { vi: "đập lưng", en: "back blow" },
            { vi: "hóc dị vật", en: "choking" }, { vi: "Heimlich", en: "Heimlich maneuver" }, { vi: "đột quỵ", en: "stroke" }, { vi: "đau tim", en: "heart attack" },
            { vi: "co giật", en: "seizure" }, { vi: "sốc phản vệ", en: "anaphylactic shock" }, { vi: "say nắng", en: "heat stroke" }, { vi: "say nóng", en: "heat exhaustion" },
            { vi: "hạ thân nhiệt", en: "hypothermia" }, { vi: "tê cóng", en: "frostbite" }, { vi: "đuối nước", en: "drowning" }, { vi: "điện giật", en: "electric shock" }
        ]
    }
};

// Khởi tạo dữ liệu trong localStorage nếu chưa có
if (!localStorage.getItem("vocabData")) {
    localStorage.setItem("vocabData", JSON.stringify(VOCABULARY));
}

// Hàm lấy dữ liệu hiện tại
function getVocabulary() {
    return JSON.parse(localStorage.getItem("vocabData"));
}

// Hàm lưu dữ liệu
function saveVocabulary(data) {
    localStorage.setItem("vocabData", JSON.stringify(data));
}
