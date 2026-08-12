# Tempat Menyimpan Foto Website

Taruh file foto di folder ini (`public/images/...`) dengan NAMA FILE PERSIS seperti di bawah,
supaya otomatis muncul di website tanpa perlu edit kode lagi.

## public/images/peternakan/
- peternakan-domba.jpg
- peternakan-kambing.jpg
- peternakan-sapi.jpg

## public/images/umkm/
- anyaman-kain-lap.jpg
- anyaman-bambu.jpg
- madu-hutan.jpg
- kain-tenun.jpg

## public/images/galeri/
- panen-padi.jpg
- peternakan-warga.jpg
- pasar-tani.jpg
- tari-adat.jpg
- lahan-pertanian.jpg
- kebun-kopi.jpg

## public/images/berita/
- jembatan-ciwangi.jpg
- pelatihan-umkm.jpg

## public/images/potensi/

- pertanian.jpg
- umkm.jpg
- peternakan.jpg
- budaya.jpg

## public/images/event/

- karnaval-kemerdekaan.jpg
- pasar-tani.jpg
- festival-panen.jpg
- panen-kopi.jpg

## Catatan
- Format: .jpg atau .png, orientasi landscape lebih pas untuk sebagian besar kartu.
- Kalau nama file kamu beda, cukup ganti path "img" yang bersangkutan di
  `src/data/content.js` (cari field `img:`), tidak perlu ganti isi komponen.
- Kalau foto belum ditaruh, tampilan tetap rapi karena otomatis jatuh ke warna gradasi.
- Setelah menaruh foto baru, jalankan ulang `npm run dev` (atau refresh browser saja
  kalau dev server sudah jalan) untuk melihat hasilnya.
