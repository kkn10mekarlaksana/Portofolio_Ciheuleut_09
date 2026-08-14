import { useRef } from "react";
import LazyImage from "./LazyImage.jsx";

export default function Hero() {
  const stageRef = useRef(null);

  return (
    <section className="hero" id="home">
      <div className="hero-stage" ref={stageRef}>
        <div className="hero-scene">
          <LazyImage
            src="/images/hero/pemandangan1.jpg"
            alt="Pemandangan Kp. Ciheuleut"
            eager
          />
        </div>
        <div className="hero-tint"></div>

        <div className="hero-orbit glass-strong ellipse">
          <strong>25</strong>
          <span>Pelaku UMKM</span>
        </div>

        <div className="hero-content">
          <span
            className="hero-badge glass"
            style={{ border: "1px solid rgba(255,255,255,0.4)" }}
          >
            Website Resmi
          </span>
          <h1>Kp. Ciheuleut RW.009</h1>
          <h1>Guyub Akur, Lembur Makmur</h1>
          <p>
            Menjelajahi potensi pertanian, UMKM, peternakan, dan budaya kampung
            kami — dikemas dalam satu ruang digital yang jernih dan hidup.
          </p>
          <div className="hero-actions">
            <a href="#potensi" className="btn btn-primary">
              Jelajahi Potensi Desa
            </a>
            <a href="#peta" className="btn btn-ghost">
              Lihat Peta Interaktif
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
