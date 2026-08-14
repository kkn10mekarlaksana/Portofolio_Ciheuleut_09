import Reveal from "./Reveal.jsx";
import { aboutStats } from "../data/content.js";
import LazyImage from "./LazyImage.jsx";

export default function About() {
  return (
    <section id="tentang">
      <Reveal className="about-grid">
        <div className="about-visual glass">
          <LazyImage src="/images/hero/pemandangan2.jpg" alt="Suasana Kp. Ciheuleut" />
        </div>
        <div className="about-card glass" style={{ borderRadius: "36px" }}>
          <span
            className="eyebrow"
            style={{ background: "rgba(52,199,123,0.16)" }}
          >
            Tentang Kami
          </span>
          <h2 className="section-title">
            Kampung yang Tumbuh dari Gotong Royong
          </h2>
          <p style={{ color: "var(--ink-soft)" }}>
            Ciheuleut terletak di kaki bukit dengan aliran air yang jernih.
            Sejak dahulu, warga hidup dari hasil peternakan, hasil bumi, dan
            kerajinan tangan, kini tumbuh menjadi kampung yang terbuka bagi
            wisatawan dan pegiat UMKM digital.
          </p>
          <div className="about-stats">
            {aboutStats.map((s) => (
              <div key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
