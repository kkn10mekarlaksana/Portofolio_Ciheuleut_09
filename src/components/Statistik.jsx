import Reveal from "./Reveal.jsx";
import useCounter from "../hooks/useCounter.js";
import { stats } from "../data/content.js";

function StatCard({ count, label }) {
  const { ref, value } = useCounter(count);
  return (
    <div className="stat-card glass">
      <div className="stat-num" ref={ref}>
        {value.toLocaleString("id-ID")}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Statistik() {
  return (
    <section id="statistik">
      <Reveal>
        <span
          className="eyebrow"
          style={{
            background: "rgba(58,166,255,0.16)",
            color: "var(--blue-deep)",
          }}
        >
          Data Terkini
        </span>
        <h2 className="section-title">Statistik Penduduk</h2>
        <p className="section-sub">
          Gambaran demografis warga Kp. Ciheuleut berdasarkan data pembaruan
          terakhir.
        </p>
      </Reveal>
      <Reveal className="stat-grid">
        {stats.map((s) => (
          <StatCard key={s.label} count={s.count} label={s.label} />
        ))}
      </Reveal>
    </section>
  );
}
