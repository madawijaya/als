const fishtype = [
    { name: 'Teri Tawar', description: 'Teri tawar adalah ikan teri yang tidak diasinkan. Cocok untuk campuran nasi goreng atau tumisan sayur.', image: 'img/teritawar.jpeg' },
    { name: 'Teri Medan', description: 'Teri Medan bentuknya kecil dan putih bersih. Rasanya gurih dan renyah jika digoreng kering.', image: 'img/terimedan.jpeg' },
    { name: 'Rebon', description: 'Udang rebon kering yang sangat kecil. Biasa digunakan untuk penyedap rasa pada masakan atau dibuat rempeyek.', image: 'img/rebon.jpeg' },
    { name: 'Japu Siro', description: 'Ikan asin Japu Siro memiliki tekstur yang unik dan rasa asin yang pas di lidah.', image: 'img/japusiro.jpeg' },
    { name: 'Cumi Rebus', description: 'Cumi asin rebus yang empuk. Cocok dimasak sambal hijau atau oseng cabai gendot.', image: 'img/cumi.jpeg' },
    { name: 'Blosso', description: 'Ikan asin Blosso, pilihan tepat untuk menemani santap siang anda dengan nasi hangat.', image: 'img/blosso.jpeg' },
    { name: 'Japu Layang', description: 'Varian ikan Japu dengan karakteristik mirip ikan layang, gurih dan sedap.', image: 'img/japu.jpeg' },
    { name: 'RT', description: 'Ikan asin jenis RT yang ekonomis namun tetap menggugah selera makan.', image: 'img/rt.jpeg' },
    { name: 'Selar', description: 'Ikan selar asin dengan ukuran sedang. Dagingnya cukup banyak dan gurih.', image: 'img/selar.jpeg' },
    { name: 'Udang Manis', description: 'Udang kering dengan cita rasa manis alami. Enak untuk camilan atau campuran masakan.', image: 'img/udang.jpeg' },
    { name: 'Kapasan Tawar', description: 'Ikan kapasan tawar yang tipis dan renyah. Sangat garing ketika digoreng.', image: 'img/kapasan.jpeg' },
    { name: 'Layang Rebus', description: 'Ikan layang yang direbus lalu dikeringkan. Teksturnya lebih empuk dibanding ikan asin biasa.', image: 'img/layangrebus.jpeg' },
    { name: 'Tembakang', description: 'Ikan asin tembakang, favorit banyak orang karena rasa dagingnya yang manis gurih.', image: 'img/tembakang.jpeg' },
    { name: 'Samge', description: 'Ikan asin Samge dengan cita rasa tradisional yang khas dan menggugah selera.', image: 'img/samge.jpeg' },
    { name: 'Teri Jengki belah', description: 'Teri Jengki pilihan yang dibelah. Sangat renyah dan gurih setelah digoreng kering.', image: 'img/terijengkibelah.jpeg' }
];

