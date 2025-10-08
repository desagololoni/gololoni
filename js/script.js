document.addEventListener('DOMContentLoaded', () => {
    function initializeTheme() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) {
            console.warn("Theme toggle button not found in the loaded navigation.");
            return;
        }

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        // Set initial theme based on saved preference or system setting
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            document.body.classList.add('dark-mode');
            themeToggle.setAttribute('aria-pressed', 'true');
        }

        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.setAttribute('aria-pressed', isDark);
        });
    }

    /* Initializes all interactive navigation elements: hamburger menu, dropdowns, and logic for closing them when clicking outside. */
    function initializeNavigation() {
        const hamburger = document.getElementById('hamburger');
        const navMenuWrapper = document.getElementById('nav-menu-wrapper');
        const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

        if (!hamburger || !navMenuWrapper) {
            console.warn("Essential navigation elements (hamburger or menu wrapper) not found.");
            return;
        }

        // --- Hamburger Toggle ---
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the document click listener from closing it immediately
            const isActive = hamburger.classList.toggle('active');
            navMenuWrapper.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive);
            document.body.style.overflow = isActive ? 'hidden' : '';
        });

        // --- Dropdown Toggle ---
        const closeAllDropdowns = () => {
            dropdownItems.forEach(item => {
                item.classList.remove('dropdown-active');
                item.querySelector('.dropdown-menu')?.classList.remove('active');
            });
        };

        dropdownItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            const dropdownMenu = item.querySelector('.dropdown-menu');

            if (!link || !dropdownMenu) return;

            link.addEventListener('click', (e) => {
                e.stopPropagation(); // Stop click from bubbling up to the document listener

                // On mobile, prevent navigating away to show the dropdown
                if (window.innerWidth < 992) {
                    e.preventDefault();
                }

                const isAlreadyActive = item.classList.contains('dropdown-active');
                closeAllDropdowns(); // Close others first

                if (!isAlreadyActive) {
                    item.classList.add('dropdown-active');
                    dropdownMenu.classList.add('active');
                }
            });
        });

        document.addEventListener('click', () => {
            closeAllDropdowns();
            if (navMenuWrapper.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenuWrapper.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* Main function to fetch the navbar HTML, inject it into the placeholder, and then initialize all its interactive components. */
    async function loadAndSetupNavbar() {
        const placeholder = document.getElementById('navbar-placeholder');
        const ftrplaceholder = document.getElementById('footer-placeholder');
        if (!placeholder) {
            console.error("Fatal: Navbar placeholder element not found in the document.");
            return;
        }
        if (!ftrplaceholder) {
            console.error("Fatal: Footer placeholder element not found in the document.");
            return;
        }
        try {
            const response = await fetch('nav.html');
            const ftrresponse = await fetch('footer.html');
            if (!response.ok) {
                throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
            if (!ftrresponse.ok) {
                throw new Error(`Network response was not ok. Status: ${ftrresponse.status}`);
            }
            const navHTML = await response.text();
            placeholder.innerHTML = navHTML;

            const footerHTML = await ftrresponse.text();
            ftrplaceholder.innerHTML = footerHTML;
            // Now that the navbar is in the DOM, initialize its features.
            initializeTheme();
            initializeNavigation();
        } catch (error) {
            console.error('There was a problem loading the navigation:', error);
            placeholder.innerHTML = '<p style="color: red; text-align: center; padding: 1rem;">Failed to load navigation.</p>';
            ftrplaceholder.innerHTML = '<p style="color: red; text-align: center; padding: 1rem;">Failed to load footer.</p>';
        }
    }
    loadAndSetupNavbar();

    // Landing background
    const backgroundImages = [
        "media/img/bg1.jpg",
        "media/img/bg2.jpg",
        "media/img/bg3.jpeg",
        "media/img/bg4.jpeg",
        "media/img/bg5.jpeg",
    ];

    let currentSlide = 0;
    let autoSlideInterval;

    // Get elements from the DOM
    const bgSlider = document.getElementById("bgSlider");
    const prevPreview = document.getElementById("prevPreview");
    const nextPreview = document.getElementById("nextPreview");

    // --- Core Functions ---

    /**
     * Changes the main background and updates the preview images.
     * This is the central function for slide transitions.
     */
    function changeSlide(newIndex) {
        currentSlide = newIndex;

        // Update main background
        bgSlider.style.backgroundImage = `url(${backgroundImages[currentSlide]})`;

        // Update preview images
        const prevIndex = (currentSlide - 1 + backgroundImages.length) % backgroundImages.length;
        const nextIndex = (currentSlide + 1) % backgroundImages.length;

        prevPreview.style.backgroundImage = `url(${backgroundImages[prevIndex]})`;
        nextPreview.style.backgroundImage = `url(${backgroundImages[nextIndex]})`;

        // Reset the auto-slide timer whenever a change occurs
        resetAutoSlide();
    }

    // --- Navigation Functions ---
    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % backgroundImages.length;
        changeSlide(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentSlide - 1 + backgroundImages.length) % backgroundImages.length;
        changeSlide(prevIndex);
    };

    // --- Auto Slide Logic ---
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, 6000); // Change every 6 seconds
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    // --- Initialization ---

    function init() {
        // Set the initial state
        changeSlide(0);

        // Add event listeners for controls
        nextPreview.addEventListener("click", nextSlide);
        prevPreview.addEventListener("click", prevSlide);
    }

    // Start the slider
    init();

    // Attraction grid
    const attractionsList = [
        { name: 'Trekking', image: 'media/img/treking.png', description: 'Trekking melewati jalur persawahan, sungai, kebun dan melihat berbagai pemandangan dan air terjun.' },
        { name: 'River Tubing', image: 'media/img/rivertubbing.jpg', description: 'Nikmati sensasi mengarungi sungai dengan ban, mengikuti arus sambil menikmati kehijauan alam sekitar.' },
        { name: 'River Camp', image: 'media/img/rivercamp.jpeg', description: 'Habiskan malam di tepi sungai dan di tengah alam, berkemah di bawah bintang dengan suara alam.' },
        { name: 'Bird Watching', image: 'media/img/birdwatching.jpg', description: 'Amati berbagai jenis burung endemik dan migran di habitat aslinya. Sebuah surga bagi para pecinta ornitologi.' },
        { name: 'Golo Depet', image: 'media/img/golodepet.jpg', description: 'Saksikan pemandangan matahari terbit atau terbenam yang spektakuler dari puncak bukit Golo Depet.' },
        { name: 'Waterfall', image: 'media/img/airterjun.jpeg', description: 'Segarkan diri dengan bermain air di bawah gemuruh air terjun yang jernih dan alami.' },
        { name: 'Tarian Caci', image: 'media/img/tarian.png', description: 'Saksikan tarian perang tradisional yang penuh energi dan makna budaya, sebuah pertunjukan seni yang memukau.' },
        { name: 'Ritual Penti', image: 'media/img/penti.png', description: 'Ikuti upacara adat Penti, sebuah ritual syukur atas hasil panen yang kaya akan nilai-nilai budaya lokal.' },
        { name: 'Menganyam Tikar', image: 'media/img/tikar3.jpg', description: 'Belajar seni menganyam tikar dari para pengrajin lokal. Setiap proses diajari dan diberi arahan jelas.' },
        { name: 'Membuat Tuak', image: 'media/img/tuak.jpeg', description: 'Lihat langsung proses pembuatan tuak, minuman tradisional dari fermentasi nira aren, dan cicipi rasanya yang khas.' },
        { name: 'Mancing', image: 'media/img/mancing.jpeg', description: 'Uji keberuntungan dan kesabaran Anda dengan memancing di danau atau sungai yang kaya akan ikan, di mana atraksi ini dilakukan di setiap kolam ikan yang telah disediakan oleh masyarakat dan ikan hasil tangkapan dapat ditimbang untuk dibawa pulang atau dinikmati langsung di tempat.' },
        { name: 'Flying Fox', image: 'media/img/flyingfox1.jpeg', description: 'Rasakan adrenalin terpacu saat meluncur dari ketinggian dengan flying fox sepanjang 200 meter di atas persawahan masyarakat setempat, melintasi lembah dengan pemandangan indah dan sensasi alam persawahan yang menakjubkan.' },
        { name: 'Gua Watu Tahang', image: 'media/img/gua2.jpg', description: 'Jelajahi misteri Gua Watu Tahang, sebuah gua alam dengan formasi batuan stalaktit dan stalagmit yang unik yang terletak tepat di bawah persawahan masyarakat, di dalamnya terdapat banyak batu kapur dan dialiri air yang bersumber dari mata air.' },
        { name: 'Bersepeda', image: 'media/img/sepeda1.jpeg', description: 'Nikmati udara segar pedesaan dengan bersepeda menyusuri jalan setapak, persawahan, dan perkampungan warga.' },
        { name: 'Danau Rana Mese', image: 'media/img/danau1.jpg', description: 'Kunjungi keindahan Danau Rana Mese, sebuah danau kawah yang tenang dengan panorama alam yang menyejukkan mata, terletak di kawasan Hutan Lindung dan menjadi sumber air minum untuk masyarakat Golo Loni khususnya serta masyarakat Kabupaten Manggarai Timur umumnya.' },
        { name: 'Adopsi Bambu', image: 'media/img/bambu1.jpeg', description: 'Nikmati wisata edukasi yang mengajak Anda untuk terlibat aktif dalam konservasi. Dengan mengadopsi rumpun bambu, Anda turut serta menjaga kelestarian lingkungan. Pertumbuhan tanaman Anda akan di-update secara berkala sebagai bukti nyata kontribusi Anda.' },
        { name: 'Produksi Kopi & Aren', image: 'media/img/kopi.jpg', description: 'Belajar langsung dari para petani bagaimana biji kopi dan nira aren dipanen, diolah, hingga menjadi produk siap saji seperti kopi nikmat dan gula aren. Atraksi wisata ini akan membawa Anda melihat seluruh prosesnya, dari bahan mentah hingga produk akhir, memberikan wawasan mendalam yang tak terlupakan. ' }
    ];

    const AttractionGallery = document.getElementById('AttractionGallery');

    attractionsList.forEach((attraction, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                <div class="card-bg" style="background-image: url('${attraction.image}')"></div>
                <div class="card-overlay"></div>
                <div class="card-badge">#${index + 1}</div>
                <div class="card-content">
                    <h2 class="card-title">${attraction.name}</h2>
                    <p class="card-description">${attraction.description}</p>
                </div>
            `;

        // Toggle active state on click/tap
        card.addEventListener('click', function () {
            // Remove active from all other cards
            document.querySelectorAll('.card').forEach(c => {
                if (c !== card) c.classList.remove('active');
            });
            // Toggle current card
            this.classList.toggle('active');
        });

        AttractionGallery.appendChild(card);
    });

    // Close card when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.card')) {
            document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
        }
    });

    // Paket
    const packages = {
        halfDay: {
            title: "Paket ½ Day",
            price: "Rp 500.000",
            activities: [
                "Treking ke sawah",
                "Air Terjun Cunca Caru",
                "Flying Fox"
            ]
        },
        camping: {
            title: "Paket Camping",
            price: "Rp 2.000.000",
            activities: [
                "Welcoming drink homestay",
                "Menganyam Tikar",
                "Visitasi ke Tradisional House",
                "Visitasi Screen House Of Modern / green House",
                "Petik Kopi",
                "Mata Air Kramat",
                "Flying Fox",
                "Treking ke sawah",
                "Air Terjun Cunca Caru",
                "Mancing"
            ]
        },
        twoDay: {
            title: "Paket 2 Day",
            price: "Rp 3.500.000",
            activities: [
                "Farmstay Wae Kempo",
                "Pante Tuak / Lolu Tuak",
                "Petik kopi",
                "Menganyam tikar",
                "Mata Air Keramat",
                "Visitasi Screen House Of Modern / green House",
                "Visitasi ke Tradisional House",
                "Flying Fox",
                "Penelusuran gua Watu Tahang",
                "Treking ke sawah",
                "Air Terjun Cunca Caru",
                "River Tubing (min. 5 orang )",
                "Petik kopi",
                "Proses Memasak Moke",
                "Mancing",
                "Visitasi ke Rumah UMKM ( Tenun kain Adat, olahan kripik pegagan,olahan kopi khas Golo Loni, dll )"
            ]
        }
    };

    // --- DOM ELEMENT SELECTION ---
    // Select all necessary elements from the page once.
    const modal = document.getElementById('modal');
    const modalTitleContainer = document.getElementById('modalTitleContainer');
    const activityList = document.getElementById('activityList');
    const detailButtons = document.querySelectorAll('.details-button');
    const closeModalButton = document.getElementById('closeModalButton');

    // --- FUNCTIONS ---

    /**
     * Opens the modal and populates it with data for the selected package.
     * @param {string} packageType - The key for the package (e.g., 'halfDay').
     */
    function openModal(packageType) {
        const packageData = packages[packageType];

        // Gracefully handle cases where the package data might not exist
        if (!packageData) {
            console.error(`Package data for "${packageType}" not found.`);
            return;
        }

        // Populate modal with title and price
        modalTitleContainer.innerHTML = `
            ${packageData.title}
            <span class="modal-price">${packageData.price}</span>
        `;

        // Clear any previous activity list items
        activityList.innerHTML = '';

        // Populate activities
        packageData.activities.forEach((activity, index) => {
            const li = document.createElement('li');
            li.className = 'activity-item';
            li.innerHTML = `
                <div class="activity-number">${index + 1}</div>
                <div class="activity-text">${activity}</div>
            `;
            activityList.appendChild(li);
        });

        // Show the modal and prevent background scrolling
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Closes the modal.
     */
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }


    // --- EVENT LISTENERS ---

    // 1. Add a click listener to each "Lihat Paket" button.
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the package type from the button's 'data-package' attribute
            const packageType = button.dataset.package;
            openModal(packageType);
        });
    });

    // 2. Add a click listener to the close button (the '×').
    closeModalButton.addEventListener('click', closeModal);

    // 3. Add a click listener to the modal overlay (the dark background).
    // This allows users to close the modal by clicking outside the content area.
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 4. Add a keyboard listener to close the modal with the 'Escape' key.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });



    // Product
    const filterControls = document.querySelector('.filter-controls');
    const sliderTrack = document.querySelector('.slider-track');
    const allSlides = Array.from(sliderTrack.children);
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    // --- State ---
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let visibleSlides = [...allSlides];

    // --- Functions ---

    function getSlidesPerView() {
        const windowWidth = window.innerWidth;
        if (windowWidth > 1024) return 4;
        if (windowWidth > 768) return 3;
        if (windowWidth > 480) return 2;
        return 1;
    }

    function applyFilter(filter) {
        // Hide or show slides based on the filter
        allSlides.forEach(slide => {
            const category = slide.dataset.category;
            if (filter === 'all' || category === filter) {
                slide.classList.remove('hidden');
            } else {
                slide.classList.add('hidden');
            }
        });

        // Update the array of visible slides
        visibleSlides = allSlides.filter(slide => !slide.classList.contains('hidden'));

        // Reset the slider to the beginning
        currentIndex = 0;
        updateSliderPosition();
    }

    function updateSliderPosition() {
        // Handle empty filter result
        if (visibleSlides.length === 0) {
            sliderTrack.style.transform = 'translateX(0px)';
            updateButtons();
            return;
        }

        const slideWidth = visibleSlides[0].getBoundingClientRect().width;
        const gap = parseInt(window.getComputedStyle(sliderTrack).gap);
        const totalSlideWidth = slideWidth + gap;

        let offset = 0;
        if (slidesPerView === 1 && window.innerWidth <= 480) {
            const containerWidth = document.querySelector('.slider-container').offsetWidth;
            offset = (containerWidth - slideWidth) / 2;
        }

        sliderTrack.style.transform = `translateX(${-(currentIndex * totalSlideWidth) + offset}px)`;
        updateButtons();
    }

    function updateButtons() {
        if (visibleSlides.length === 0) {
            prevButton.disabled = true;
            nextButton.disabled = true;
            return;
        }

        prevButton.disabled = currentIndex === 0;
        const maxIndex = visibleSlides.length - slidesPerView;
        nextButton.disabled = currentIndex >= maxIndex;
    }

    function moveToNextSlide() {
        const maxIndex = visibleSlides.length - slidesPerView;
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
    }

    function moveToPrevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    }

    function handleResize() {
        const newSlidesPerView = getSlidesPerView();
        if (slidesPerView !== newSlidesPerView) {
            slidesPerView = newSlidesPerView;
            const maxIndex = Math.max(0, visibleSlides.length - slidesPerView);
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
        }
        updateSliderPosition();
    }

    function handleFilterClick(e) {
        const button = e.target.closest('.filter-btn');
        if (!button) return;

        // Update active button state
        filterControls.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        // Apply the filter
        const filter = button.dataset.filter;
        applyFilter(filter);
    }

    // --- Event Listeners ---
    filterControls.addEventListener('click', handleFilterClick);
    nextButton.addEventListener('click', moveToNextSlide);
    prevButton.addEventListener('click', moveToPrevSlide);
    window.addEventListener('resize', handleResize);

    // --- Initial Setup ---
    updateSliderPosition();
});
// --- Offset fix ---
let offset = 0;
if (slidesPerView === 1 && window.innerWidth <= 480) {
    const containerWidth = document.querySelector('.slider-container').offsetWidth;
    const slideWidth = visibleSlides[0].getBoundingClientRect().width;
    offset = (containerWidth - slideWidth) / 2; // This correctly calculates the centering space
}
sliderTrack.style.transform = `translateX(${-(currentIndex * totalSlideWidth) + offset}px)`;