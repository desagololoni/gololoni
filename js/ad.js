const attractionsList = [
    {
        name: 'Trekking',
        image: 'media/img/treking.png',
        description: 'Jelajahi keindahan alam Golo Loni melalui jalur trekking yang dikelilingi alam. Nikmati perjalanan melintasi sawah berundak yang hijau, menyeberangi sungai jernih, melewati kebun kopi dan perumahan warga, hingga menemukan air terjun yang menyegarkan.',
        galleryImages: [
            'media/img/treking.png',
            'media/img/trek1.jpg',
            'media/img/trek2.jpg',
            'media/img/trek4.jpg'
        ],
        highlights: [
            '<strong>Pemandangan Beragam:</strong> Rasakan pemandangan lanskap alam yang menakjubkan dari persawahan warga, hutan rimbun, hingga gemuruh air terjun dalam satu perjalanan.',
            '<strong>Interaksi Lokal:</strong> Bertukar sapa dengan para petani di ladang, melihat aktivitas mereka secara langsung, dan belajar tentang kearifan lokal dalam mengelola alam dan desa.',
            '<strong>Jalur Terpandu Aman:</strong> Pemandu lokal kami akan memimpin Anda melalui rute terbaik yang aman dan penuh dengan tempat-tempat indah dan menarik.'
        ]
    },
    {
        name: 'River Tubing',
        image: 'media/img/rivertubbing.jpg',
        description: 'Rasakan petualangan seru dan ekstrim dengan menyusuri aliran sungai jernih di Golo Loni menggunakan ban. Nikmati sensasi meluncur di atas air, melewati jeram-jeram kecil, dan dikelilingi oleh hijaunya pepohonan serta udara segar. Berani mencoba?',
        galleryImages: [
            'media/img/rivertubbing.jpg',
            'media/img/rivertubbing2.jpeg',
            'media/img/rivertubbing3.jpg',
            'media/img/rivertubbing4.jpg'
        ],
        highlights: [
            '<strong>Aktifitas Adrenalin:</strong> Rasakan sensasi meluncur di atas air dengan kecepatan yang menyenangkan, melewati jeram-jeram kecil yang menantang.',
            '<strong>Aktifitas Kebersamaan:</strong> Cocok untuk dilakukan bersama kelompok atau keluarga, mempererat ikatan melalui pengalaman keberanian dan ekstrimis bersama',
            '<strong>Kesegaran Alam:</strong> Air sungai yang sejuk dan udara bersih akan memulihkan energi dan keseruan melepaskan pikiran Anda dari stres pikiran.'
        ]
    },
    {
        name: 'River Camp',
        image: 'media/img/rivercamp.jpeg',
        description: 'Rasakan sensasi berkemah di tepi sungai. Jauh dari kebisingan kota, Anda akan ditemani oleh suara gemericik air, nyanyian serangga malam, dan beratapkan langit penuh bintang yang menakjubkan.',
        galleryImages: [
            'media/img/rivercamp.jpeg'
        ],
        highlights: [
            '<strong>Kembali ke Alam:</strong> Pengalaman tidur di alam terbuka yang otentik, di mana Anda benar-benar bisa merasa menyatu dengan lingkungan sekitar.',
            '<strong>Api Unggun & Kebersamaan:</strong> Nikmati momen hangat berkumpul di sekitar api unggun, berbagi cerita, atau sekadar menikmati ketenangan malam.',
            '<strong>Suara Alam Terapeutik:</strong> Suara aliran sungai yang konstan menjadi latar musik alami yang menenangkan, membantu Anda tidur lebih nyenyak.'
        ]
    },
    {
        name: 'Bird Watching',
        image: 'media/img/birdwatching.jpg',
        description: 'Golo Loni adalah surga bagi para pengamat burung. Bawa teropong Anda dan bersiaplah untuk mengamati berbagai jenis burung endemik dan migran di habitat aslinya. Ditambah lokasinya yang dekat dengan Danau Rana Mese, menambah keindahan pengalaman bird watching Anda.',
        galleryImages: [
            'media/img/birdwatching.jpg',
            'media/img/danau2.jpg',
        ],
        highlights: [
            '<strong>Keanekaragaman Spesies:</strong> Temukan spesies burung unik yang mungkin tidak akan Anda temui di tempat lain.',
            '<strong>Spot Pengamatan Terbaik:</strong> Pemandu lokal akan membawa Anda ke titik-titik pengamatan strategis pada waktu yang tepat untuk memaksimalkan perjumpaan.',
            '<strong>Pengalaman Edukatif:</strong> Belajar spesies burung dan melatih kesabaran serta kepekaan Anda terhadap alam sekitar dalam suasana yang tenang dan damai.'
        ]
    },
    {
        name: 'Golo Depet',
        image: 'media/img/golodepet.jpg',
        description: 'Taklukkan puncak bukit Golo Depet dan saksikan panorama matahari terbit atau terbenam yang paling spektakuler. Dari puncak, Anda bisa melihat hamparan lembah, desa-desa di kejauhan, dan langit yang berubah warna menjadi lukisan alam. Disetai dengan banyak spot foto dan dekorasi.',
        galleryImages: [
            'media/img/golodepet.jpg',
            'media/img/golodepet2.jpg',
            'media/img/golodepet3.jpg',
        ],
        highlights: [
            '<strong>Momen Emas Fotografi:</strong> Tempat ini adalah lokasi impian para fotografer untuk mengabadikan siluet dan cahaya keemasan saat fajar atau senja di desa Golo Loni.',
            '<strong>Pemandangan 360 Derajat:</strong> Nikmati pemandangan sekeliling yang menyajikan keindahan Golo Loni dari ketinggian.',
            '<strong>Tantangan yang Terbayar:</strong> Perjalanan singkat menuju puncak akan terbayar lunas dengan pemandangan yang didapatkan.'
        ]
    },
    {
        name: 'Waterfall',
        image: 'media/img/airterjun.jpeg',
        description: 'Temukan kesegaran di bawah gemuruh air terjun alami Golo Loni. Airnya yang jernih dan dingin langsung dari pegunungan adalah tempat yang sempurna untuk bermain air, berenang, atau sekadar duduk bersantai menikmati kekuatan airnya.',
        galleryImages: [
            'media/img/airterjun.jpeg',
            'media/img/airterjun2.jpg'
        ],
        highlights: [
            '<strong>Kesegaran Instan:</strong> Lepaskan lelah dengan berendam di kolam alami air terjun yang sejuk dan bebas dari polusi.',
            '<strong>Suara yang Menenangkan:</strong> Deru air yang jatuh adalah bentuk terapi suara alami yang efektif untuk meredakan stres.',
            '<strong>Permata Tersembunyi:</strong> Lokasinya yang seringkali tersembunyi memberikan nuansa petualangan saat menuju ke sana dan privasi saat menikmatinya.'
        ]
    },
    {
        name: 'Tarian Caci',
        image: 'media/img/tarian2.png',
        description: 'Saksikan Tarian Caci, sebuah tarian perang tradisional NTT Manggarai yang penuh energi dan makna. Tarian ini merupakan perpaduan antara tarian perang dan permainan rakyat, yang dimainkan oleh dua orang laki-laki yang bertarung menggunakan cambuk dan perisai sebagai simbol keberanian dan sportivitas, kekompakan dan kehormatan',
        galleryImages: [
            'media/img/tarian2.png',
            'media/img/tarian3.png',
            'media/img/tarian.png',
        ],
        highlights: [
            '<strong>Warisan Budaya Otentik:</strong> Melihat langsung salah satu tradisi paling ikonik dari budaya Manggarai yang masih dilakukan turun-menurun.',
            '<strong>Atraksi Penuh Adrenalin:</strong> Ketangkasan para penari dalam menyerang dan bertahan akan membuat Anda terpukau dan heran.',
            '<strong>Makna Filosofis Mendalam:</strong> Pelajari tentang simbolisme di balik setiap gerakan, kostum, dan alat yang digunakan dalam tarian.'
        ]
    },
    {
        name: 'Ritual Penti',
        image: 'media/img/penti2.jpg',
        description: 'Jika berkunjung pada waktu yang tepat, Anda berkesempatan untuk menyaksikan upacara adat Penti. Ini adalah ritual akbar sebagai wujud syukur atas hasil panen yang melimpah, sekaligus permohonan berkah untuk musim tanam berikutnya.',
        galleryImages: [
            'media/img/penti2.jpg',
            'media/img/penti1.jpg',
            'media/img/penti3.jpg',
            'media/img/penti.png',
        ],
        highlights: [
            '<strong>Pengalaman Budaya Langka:</strong> Menyaksikan sebuah ritual komunal yang masih dijaga keasliannya dari generasi ke generasi.',
            '<strong>Kebersamaan Komunitas:</strong> Lihat bagaimana seluruh masyarakat desa berkumpul, memasak bersama, dan merayakan sebagai satu keluarga besar.',
            '<strong>Rangkaian Upacara Sakral:</strong> Dari penyembelihan hewan kurban hingga doa-doa yang dipanjatkan, setiap bagian dari Penti memiliki makna yang kuat.'
        ]
    },
    {
        name: 'Menganyam Tikar',
        image: 'media/img/tikar3.jpg',
        description: 'Ikuti aktifitas menganyam tikar bersama para pengrajin lokal. Anda akan diajari langkah demi langkah, mulai dari persiapan hingga membentuk pola-pola tradisional yang indah. Bawa pulang hasil karya Anda sendiri!',
        galleryImages: [
            'media/img/tikar3.jpg',
            'media/img/tikar2.jpg',
            'media/img/tikar1.jpg',
        ],
        highlights: [
            '<strong>Belajar Langsung dari Ahlinya:</strong> Dapatkan pengetahuan dan teknik menganyam langsung dari para pengrajin yang mahir.',
            '<strong>Keterampilan Baru:</strong> Selain pengalaman, Anda juga akan membawa pulang keterampilan baru yang berharga.',
            '<strong>Hasil Berharga:</strong> Tikar atau produk anyaman hasil karya tangan Anda akan menjadi oleh-oleh yang paling berkesan.'
        ]
    },
    {
        name: 'Membuat Tuak',
        image: 'media/img/tuak.jpeg',
        description: 'Lihat langsung proses pembuatan tuak, minuman tradisional dari fermentasi nira. Pelajari bagaimana para penyadap memanjat pohon aren, mengambil niranya, hingga proses fermentasi alami. Jangan lewatkan kesempatan untuk mencicipi rasanya yang khas!',
        galleryImages: [
            'media/img/tuak.jpeg',
        ],
        highlights: [
            '<strong>Dari Pohon ke Gelas:</strong> Saksikan keseluruhan proses pembuatan tuak yang masih sangat tradisional dan alami.',
            '<strong>Cita Rasa Khas:</strong> Cicipi tuak manis (segar) dan tuak yang telah difermentasi untuk mengetahui perbedaannya.',
            '<strong>Edukasi Minuman Lokal:</strong> Pahami peran tuak dalam budaya lokal, baik sebagai minuman sehari-hari maupun untuk keperluan upacara adat.'
        ]
    },
    {
        name: 'Mancing',
        image: 'media/img/mancing.jpeg',
        description: 'Uji keberuntungan dan kesabaran Anda dengan memancing di kolam-kolam ikan milik masyarakat. Ikan hasil tangkapan bisa langsung ditimbang untuk dibawa pulang sebagai oleh-oleh segar, atau dinikmati langsung dengan dibakar di tempat.',
        galleryImages: [
            'media/img/mancing.jpeg',
            'media/img/mancing2.jpg',
            'media/img/mancing3.jpg',
            'media/img/mancing4.jpeg',
        ],
        highlights: [
            '<strong>Aktivitas Santai & Menenangkan:</strong> Cara yang sempurna untuk bersantai sambil menikmati suasana pedesaan yang damai.',
            '<strong>Makan Hasil Pancingan Sendiri:</strong> Tidak ada yang lebih nikmat dari menyantap ikan segar hasil jerih payah Anda sendiri, dibakar dengan bumbu sederhana.',
            '<strong>Mencoba Memancing:</strong> Anda dapat mencoba berbagai teknik memancing dan belajar dari para pemancing lokal.'
        ]
    },
    {
        name: 'Flying Fox',
        image: 'media/img/flyingfox1.jpeg',
        description: 'Rasakan adrenalin dengan meluncur di atas ketinggian menggunakan flying fox! Lintasan udara ini akan membawa Anda terbang di atas hamparan sawah, memberikan pemandangan tinggi yang menakjubkan.',
        galleryImages: [
            'media/img/flyingfox1.jpeg',
            'media/img/flyingfox2.jpeg',
            'media/img/flyingfox3.jpeg',
        ],
        highlights: [
            '<strong>Kegiatan Adrenalin:</strong> Rasakan keseruan meluncur di udara dalam kegiatan flying fox.',
            '<strong>Pemandangan Sawah dari Atas:</strong> Dapatkan perspektif mata burung dari hijaunya persawahan yang menjadi ciri khas Golo Loni.',
            '<strong>Keamanan Terjamin:</strong> Dilengkapi dengan peralatan berstandar internasional dan dipandu oleh instruktur yang terlatih.'
        ]
    },
    {
        name: 'Gua Watu Tahang',
        image: 'media/img/gua2.jpg',
        description: 'Jelajahi misteri Gua Watu Tahang, sebuah gua alam yang terletak tepat di bawah area persawahan. Masuki dunia bawah tanah yang dihiasi formasi batuan stalaktit dan stalagmit serta tumbuhan vegetasi.',
        galleryImages: [
            'media/img/gua2.jpg',
            'media/img/gua.jpeg',
            'media/img/gua3.jpeg',
            'media/img/gua4.jpg',

        ],
        highlights: [
            '<strong>Petualangan Bawah Tanah:</strong> Rasakan sensasi memasuki dunia yang berbeda saat Anda menyusuri lorong-lorong gua yang gelap.',
            '<strong>Lokasi Unik:</strong> Fakta bahwa gua ini berada di bawah sawah aktif menjadikannya sebuah keunikan geologis yang jarang ditemui.'
        ]
    },
    {
        name: 'Bersepeda',
        image: 'media/img/sepeda3.jpg',
        description: 'Nikmati udara segar pedesaan dengan menjelajahi Golo Loni menggunakan sepeda. Lewati perkampungan warga yang ramah, dan berhenti di setiap sudut yang indah untuk menikmati pemandangan dan berfoto.',
        galleryImages: [
            'media/img/sepeda3.jpg',
            'media/img/sepeda1.jpeg',
            'media/img/sepeda2.jpeg',
        ],
        highlights: [
            '<strong>Menjelajah dengan Santai:</strong> Anda bebas menentukan ritme perjalanan, berhenti kapan saja untuk berfoto atau sekadar menikmati suasana.',
            '<strong>Ramah Lingkungan:</strong> Cara terbaik untuk menikmati alam tanpa meninggalkan jejak karbon.',
            '<strong>Lebih Dekat dengan Kehidupan Desa:</strong> Bersepeda memungkinkan Anda untuk berinteraksi lebih dekat dengan lingkungan dan masyarakat yang Anda lewati.'
        ]
    },
    {
        name: 'Danau Rana Mese',
        image: 'media/img/danau1.jpg',
        description: 'Kunjungi keindahan Danau Rana Mese, sebuah danau kawah yang tenang di tengah kawasan Hutan Lindung. Panorama alamnya yang menyejukkan mata dan suasananya yang damai menjadikannya tempat yang sempurna untuk relaksasi.',
        galleryImages: [
            'media/img/danau1.jpg',
            'media/img/danau2.jpg',
            'media/img/danau3.jpg',
        ],
        highlights: [
            '<strong>Oasis Ketenangan:</strong> Jauhkan diri dari kebisingan dan temukan kedamaian di tepi danau yang dikelilingi oleh hutan lebat.',
            '<strong>Penting Secara Ekologis:</strong> Danau ini merupakan sumber air vital bagi masyarakat sekitar dan menjadi bagian penting dari ekosistem hutan lindung.',
            '<strong>Spot Piknik Ideal:</strong> Bawa bekal Anda dan nikmati makan siang dengan pemandangan danau yang mempesona.'
        ]
    },
    {
        name: 'Adopsi Bambu',
        image: 'media/img/bambu1.jpeg',
        description: 'Ikut serta dalam pelestarian lingkungan melalui program Adopsi Bambu. Ini adalah wisata edukasi yang mengajak Anda terlibat aktif dalam konservasi tumbuhan.',
        galleryImages: [
            'media/img/bambu1.jpeg',
            'media/img/bambu2.jpeg',
            'media/img/bambu3.jpg',
        ],
        highlights: [
            '<strong>Wisata yang Memberi Dampak:</strong> Liburan Anda tidak hanya menyenangkan tetapi juga memberikan kontribusi positif langsung bagi lingkungan.',
            '<strong>Edukasi Konservasi:</strong> Pelajari pentingnya tanaman bambu bagi ekosistem, terutama dalam menjaga sumber mata air.',
        ]
    },
    {
        name: 'Produksi Kopi & Aren',
        image: 'media/img/kopi.jpg',
        description: 'Ikuti perjalanan biji kopi dan nira aren dari kebun hingga ke cangkir Anda. Belajar langsung dari para petani cara memanen, mengolah, hingga menyajikan produk siap saji. Sebuah wawasan mendalam tentang dua komoditas utama Golo Loni.',
        galleryImages: [
            'media/img/kopi.jpg',
            'media/img/kopi2.jpg',
            'media/img/kopi4.jpg',
            'media/img/kopi3.jpg',
            'media/img/kedaikopi.jpg',
        ],
        highlights: [
            '<strong>Pengalaman dari Hulu ke Hilir:</strong> Pahami seluruh proses produksi, memberikan apresiasi yang lebih dalam pada setiap tegukan kopi atau manisnya gula aren.',
            '<strong>Cicipi Produk Segar:</strong> Nikmati kopi yang diseduh dari biji yang baru diolah atau gula aren murni langsung dari tempat produksinya.',
            '<strong>Dukung Petani Lokal:</strong> Keikutsertaan Anda dalam atraksi ini menjadi bentuk dukungan langsung terhadap kerja keras para petani kopi dan aren di desa.'
        ]
    }
];