const saltedFishRecipes = [
    {
        id: 'kacang-teri-balado',
        title: 'Kacang Teri Balado',
        fishType: 'Teri Medan',
        category: 'Indonesian',
        categoryTag: 'Nusantara',
        prepTime: '25 Menit',
        difficulty: 'Mudah',
        servings: '4 Porsi',
        bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        emoji: '🌶️',
        description: 'Perpaduan renyah teri Medan goreng dan kacang tanah yang dibalut sambal balado merah pedas manis gurih membangkitkan selera makan.',
        ingredients: [
            '150g Teri Medan (cuci bersih, tiriskan & goreng garing)',
            '150g Kacang tanah (goreng hingga matang)',
            '10 buah Cabai merah keriting',
            '5 buah Cabai rawit merah',
            '6 siung Bawang merah & 3 siung Bawang putih',
            '1 lembar Daun jeruk (iris tipis)',
            '1 tbsp Gula merah (sisir)',
            'Garam dan kaldu bubuk secukupnya'
        ],
        steps: [
            'Goreng teri Medan dan kacang tanah hingga garing kecokelatan secara terpisah, lalu tiriskan.',
            'Haluskan cabai merah, cabai rawit, bawang merah, dan bawang putih.',
            'Tumis bumbu halus dengan sedikit minyak bersama daun jeruk hingga harum dan matang sempurna.',
            'Bumbui dengan gula merah, garam, dan kaldu bubuk. Aduk rata hingga bumbu agak mengental/karamel.',
            'Matikan api dan biarkan bumbu agak dingin sebentar agar teri dan kacang tetap renyah.',
            'Masukkan teri Medan dan kacang tanah, aduk cepat hingga seluruh bahan terbalut rata. Sajikan!'
        ]
    },
    {
        id: 'nasi-goreng-teri-medan',
        title: 'Nasi Goreng Teri Medan',
        fishType: 'Teri Medan',
        category: 'Indonesian',
        categoryTag: 'Nusantara',
        prepTime: '20 Menit',
        difficulty: 'Mudah',
        servings: '2 Porsi',
        bgGradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        emoji: '🍚',
        description: 'Nasi goreng harum khas Nusantara dengan taburan teri Medan renyah, irisan cabai hijau, bawang goreng, dan aroma minyak wijen.',
        ingredients: [
            '2 piring Nasi putih dingin',
            '50g Teri Medan (goreng garing)',
            '2 butir Telur ayam',
            '3 siung Bawang putih (cincang halus)',
            '4 siung Bawang merah (iris tipis)',
            '2 buah Cabai hijau besar (iris miring)',
            '1 batang Daun bawang (iris)',
            '1 tbsp Kecap asin & 1 tsp Minyak wijen',
            'Garam, merica, dan kecap manis secukupnya'
        ],
        steps: [
            'Panaskan minyak, orak-arik telur hingga matang, sisihkan di pinggir wajan.',
            'Tumis bawang putih, bawang merah, dan cabai hijau hingga harum.',
            'Masukkan nasi putih, beri kecap asin, kecap manis, minyak wijen, garam, dan merica. Aduk rata dengan api besar.',
            'Tambahkan daun bawang dan setengah dari teri Medan goreng, aduk sebentar.',
            'Angkat nasi goreng, tuang ke piring saji, dan taburi sisa teri Medan renyah di atasnya.'
        ]
    },
    {
        id: 'tumis-layang-cabe-hijau',
        title: 'Oseng Layang Asin Cabe Hijau',
        fishType: 'Layang Rebus',
        category: 'Sambal',
        categoryTag: 'Sambal & Oseng',
        prepTime: '30 Menit',
        difficulty: 'Mudah',
        servings: '3 Porsi',
        bgGradient: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        emoji: '🥘',
        description: 'Olahan ikan layang asin/rebus yang ditumis berkuah macak-macak dengan kelimpahan cabai hijau keriting, tomat hijau segar, dan daun salam.',
        ingredients: [
            '3 ekor Ikan Layang asin/rebus (potong 2 & goreng setengah matang)',
            '8 buah Cabai hijau keriting & 3 buah Cabai rawit hijau (iris)',
            '3 buah Tomat hijau (potong-potong)',
            '5 siung Bawang merah & 3 siung Bawang putih (iris)',
            '2 lembar Daun salam & 2 cm Lengkuas (memarkan)',
            '1 tbsp Kecap manis & 1 tbsp Saus tiram',
            '100ml Air matang, gula dan kaldu secukupnya'
        ],
        steps: [
            'Goreng ikan layang sebentar saja hingga berkulit, jangan terlalu kering agar tidak keras.',
            'Tumis bawang merah, bawang putih, lengkuas, dan daun salam hingga harum.',
            'Masukkan cabai hijau dan tomat hijau, tumis hingga agak layu.',
            'Beri air matang, kecap manis, saus tiram, gula, dan kaldu bubuk.',
            'Masukkan ikan layang goreng, masak hingga bumbu meresap dan kuah menyusut. Tiriskan dan hidangkan hangat.'
        ]
    },
    {
        id: 'pepes-bawal-asin',
        title: 'Pepes Ikan Bawal Asin Kemangi',
        fishType: 'Bawal',
        category: 'Indonesian',
        categoryTag: 'Nusantara',
        prepTime: '45 Menit',
        difficulty: 'Sedang',
        servings: '2 Porsi',
        bgGradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        emoji: '🌿',
        description: 'Pepes ikan bawal asin khas Sunda dibungkus daun pisang, kaya akan bumbu rempah kuning harum, daun kemangi segar, dan serai.',
        ingredients: [
            '2 ekor Ikan Bawal asin (rendam air hangat 15 menit)',
            '1 ikat Daun kemangi segar',
            '2 lembar Daun pisang untuk membungkus',
            '2 batang Serai (memarkan) & 4 lembar Daun jeruk',
            'Bumbu Halus: 6 Bawang merah, 3 Bawang putih, 4 Kunyit bakar, 3 Kemiri, 5 Cabai merah'
        ],
        steps: [
            'Cuci bersih ikan bawal asin yang telah direndam air hangat untuk mengurangi rasa asin berlebih.',
            'Baluri ikan bawal dengan bumbu halus hingga merata ke seluruh permukaan.',
            'Siapkan daun pisang, tata sebagian daun kemangi, serai, dan daun jeruk. Letakkan ikan bawal berlapis bumbu, tutup lagi dengan kemangi.',
            'Bungkus rapi dan semat kedua ujungnya dengan tusuk gigi.',
            'Kukus pepes selama 30 menit hingga matang dan meresap. Bakar sebentar di atas teflon untuk aroma sangit yang nikmat.'
        ]
    },
    {
        id: 'sambal-rebon-pedas',
        title: 'Sambal Udang Rebon Pedas Gurih',
        fishType: 'Rebon',
        category: 'Sambal',
        categoryTag: 'Sambal & Oseng',
        prepTime: '20 Menit',
        difficulty: 'Mudah',
        servings: '6 Porsi',
        bgGradient: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)',
        emoji: '🔥',
        description: 'Sambal goreng umami tinggi terbuat dari udang rebon sangrai dengan cabai merah tumis dan perasan jeruk limau. Tahan lama dan cocok untuk stok lauk.',
        ingredients: [
            '100g Udang Rebon (cuci, tiriskan & sangrai hingga kering)',
            '15 buah Cabai rawit merah & 10 buah Cabai merah keriting',
            '8 siung Bawang merah & 4 siung Bawang putih',
            '1 buah Jeruk limau (ambil airnya)',
            '1 tsp Gula pasir & garam secukupnya',
            '100ml Minyak goreng'
        ],
        steps: [
            'Sangrai udang rebon di wajan tanpa minyak hingga harum dan renyah, sisihkan.',
            'Goreng sebentar cabai dan bawang, lalu ulek kasar atau chop dengan blender.',
            'Panaskan minyak, tumis sambal ulek hingga harum dan matang berminyak.',
            'Bumbui dengan gula pasir dan sedikit garam (rebon sudah asin).',
            'Masukkan rebon sangrai, aduk rata dengan api kecil hingga menyatu sempurna. Beri perasan jeruk limau sebelum diangkat.'
        ]
    },
    {
        id: 'japu-siro-crispy',
        title: 'Japu Siro Crispy Saus Asam Manis',
        fishType: 'Japu Siro',
        category: 'International',
        categoryTag: 'Internasional',
        prepTime: '25 Menit',
        difficulty: 'Mudah',
        servings: '3 Porsi',
        bgGradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        emoji: '🍤',
        description: 'Ikan Japu Siro balut tepung berbumbu digoreng ekstra renyah, disiram saus asam manis nanas gurih segarnya hidangan ala restoran.',
        ingredients: [
            '200g Ikan Japu Siro (potong-potong)',
            '100g Tepung bumbu serbaguna & 2 tbsp Tepung maizena',
            '1/2 buah Nanas (potong dadu)',
            '1/2 buah Bawang bombay (iris wedges)',
            '3 tbsp Saus tomat & 1 tbsp Saus sambal',
            '1 tbsp Gula pasir & 150ml Air'
        ],
        steps: [
            'Balur potongan Japu Siro ke adonan tepung basah tipis lalu ke tepung kering.',
            'Goreng dalam minyak panas melimpah hingga kuning keemasan dan crispy. Tiriskan.',
            'Tumis bawang bombay hingga layu, masukkan saus tomat, saus sambal, gula, dan air. Aduk hingga mendidih.',
            'Masukkan potongan nanas dan larutan maizena untuk mengentalkan saus.',
            'Siramkan saus asam manis hangat di atas Japu Siro crispy saat akan dihidangkan.'
        ]
    },
    {
        id: 'salted-fish-fried-rice-hk',
        title: 'Hong Kong Salted Fish & Chicken Fried Rice',
        fishType: 'Teri Tawar',
        category: 'International',
        categoryTag: 'Internasional',
        prepTime: '25 Menit',
        difficulty: 'Sedang',
        servings: '2 Porsi',
        bgGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        emoji: '🥢',
        description: 'Nasi goreng oriental klasik ala Restoran Hong Kong dengan perpaduan gurih potongan salted fish, daging ayam dicing, dan daun ketumbar.',
        ingredients: [
            '2 piring Nasi putih pera (day-old rice)',
            '40g Ikan asin teri/tenggiri asin (cincang kecil & goreng harum)',
            '100g Daging dada ayam (potong dadu kecil)',
            '2 butir Telur (kocok lepas)',
            '2 siung Bawang putih & 1 cm Jahe (cincang halus)',
            '2 batang Daun bawang (iris bulat)',
            '1 tbsp Light soy sauce, 1 tsp Minyak wijen, & Lada putih'
        ],
        steps: [
            'Goreng cincangan ikan asin hingga harum dan garing keemasan, sisihkan.',
            'Tumis jahe dan bawang putih cincang, masukkan daging ayam dadu, masak hingga ayam berubah warna.',
            'Dorong bahan ke tepi wajan, tuang telur kocok dan orak-arik cepat.',
            'Masukkan nasi putih, beri kecap asin, minyak wijen, lada putih, dan ikan asin cincang. Aduk rata dengan teknik wok-hei api tinggi.',
            'Taburi daun bawang iris, aduk sejenak lalu sajikan selagi panas.'
        ]
    },
    {
        id: 'tumis-cumi-asin-cabe-ijo',
        title: 'Oseng Cumi Asin Cabai Hijau',
        fishType: 'Cumi Rebus',
        category: 'Sambal',
        categoryTag: 'Sambal & Oseng',
        prepTime: '20 Menit',
        difficulty: 'Mudah',
        servings: '3 Porsi',
        bgGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        emoji: '🦑',
        description: 'Cumi asin empuk yang dipadukan dengan irisan cabai hijau pedas, tomat hijau segar, dan daun jeruk wangi yang bikin nagih.',
        ingredients: [
            '200g Cumi asin (seduh air panas 10 menit agar tidak terlalu asin & empuk)',
            '10 buah Cabai hijau keriting & 5 buah Cabai rawit hijau (iris miring)',
            '2 buah Tomat hijau (belah empat)',
            '6 siung Bawang merah & 3 siung Bawang putih (iris tipis)',
            '3 lembar Daun jeruk & 1 lembar Daun salam',
            '1 tbsp Saus tiram, gula pasir dan kaldu secukupnya'
        ],
        steps: [
            'Potong-potong cumi asin yang sudah diseduh air panas, bilas tiriskan.',
            'Tumis bawang merah, bawang putih, daun jeruk, dan daun salam sampai harum.',
            'Masukkan irisan cabai hijau, cabai rawit, dan tomat hijau. Tumis sebentar.',
            'Masukkan cumi asin dan saus tiram. Tambahkan sedikit gula pasir untuk menyeimbangkan rasa.',
            'Masak 3-5 menit saja agar cumi tetap empuk dan tidak ulet. Angkat dan sajikan!'
        ]
    }
];

