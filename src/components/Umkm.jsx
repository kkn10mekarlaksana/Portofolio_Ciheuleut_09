import Reveal from "./Reveal.jsx";
import { umkmList } from "../data/content.js";
import { GiSewingNeedle, GiBasket, GiHoneyJar, GiWool } from "react-icons/gi";
import LazyImage from "./LazyImage.jsx";

const iconMap = {
  sewing: GiSewingNeedle,
  basket: GiBasket,
  honey: GiHoneyJar,
  wool: GiWool,
};

export default function Umkm() {
  return (
    <section id="umkm">
      <Reveal>
        <span
          className="eyebrow"
          style={{ background: "rgba(232,154,44,0.16)", color: "#B36B0F" }}
        >
          Produk Lokal
        </span>
        <h2 className="section-title">Produk UMKM Unggulan</h2>
        <p className="section-sub">
          Karya warga desa yang siap menemani hari Anda.
        </p>
      </Reveal>
      <Reveal className="umkm-grid">
        {umkmList.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={item.title} className="umkm-card glass">
              <div className="umkm-media" style={{ background: item.bg }}>
                <LazyImage
                  src={item.img}
                  alt={item.title}
                  onError={(e) => {
                    e.currentTarget.parentElement.nextSibling.style.display = "flex";
                  }}
                />
                <span
                  className="umkm-fallback-icon"
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={30} color="white" />
                </span>
              </div>
              <div className="umkm-info">
                <h4>{item.title}</h4>
                <div className="umkm-price">{item.price}</div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
