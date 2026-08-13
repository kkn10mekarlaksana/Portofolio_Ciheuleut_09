# Kampung Ciheuleut RW.009 — React (Vite)

## Menjalankan proyek

```bash
npm install
npm run dev       # mode development, buka http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # preview hasil build
```

## Struktur folder

```
desa-Ciheuleut-react/
├── index.html                 # entry HTML untuk Vite
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                # render <App /> ke #root
    ├── App.jsx                 # merangkai semua section
    ├── styles/
    │   └── global.css          # semua CSS (variabel warna, glass, animasi, responsif, dark mode)
    ├── data/
    │   └── content.js          # semua data statis (potensi, wisata, umkm, event, galeri, berita, dsb)
    ├── hooks/
    │   ├── useTheme.js         # mode gelap/terang + deteksi preferensi sistem
    │   ├── useReveal.js         # animasi scroll-reveal (IntersectionObserver)
    │   ├── useCounter.js        # animasi angka statistik penduduk
    │   └── useNavScroll.js      # navbar menyusut saat discroll
    └── components/
        ├── Reveal.jsx           # pembungkus generik untuk animasi reveal
        ├── Ambient.jsx          # blob liquid-glass di background
        ├── Navbar.jsx           # navbar atas ala Dynamic Island
        ├── Hero.jsx             # hero + SVG desa + parallax chip
        ├── About.jsx            # Tentang Desa
        ├── Statistik.jsx        # Statistik Penduduk
        ├── Potensi.jsx          # Potensi Desa (4 kartu)
        ├── PetaInteraktif.jsx   # Peta Interaktif 3D (tilt mouse)
        ├── Wisata.jsx           # Destinasi Wisata (carousel)
        ├── Umkm.jsx             # Produk UMKM
        ├── EventCalendar.jsx    # Kalender Event
        ├── Galeri.jsx           # Galeri Foto & Video
        ├── Berita.jsx           # Berita Desa
        ├── Kontak.jsx           # Form Kontak
        └── Footer.jsx           # Footer
```

**Total: 24 file** (3 file konfigurasi/entry + 1 CSS + 1 data + 5 hooks + 14 komponen).