// App State
let currentView = 'home';
let currentRecipeFilter = 'all';
let currentSearchText = '';

// Helper for fish placeholders
const getPlaceholderImage = (text) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 80%)`;
};

// Render Fish Catalogue (Home View)
const renderIkan = (filterText = '') => {
    const container = document.getElementById('ikan-container');
    if (!container) return;
    container.innerHTML = '';

    const filteredFish = fishtype.filter(fish =>
        fish.name.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredFish.forEach((fish) => {
        const bgColor = getPlaceholderImage(fish.name);
        const card = document.createElement('div');
        card.className = 'ikan-card';
        card.style.cursor = 'pointer';

        card.addEventListener('click', () => {
            openModal(fish, bgColor);
        });

        const imageHtml = fish.image
            ? `<img src="${fish.image}" alt="${fish.name}">`
            : `<span style="font-size: 3rem;">🐟</span>`;

        card.innerHTML = `
            <div class="card-image" style="background-color: ${fish.image ? 'transparent' : bgColor}">
                ${imageHtml}
            </div>
            <div class="card-content">
                <h3 class="card-title">${fish.name}</h3>
            </div>
        `;

        container.appendChild(card);
    });
};

// Render Recipe Collection (Recipe View)
const renderRecipes = (categoryFilter = 'all', searchText = '') => {
    const container = document.getElementById('recipe-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = saltedFishRecipes.filter(recipe => {
        const matchesCategory = categoryFilter === 'all' || recipe.category === categoryFilter;
        const query = searchText.toLowerCase();
        const matchesSearch = !searchText ||
            recipe.title.toLowerCase().includes(query) ||
            recipe.fishType.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: #888;">
                <span style="font-size: 40px; display: block; margin-bottom: 10px;">🔍</span>
                <p>Tidak ada resep yang cocok dengan pencarian Anda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';

        card.innerHTML = `
            <div class="recipe-card-header" style="background: ${recipe.bgGradient};">
                <span class="recipe-card-badge">${recipe.categoryTag}</span>
                <span class="recipe-card-fish-badge">${recipe.fishType}</span>
                <span class="recipe-card-emoji">${recipe.emoji}</span>
            </div>
            <div class="recipe-card-body">
                <h3 class="recipe-card-title">${recipe.title}</h3>
                <p class="recipe-card-desc">${recipe.description}</p>
                <div class="recipe-card-footer">
                    <span class="recipe-meta-item">⏱️ ${recipe.prepTime}</span>
                    <span class="recipe-meta-item">🌶️ ${recipe.difficulty}</span>
                    <span class="btn-view-recipe">Lihat Resep →</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            openRecipeModal(recipe);
        });

        container.appendChild(card);
    });
};

