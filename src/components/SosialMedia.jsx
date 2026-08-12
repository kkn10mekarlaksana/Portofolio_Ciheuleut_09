import Reveal from "./Reveal.jsx";
import { sosmedList } from "../data/content.js";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const iconMap = {
  Instagram: FaInstagram,
  Facebook: FaFacebook,
  TikTok: FaTiktok,
  YouTube: FaYoutube,
};

export default function SosialMedia() {
  return (
    <section id="sosmed">
      <Reveal>
        <span
          className="eyebrow"
          style={{
            background: "rgba(58,166,255,0.16)",
            color: "var(--blue-deep)",
          }}
        >
          Terhubung Dengan Kami
        </span>
        <h2 className="section-title">Sosial Media</h2>
        <p className="section-sub">
          Ikuti akun resmi Kp. Ciheuleut RW.009 untuk update kegiatan terbaru.
        </p>
      </Reveal>
      <Reveal className="sosmed-grid">
        {sosmedList.map((s) => {
          const Icon = iconMap[s.title];
          return (
            <a
              key={s.title}
              className="sosmed-card glass"
              href={s.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="sosmed-icon">
                <Icon size={26} color="white" />
              </div>
              <h4>{s.title}</h4>
              <p>{s.handle}</p>
            </a>
          );
        })}
      </Reveal>
    </section>
  );
}
