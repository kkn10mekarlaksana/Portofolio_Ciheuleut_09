import { useState } from "react";
import Reveal from "./Reveal.jsx";
import DetailModal from "./DetailModal.jsx";
import { potensiList } from "../data/content.js";
import { GiWheat, GiBasket, GiCow, GiDramaMasks } from "react-icons/gi";

const iconMap = {
  wheat: GiWheat,
  basket: GiBasket,
  cow: GiCow,
  drama: GiDramaMasks,
};

export default function Potensi() {
  const [selectedPotensi, setSelectedPotensi] = useState(null);

  return (
    <section id="potensi">
      <Reveal>
        <span
          className="eyebrow"
          style={{ background: "rgba(52,199,123,0.16)" }}
        >
          Unggulan Desa
        </span>
        <h2 className="section-title">Potensi Wilayah Ciheuleut</h2>
        <p className="section-sub">
          Empat sektor utama yang menjadi tulang punggung ekonomi dan budaya
          masyarakat.
        </p>
      </Reveal>
      <Reveal className="potensi-grid">
        {potensiList.map((p) => {
          const Icon = iconMap[p.icon];
          return (
            <button
              className="potensi-card glass"
              key={p.title}
              type="button"
              onClick={() => setSelectedPotensi(p)}
              aria-label={`Lihat detail ${p.title}`}
            >
              <div className="potensi-icon" style={{ background: p.iconBg }}>
                <Icon size={26} color="white" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="potensi-media" style={{ background: p.iconBg }}>
                <img
                  src={p.img}
                  alt=""
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <span
                className="potensi-tag"
                style={{ background: p.tagBg, color: p.tagColor }}
              >
                {p.tag}
              </span>
            </button>
          );
        })}
      </Reveal>
      {selectedPotensi && (
        <DetailModal
          item={selectedPotensi}
          type="Potensi Desa"
          onClose={() => setSelectedPotensi(null)}
        />
      )}
    </section>
  );
}
