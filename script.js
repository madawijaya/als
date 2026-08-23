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

// Simple image placeholders using fake colors/patterns or just text
const getPlaceholderImage = (text) => {
    // Generate a deterministic color based on text
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash % 360);
    return `hsl(${hue}, 70%, 80%)`;
};

const renderIkan = (filterText = '') => {
    const container = document.getElementById('ikan-container');
    container.innerHTML = '';

    const filteredFish = fishtype.filter(fish =>
        fish.name.toLowerCase().includes(filterText.toLowerCase())
    );

    filteredFish.forEach((fish) => {
        const bgColor = getPlaceholderImage(fish.name);

        const card = document.createElement('div');
        card.className = 'ikan-card';
        card.style.cursor = 'pointer';

        // Add click listener for modal
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

document.addEventListener('DOMContentLoaded', () => {
    renderIkan();

    const searchInputs = document.querySelectorAll('input[type="text"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            renderIkan(e.target.value);

            // Sync other search inputs
            searchInputs.forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.value = input.value;
                }
            });
        });
    });

    // Close modal handlers
    document.querySelector('.close-btn').addEventListener('click', closeModal);

    // Close on click outside
    document.getElementById('ikan-modal').addEventListener('click', (e) => {
        if (e.target.id === 'ikan-modal') {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !document.getElementById('ikan-modal').classList.contains('hidden')) {
            closeModal();
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

        if (!track || !dotsContainer) return; // Guard clause

        // Get full fish objects for best sellers
        const bestSellers = bestSellersData.map(name =>
            fishtype.find(fish => fish.name === name)
        ).filter(Boolean);

        // Render Slides
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

            // Render Dots
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

        // Controls
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

        // Auto play
        let timer = setInterval(nextSlide, 4000);

        const resetTimer = () => {
            clearInterval(timer);
            timer = setInterval(nextSlide, 4000);
        };
    };

    initCarousel();
});
