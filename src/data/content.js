export const navItems = [
  { href: "#tentang", label: "Tentang" },
  { href: "#potensi", label: "Potensi" },
  { href: "#peta", label: "Peta" },
  { href: "#peternakan", label: "Peternakan" },
  { href: "#umkm", label: "UMKM" },
  { href: "#event", label: "Event" },
  { href: "#galeri", label: "Galeri" },
  { href: "#berita", label: "Berita" },
];

export const aboutStats = [
  { value: "181", label: "Kepala Keluarga" },
  { value: "3", label: "RT" },
  { value: "2015", label: "Tahun Berdiri Rw.009" },
];

export const stats = [
  { count: 664, label: "Total Penduduk" },
  { count: 282, label: "Usia Produktif" },
  { count: 181, label: "Kepala Keluarga" },
  { count: 25, label: "Pelaku UMKM" },
];

export const potensiList = [
  {
    icon: "wheat",
    title: "Pertanian",
    desc: "Padi, kopi, dan hortikultura dikelola dengan sistem irigasi sungai yang berkelanjutan.",
    tag: "120 Ha Lahan",
    iconBg: "linear-gradient(135deg,var(--green-bright),var(--green-deep))",
    tagBg: "rgba(52,199,123,0.16)",
    tagColor: "var(--green-deep)",
  },
  {
    icon: "basket",
    title: "UMKM",
    desc: "Kerajinan anyaman, kopi kemasan, dan makanan olahan khas dipasarkan hingga luar kota.",
    tag: "20 Usaha Kerajinan",
    iconBg: "linear-gradient(135deg,#F6C453,#E89A2C)",
    tagBg: "rgba(232,154,44,0.16)",
    tagColor: "#B36B0F",
  },
  {
    icon: "cow",
    title: "Peternakan",
    desc: "Peternakan domba, kambing, dan sapi dikelola warga sebagai sumber penghasilan tambahan.",
    tag: "5 Peternakan",
    iconBg: "linear-gradient(135deg,#C9975A,#8A5A2B)",
    tagBg: "rgba(138,90,43,0.16)",
    tagColor: "#8A5A2B",
  },
  {
    icon: "drama",
    title: "Budaya",
    desc: "Tari tradisional dan upacara adat rutin digelar sebagai bagian dari identitas desa.",
    tag: "8 Tradisi Lestari",
    iconBg: "linear-gradient(135deg,#7C6FF0,#4B3FCB)",
    tagBg: "rgba(124,111,240,0.16)",
    tagColor: "#4B3FCB",
  },
];

export const peternakanList = [
  {
    title: "Peternakan Domba",
    icon: "sheep",
    jumlah: "Kelompok Ternak Warga",
    desc: "Dikelola warga sebagai usaha sampingan sekaligus pemenuhan kebutuhan hewan kurban.",
    meta: "RW.009",
    bg: "linear-gradient(135deg,#C9975A,#8A5A2B)",
    img: "/images/peternakan/Domba.jpg",
  },
  {
    title: "Peternakan Kambing",
    icon: "goat",
    jumlah: "Kelompok Ternak Warga",
    desc: "Dipelihara secara berkelompok, hasil ternak dijual ke wilayah sekitar.",
    meta: "RW.009",
    bg: "linear-gradient(135deg,#B7906A,#6E4A26)",
    img: "/images/peternakan/kambing.jpg",
  },
  {
    title: "Peternakan Sapi",
    icon: "cow",
    jumlah: "Kelompok Ternak Warga",
    desc: "Sapi potong dan sapi perah dikelola untuk mendukung ekonomi warga.",
    meta: "RW.009",
    bg: "linear-gradient(135deg,#3AA6FF,#0A4D8C)",
    img: "/images/peternakan/sapi.jpg",
  },
];

export const umkmList = [
  {
    icon: "sewing",
    title: "Anyaman Kain Lap",
    price: "Rp 45.000",
    bg: "linear-gradient(135deg,#E7C79A,#B98A4B)",
    img: "/images/umkm/anyaman-kain-lap.jpg",
  },
  {
    icon: "basket",
    title: "Sepatu Kulit",
    price: "Rp 700.000",
    bg: "linear-gradient(135deg,#B7F0D2,#34C77B)",
    img: "/images/umkm/sepatu kulit.jpg",
  },
  {
    icon: "honey",
    title: "Sandal Indian",
    price: "Rp 150.000",
    bg: "linear-gradient(135deg,#CDEBFF,#3AA6FF)",
    img: "/images/umkm/sendal kulit.jpeg",
  },
  {
    icon: "wool",
    title: "Celana Pendek/Kolor",
    price: "Rp 150.000",
    bg: "linear-gradient(135deg,#F4D1DC,#E0709A)",
    img: "/images/umkm/kain-tenun.jpg",
  },
];

