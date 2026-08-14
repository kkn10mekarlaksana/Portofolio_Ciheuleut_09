import Reveal from './Reveal.jsx'
import { beritaList } from '../data/content.js'
import LazyImage from './LazyImage.jsx'

export default function Berita() {
  return (
    <section id="berita">
      <Reveal>
        <span className="eyebrow" style={{ background: 'rgba(52,199,123,0.16)' }}>Informasi</span>
        <h2 className="section-title">Berita Desa</h2>
        <p className="section-sub">Kabar terbaru seputar pembangunan dan kegiatan desa.</p>
      </Reveal>
      <Reveal className="berita-grid">
        {beritaList.map((b) => (
          <div className="berita-card glass" key={b.title}>
            <div className="berita-media" style={{ background: b.bg }}>
              <LazyImage
                src={b.img}
                alt={b.title}
              />
            </div>
            <div className="berita-body">
              <div className="berita-date">{b.date}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