let currentImageIndex = 0;
let currentAttractionImages = [];

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const attractionId = parseInt(urlParams.get('id'), 10);

    // Get all page elements
    const titleElement = document.getElementById('attraction-title');
    const mainImageElement = document.getElementById('attraction-main-image');
    const descriptionElement = document.getElementById('attraction-description');
    const pageTitle = document.querySelector('title');
    const thumbnailGallery = document.getElementById('thumbnail-gallery');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    
    // ✨ NEW: Get highlight elements
    const highlightsContainer = document.getElementById('attraction-highlights');
    const highlightsList = document.getElementById('highlights-list');


    if (!isNaN(attractionId) && attractionId >= 0 && attractionId < attractionsList.length) {
        const attraction = attractionsList[attractionId];

        // --- Populate Main Info (No change here) ---
        pageTitle.textContent = attraction.name;
        titleElement.textContent = attraction.name;
        descriptionElement.textContent = attraction.description;

        // --- Populate Image Gallery (No change here) ---
        currentAttractionImages = attraction.galleryImages || [attraction.image];
        if (currentAttractionImages.length > 0) {
            mainImageElement.src = currentAttractionImages[0];
            mainImageElement.alt = attraction.name + " image 1";
        } else {
            mainImageElement.style.display = 'none';
        }
        currentAttractionImages.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imgSrc;
            thumbnail.alt = `${attraction.name} thumbnail ${index + 1}`;
            thumbnail.className = 'thumbnail';
            thumbnail.dataset.index = index;
            thumbnail.addEventListener('click', () => showImage(index));
            thumbnailGallery.appendChild(thumbnail);
        });
        showImage(0);
        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + currentAttractionImages.length) % currentAttractionImages.length;
            showImage(currentImageIndex);
        });
        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % currentAttractionImages.length;
            showImage(currentImageIndex);
        });

        // ✨ NEW: Populate Highlights Section
        if (attraction.highlights && attraction.highlights.length > 0) {
            highlightsContainer.style.display = 'block'; // Make sure the container is visible
            highlightsList.innerHTML = ''; // Clear any old list items

            attraction.highlights.forEach(point => {
                const li = document.createElement('li');
                li.innerHTML = point; // Use innerHTML to render the <strong> tag
                highlightsList.appendChild(li);
            });
        } else {
            highlightsContainer.style.display = 'none'; // Hide the section if no highlights exist
        }

    } else {
        // Error handling remains the same
        titleElement.textContent = "Attraction Not Found";
        // ...
    }
};

// showImage function remains the same
function showImage(index) {
    const mainImageElement = document.getElementById('attraction-main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    mainImageElement.src = currentAttractionImages[index];
    mainImageElement.alt = document.getElementById('attraction-title').textContent + " image " + (index + 1);
    currentImageIndex = index;
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            thumb.classList.remove('active');
        }
    });
}