export const eventList = [
  {
    day: "17",
    month: "Agu",
    title: "Karnaval Kemerdekaan Desa",
    desc: "Pawai budaya dan lomba warga di sepanjang jalan utama.",
    bg: "linear-gradient(135deg,var(--green-bright),var(--green-deep))",
  },
  {
    day: "03",
    month: "Sep",
    title: "Pasar Tani Bulanan",
    desc: "Bazar hasil pertanian dan produk UMKM di Balai Desa.",
    bg: "linear-gradient(135deg,var(--blue-bright),var(--blue-deep))",
  },
  {
    day: "21",
    month: "Sep",
    title: "Festival Panen Raya",
    desc: "Perayaan hasil panen dengan pertunjukan tari tradisional.",
    bg: "linear-gradient(135deg,#F6C453,#E89A2C)",
  },
];

export const galleryList = [
  {
    tag: "Panen Padi",
    height: 220,
    bg: "linear-gradient(160deg,#34C77B,#0B6E4F)",
    img: "/images/galeri/panen-padi.jpg",
  },
  {
    tag: "Peternakan Warga",
    height: 160,
    bg: "linear-gradient(160deg,#8A5A2B,#C9975A)",
    img: "/images/galeri/peternakan-warga.jpg",
  },
  {
    tag: "Pasar Tani",
    height: 190,
    bg: "linear-gradient(160deg,#F6C453,#E89A2C)",
    img: "/images/galeri/pasar-tani.jpg",
  },
  {
    tag: "Tari Adat",
    height: 150,
    bg: "linear-gradient(160deg,#7C6FF0,#4B3FCB)",
    img: "/images/galeri/tari-adat.jpg",
  },
  {
    tag: "Lahan Pertanian",
    height: 210,
    bg: "linear-gradient(160deg,#34C77B,#3AA6FF)",
    img: "/images/galeri/lahan-pertanian.jpg",
  },
  {
    tag: "Kebun Kopi",
    height: 170,
    bg: "linear-gradient(160deg,#0B6E4F,#0A4D8C)",
    img: "/images/galeri/kebun-kopi.jpg",
  },
];

export const beritaList = [
  {
    date: "24 Juli 2026",
    title: "Renovasi Jembatan Ciwangi Rampung",
    desc: "Akses utama menuju dusun barat kini lebih aman dan lancar.",
    bg: "linear-gradient(135deg,#34C77B,#0B6E4F)",
    img: "/images/berita/jembatan-ciwangi.jpg",
  },
  {
    date: "18 Juli 2026",
    title: "Pelatihan Digital Marketing UMKM",
    desc: "40 pelaku usaha desa mengikuti pelatihan pemasaran daring.",
    bg: "linear-gradient(135deg,#3AA6FF,#0A4D8C)",
    img: "/images/berita/pelatihan-umkm.jpg",
  },
  {
    date: "10 Juli 2026",
    title: "Panen Kopi Meningkat 20%",
    desc: "Cuaca yang mendukung membuat hasil panen kopi tahun ini melimpah.",
    bg: "linear-gradient(135deg,#F6C453,#E89A2C)",
    img: "/images/berita/panen-kopi.jpg",
  },
];

export const kontakInfo = [
  {
    icon: "📍",
    title: "Alamat",
    text: "Jl. Raya Cijapati, Kp. Ciheuleut, Kec. Cikancung, Desa Mekarlaksana, Kab. Bandung, Jawa Barat",
    bg: "linear-gradient(135deg,var(--green-bright),var(--green-deep))",
  },
  {
    icon: "📞",
    title: "Telepon",
    text: "08xxxxxxxxxx",
    bg: "linear-gradient(135deg,var(--blue-bright),var(--blue-deep))",
  },
  {
    icon: "✉️",
    title: "Email",
    text: "ciheuleutmakmur@gmail.com",
    bg: "linear-gradient(135deg,#F6C453,#E89A2C)",
  },
];

export const sosmedList = [
  {
    title: "Instagram",
    handle: "@kpciheuleut",
    url: "https://instagram.com/kpciheuleut",
  },
  {
    title: "Facebook",
    handle: "Kp. Ciheuleut RW.009",
    url: "https://facebook.com/kpciheuleut",
  },
  {
    title: "TikTok",
    handle: "@kpciheuleut",
    url: "https://tiktok.com/@kpciheuleut",
  },
  {
    title: "YouTube",
    handle: "Kp. Ciheuleut Channel",
    url: "https://youtube.com/@kpciheuleut",
  },
];
