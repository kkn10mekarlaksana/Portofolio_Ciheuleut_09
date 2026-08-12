import Reveal from "./Reveal.jsx";
import { potensiList } from "../data/content.js";
import { GiWheat, GiBasket, GiCow, GiDramaMasks } from "react-icons/gi";

const iconMap = {
  wheat: GiWheat,
  basket: GiBasket,
  cow: GiCow,
  drama: GiDramaMasks,
};

export default function Potensi() {
  return (
    <section id="potensi">
      <Reveal>
        <span
          className="eyebrow"
          style={{ background: "rgba(52,199,123,0.16)" }}
        >
          Unggulan Desa
        </span>
        <h2 className="section-title">Potensi Desa</h2>
        <p className="section-sub">
          Empat sektor utama yang menjadi tulang punggung ekonomi dan budaya
          masyarakat.
        </p>
      </Reveal>
      <Reveal className="potensi-grid">
        {potensiList.map((p) => {
          const Icon = iconMap[p.icon];
          return (
            <div className="potensi-card glass" key={p.title}>
              <div className="potensi-icon" style={{ background: p.iconBg }}>
                <Icon size={26} color="white" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span
                className="potensi-tag"
                style={{ background: p.tagBg, color: p.tagColor }}
              >
                {p.tag}
              </span>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
