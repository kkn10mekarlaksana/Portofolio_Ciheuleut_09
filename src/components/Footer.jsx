import Reveal from "./Reveal.jsx";

export default function Footer() {
  return (
    <footer>
      <Reveal as="div" className="footer-glass glass">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="dot"></span> Kp. Ciheuleut RW.009
            </div>
            <p>
              Website resmi Kp. Ciheuleut RW.009 — merangkai potensi pertanian,
              UMKM, peternakan, dan budaya dalam satu genggaman digital.
            </p>
          </div>
          <div className="footer-col">
            <h5>Jelajahi</h5>
            <a href="#tentang">Tentang Desa</a>
            <a href="#potensi">Potensi Desa</a>
            <a href="#peta">Peta</a>
            <a href="#peternakan">Peternakan</a>
          </div>
          <div className="footer-col">
            <h5>Layanan</h5>
            <a href="#umkm">Produk UMKM</a>
            <a href="#event">Kalender Event</a>
            <a href="#galeri">Galeri</a>
          </div>
          <div className="footer-col">
            <h5>Sosial</h5>
            <a
              href="https://instagram.com/kpciheuleut"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@kpciheuleut"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KKN 10 MEKARLAKSANA Seluruh hak cipta dilindungi.</span>
          <span>Dibuat dengan 💚 untuk warga kampung Ciheuleut Rw.009</span>
        </div>
      </Reveal>
    </footer>
  );
}
