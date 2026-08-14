import Reveal from "./Reveal.jsx";
import { peternakanList } from "../data/content.js";
import { GiSheep, GiGoat, GiCow } from "react-icons/gi";
import LazyImage from "./LazyImage.jsx";

const iconMap = { sheep: GiSheep, goat: GiGoat, cow: GiCow };

export default function Peternakan() {
  return (
    <section id="peternakan">
      <Reveal>
        <span
          className="eyebrow"
          style={{
            background: "rgba(58,166,255,0.16)",
            color: "var(--blue-deep)",
          }}
        >
          Sektor Peternakan
        </span>
        <h2 className="section-title">Peternakan Warga</h2>
        <p className="section-sub">
          Geser untuk melihat jenis ternak yang dikelola warga Kp. Ciheuleut
          RW.009.
        </p>
      </Reveal>
      <Reveal className="wisata-track">
        {peternakanList.map((p) => {
          const Icon = iconMap[p.icon];
          return (
            <div className="wisata-card glass" key={p.title}>
              <div className="wisata-media" style={{ background: p.bg }}>
                <LazyImage
                  src={p.img}
                  alt={p.title}
                />
              </div>
              <div className="wisata-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="wisata-meta">
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Icon size={16} /> {p.jumlah}
                  </span>
                  <span>{p.meta}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
