const architectureData = {
  categories: [
    {
      id: "cat-001",
      name: "Residential",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      description: "Proyek hunian yang mencakup rumah tinggal, apartemen, dan kompleks perumahan dengan fokus pada kenyamanan dan privasi penghuni.",
      projects: [
        {
          id: "res-001",
          title: "Villa Sejahtera Bali",
          philosophy: "Mengintegrasikan arsitektur tropis modern dengan kearifan lokal Bali, menciptakan harmoni antara ruang dalam dan luar yang mengutamakan sirkulasi udara alami.",
          client: "Keluarga Wijaya",
          location: "Canggu, Bali",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
          ]
        },
        {
          id: "res-002",
          title: "Apartemen The Peak Jakarta",
          philosophy: "Desain vertikal yang memaksimalkan cahaya alami dan pemandangan kota, dengan konsep sustainable living di tengah metropolitan.",
          client: "PT Properti Nusantara",
          location: "Sudirman, Jakarta Pusat",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
          ]
        },
        {
          id: "res-003",
          title: "Cluster Green Valley Bandung",
          philosophy: "Konsep neighborhood yang mengutamakan ruang terbuka hijau dan interaksi sosial antar penghuni dengan desain rumah minimalis kontemporer.",
          client: "Green Valley Developer",
          location: "Dago, Bandung",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
            "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
            "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800"
          ]
        },
      ]
    },




    {
      id: "cat-002",
      name: "Commercial",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      description: "Bangunan komersial seperti perkantoran, retail, dan mixed-use yang dirancang untuk produktivitas dan pengalaman pengunjung optimal.",
      projects: [
        {
          id: "com-001",
          title: "Grand Mall Surabaya",
          philosophy: "Menciptakan destinasi retail yang tidak hanya tempat berbelanja, tetapi juga ruang publik yang mengintegrasikan entertainment, kuliner, dan komunitas.",
          client: "Surabaya Retail Group",
          location: "Tunjungan, Surabaya",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800",
            "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=800",
            "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800"
          ]
        },
        {
          id: "com-002",
          title: "Tech Hub Office Tower",
          philosophy: "Workspace modern yang fleksibel dengan teknologi smart building, mendorong kolaborasi dan inovasi melalui desain open-plan yang adaptif.",
          client: "Digital Ventures Indonesia",
          location: "BSD City, Tangerang",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800"
          ]
        },
        {
          id: "com-003",
          title: "Nusantara Trade Center",
          philosophy: "Mixed-use development yang mengombinasikan office, retail, dan hospitality dalam satu ekosistem terintegrasi dengan fokus pada aksesibilitas.",
          client: "Nusantara Development Corp",
          location: "Thamrin, Jakarta Pusat",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800",
            "https://images.unsplash.com/photo-1565175051034-0c0e9ea81cdc?w=800",
            "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800",
            "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800"
          ]
        }
      ]
    },




    {
      id: "cat-003",
      name: "Industrial",
      image: "https://images.unsplash.com/photo-1580674287256-40141f08e9a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      description: "Fasilitas industri dan manufaktur yang dioptimalkan untuk efisiensi operasional dengan standar keselamatan tinggi.",
      projects: [
        {
          id: "ind-001",
          title: "Pabrik Tekstil Modern Semarang",
          philosophy: "Desain industrial yang mengutamakan efisiensi alur produksi, ventilasi optimal, dan penggunaan energi terbarukan untuk operasional berkelanjutan.",
          client: "PT Tekstil Nusantara Jaya",
          location: "Kawasan Industri Semarang",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
          ]
        },
        {
          id: "ind-002",
          title: "Warehouse Logistik Cikarang",
          philosophy: "Struktur modular yang fleksibel dengan sistem otomasi tinggi, memaksimalkan kapasitas penyimpanan sambil menjaga aksesibilitas dan keamanan.",
          client: "Indonesia Logistics Solutions",
          location: "Cikarang, Bekasi",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800",
            "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800",
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800"
          ]
        }
      ]
    },




    {
      id: "cat-004",
      name: "Educational",
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2969",
      description: "Institusi pendidikan dari sekolah hingga universitas yang mendukung pembelajaran aktif dan perkembangan holistik siswa.",
      projects: [
        {
          id: "edu-001",
          title: "Kampus Innovation University Yogyakarta",
          philosophy: "Learning environment yang inspiratif dengan ruang-ruang kolaboratif, perpustakaan digital, dan area outdoor yang mendorong kreativitas mahasiswa.",
          client: "Yayasan Pendidikan Innovation",
          location: "Sleman, Yogyakarta",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
            "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
            "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800",
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800"
          ]
        },
        {
          id: "edu-002",
          title: "SD Alam Bumi Hijau",
          philosophy: "Sekolah dengan konsep learning through nature, mengintegrasikan ruang kelas dengan taman dan area outdoor untuk pembelajaran eksperiensial.",
          client: "Yayasan Bumi Hijau",
          location: "Bogor, Jawa Barat",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800"
          ]
        },
        {
          id: "edu-003",
          title: "Learning Center Jakarta International School",
          philosophy: "Fasilitas pendidikan multifungsi dengan teknologi canggih, ruang maker space, auditorium, dan area olahraga terintegrasi.",
          client: "Jakarta International School Foundation",
          location: "Kemang, Jakarta Selatan",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
            "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800",
            "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800"
          ]
        }
      ]
    },




    {
      id: "cat-005",
      name: "Institutional",
      image: "https://images.unsplash.com/photo-1758413354836-8623de929782?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      description: "Bangunan pemerintahan, rumah sakit, dan fasilitas publik yang melayani masyarakat dengan standar aksesibilitas universal.",
      projects: [
        {
          id: "ins-001",
          title: "Rumah Sakit Harapan Sehat",
          philosophy: "Healing architecture yang menciptakan lingkungan nyaman dan menenangkan untuk pasien, dengan sirkulasi efisien dan teknologi medis terintegrasi.",
          client: "Yayasan Kesehatan Harapan",
          location: "Denpasar, Bali",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
            "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800"
          ]
        },
        {
          id: "ins-002",
          title: "Kantor Pemerintah Daerah Modern",
          philosophy: "Gedung pemerintahan yang transparan dan terbuka, mencerminkan good governance melalui desain yang accessible dan ramah lingkungan.",
          client: "Pemerintah Kota Bandung",
          location: "Bandung, Jawa Barat",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
            "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800",
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800"
          ]
        },
        {
          id: "ins-003",
          title: "Pusat Layanan Publik Terpadu",
          philosophy: "One-stop service center dengan layout intuitif dan teknologi digital yang mempermudah masyarakat mengakses berbagai layanan pemerintahan.",
          client: "Kementerian PANRB",
          location: "Makassar, Sulawesi Selatan",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800"
          ]
        }
      ]
    },




    {
      id: "cat-006",
      name: "Assembly",
      image: "https://images.unsplash.com/photo-1625297756898-8ab4ac3c5190?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2998",
      description: "Fasilitas berkumpul seperti auditorium, teater, tempat ibadah, dan arena yang dirancang untuk menampung massa dengan kenyamanan optimal.",
      projects: [
        {
          id: "asm-001",
          title: "Masjid Agung Nusantara",
          philosophy: "Arsitektur Islamik kontemporer yang memadukan ornamen tradisional dengan struktur modern, menciptakan ruang spiritual yang megah namun damai.",
          client: "Yayasan Masjid Agung",
          location: "Solo, Jawa Tengah",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800",
            "https://images.unsplash.com/photo-1590701648231-a2c8c2e84f55?w=800",
            "https://images.unsplash.com/photo-1591604466107-ec97de705597?w=800",
            "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
            "https://images.unsplash.com/photo-1609252925148-c5090f7f666a?w=800"
          ]
        },
        {
          id: "asm-002",
          title: "Convention Hall International",
          philosophy: "Venue multifungsi dengan akustik premium dan teknologi AV canggih, dapat dikonfigurasi untuk berbagai skala acara dari seminar hingga konser.",
          client: "PT Indonesia Convention Center",
          location: "Nusa Dua, Bali",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1519167758481-83f29da8c68f?w=800",
            "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800",
            "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800"
          ]
        },
        {
          id: "asm-003",
          title: "Gedung Kesenian Jakarta Heritage",
          philosophy: "Revitalisasi teater klasik dengan preservasi elemen heritage dan upgrade teknologi modern untuk pertunjukan seni kontemporer.",
          client: "Dinas Kebudayaan DKI Jakarta",
          location: "Pasar Baru, Jakarta Pusat",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800",
            "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800",
            "https://images.unsplash.com/photo-1558369981-f9ca78462e61?w=800",
            "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
          ]
        }
      ]
    },




    {
      id: "cat-007",
      name: "Storage",
      image: "https://plus.unsplash.com/premium_photo-1664302452471-164fc2cbaa47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2940",
      description: "Fasilitas penyimpanan dan pergudangan dengan sistem keamanan tinggi dan manajemen inventory efisien, mendukung operasional logistik dan distribusi. ",
      projects: [
        {
          id: "sto-001",
          title: "Cold Storage Agro Indonesia",
          philosophy: "Fasilitas penyimpanan berpendingin dengan sistem kontrol suhu presisi dan insulasi optimal untuk menjaga kesegaran produk pertanian.",
          client: "PT Agro Fresh Indonesia",
          location: "Lampung, Sumatera",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800",
            "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800"
          ]
        },
        {
          id: "sto-002",
          title: "Self Storage Hub Jakarta",
          philosophy: "Konsep mini warehouse modern dengan sistem keamanan 24/7, akses mandiri, dan unit storage fleksibel untuk kebutuhan personal dan bisnis.",
          client: "Storage Solutions Indonesia",
          location: "Kelapa Gading, Jakarta Utara",
          year: 2023,
          images: [
            "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
          ]
        },
        {
          id: "sto-003",
          title: "Distribution Center Nasional",
          philosophy: "Hub distribusi strategis dengan sistem automated warehouse, loading docks efisien, dan integrasi sistem WMS untuk operasional logistik optimal.",
          client: "National Logistics Corp",
          location: "Karawang, Jawa Barat",
          year: 2024,
          images: [
            "https://images.unsplash.com/photo-1565610222536-ef1e872e9dfa?w=800",
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800",
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
          ]
        }
      ]
    }
  ]
};


export default architectureData;