// Navigation View Switcher
const switchView = (targetView) => {
    currentView = targetView;

    // Update nav active states
    document.querySelectorAll('.nav-btn, .nav-item').forEach(el => {
        const view = el.getAttribute('data-view');
        if (view === targetView) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });

    // Toggle view elements
    const homeView = document.getElementById('home-view');
    const recipeView = document.getElementById('recipe-view');

    if (targetView === 'home') {
        homeView.classList.remove('hidden');
        recipeView.classList.add('hidden');
        renderIkan(currentSearchText);
    } else {
        homeView.classList.add('hidden');
        recipeView.classList.remove('hidden');
        renderRecipes(currentRecipeFilter, currentSearchText);
    }

    // Update search placeholders
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.placeholder = targetView === 'home' ? 'Cari Ikan Asin...' : 'Cari Resep Masakan...';
    });
};

// Ikan Modal
const openModal = (fish, bgColor) => {
    const modal = document.getElementById('ikan-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalImageContainer = document.querySelector('.modal-image');

    modalTitle.textContent = fish.name;
    modalDesc.textContent = fish.description;
    if (fish.image) {
        modalImageContainer.innerHTML = `<img src="${fish.image}" alt="${fish.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
        modalImageContainer.style.backgroundColor = 'transparent';
    } else {
        modalImageContainer.innerHTML = '<span style="font-size: 5rem;">🐟</span>';
        modalImageContainer.style.backgroundColor = bgColor;
    }

    modal.classList.remove('hidden');
};

const closeModal = () => {
    const modal = document.getElementById('ikan-modal');
    modal.classList.add('hidden');
};

// Recipe Modal
const openRecipeModal = (recipe) => {
    const modal = document.getElementById('recipe-modal');
    if (!modal) return;

    document.getElementById('recipe-modal-header').style.background = recipe.bgGradient;
    document.getElementById('recipe-modal-emoji').textContent = recipe.emoji;
    document.getElementById('recipe-modal-category').textContent = recipe.categoryTag;
    document.getElementById('recipe-modal-title').textContent = recipe.title;
    document.getElementById('recipe-modal-fish').textContent = `🐟 ${recipe.fishType}`;
    document.getElementById('recipe-modal-time').textContent = `⏱️ ${recipe.prepTime}`;
    document.getElementById('recipe-modal-difficulty').textContent = `🌶️ ${recipe.difficulty}`;
    document.getElementById('recipe-modal-servings').textContent = `🍽️ ${recipe.servings}`;
    document.getElementById('recipe-modal-desc').textContent = recipe.description;

    const ingList = document.getElementById('recipe-modal-ingredients');
    ingList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

    const stepList = document.getElementById('recipe-modal-steps');
    stepList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');

    modal.classList.remove('hidden');
};

const closeRecipeModal = () => {
    const modal = document.getElementById('recipe-modal');
    if (modal) modal.classList.add('hidden');
};

// Main DOM Loaded Listener
document.addEventListener('DOMContentLoaded', () => {
    renderIkan();
    renderRecipes();

    // Nav click handlers (Desktop & Mobile)
    document.querySelectorAll('.nav-btn, .nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            if (view) switchView(view);
        });
    });

    // Recipe Filter Chips
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            chips.forEach(c => c.classList.remove('active'));
            e.target.classList.add('active');
            currentRecipeFilter = e.target.getAttribute('data-filter');
            renderRecipes(currentRecipeFilter, currentSearchText);
        });
    });

    // Search bar listener with synchronization across inputs
    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            currentSearchText = e.target.value;

            if (currentView === 'home') {
                renderIkan(currentSearchText);
            } else {
                renderRecipes(currentRecipeFilter, currentSearchText);
            }

            searchInputs.forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.value = currentSearchText;
                }
            });
        });
    });

    // Close Modals Handlers
    const closeBtnIkan = document.querySelector('#ikan-modal .close-btn');
    if (closeBtnIkan) closeBtnIkan.addEventListener('click', closeModal);

    const closeBtnRecipe = document.querySelector('.recipe-close-btn');
    if (closeBtnRecipe) closeBtnRecipe.addEventListener('click', closeRecipeModal);

    document.getElementById('ikan-modal').addEventListener('click', (e) => {
        if (e.target.id === 'ikan-modal') closeModal();
    });

    document.getElementById('recipe-modal').addEventListener('click', (e) => {
        if (e.target.id === 'recipe-modal') closeRecipeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeRecipeModal();
        }
    });

    // --- Carousel Logic ---
    const bestSellersData = [
        'Layang Rebus',
        'Japu Siro',
        'Samge',
        'Teri Jengki belah'
    ];

    const initCarousel = () => {
        const track = document.getElementById('carousel-track');
        const dotsContainer = document.getElementById('carousel-dots');
        if (!track || !dotsContainer) return;

        const bestSellers = bestSellersData.map(name =>
            fishtype.find(fish => fish.name === name)
        ).filter(Boolean);

        bestSellers.forEach((fish, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            const bgColor = getPlaceholderImage(fish.name);

            const imageHtml = fish.image
                ? `<img src="${fish.image}" alt="${fish.name}" style="width: 100%; height: 100%; object-fit: cover;">`
                : `<span style="font-size: 5rem;">🐟</span>`;

            slide.innerHTML = `
                <div class="carousel-image" style="background-color: ${fish.image ? 'transparent' : bgColor}">
                    ${imageHtml}
                </div>
                <div class="slide-caption">
                    <h3>${fish.name}</h3>
                    <p>Best Seller</p>
                </div>
            `;

            track.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        let currentSlide = 0;
        const totalSlides = bestSellers.length;

        const updateCarousel = () => {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        };

        const goToSlide = (index) => {
            currentSlide = index;
            if (currentSlide < 0) currentSlide = totalSlides - 1;
            if (currentSlide >= totalSlides) currentSlide = 0;
            updateCarousel();
            resetTimer();
        };

        const nextSlide = () => goToSlide(currentSlide + 1);
        const prevSlide = () => goToSlide(currentSlide - 1);

        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        let timer = setInterval(nextSlide, 4000);

        const resetTimer = () => {
            clearInterval(timer);
            timer = setInterval(nextSlide, 4000);
        };
    };

    initCarousel();
});
