import Reveal from './Reveal.jsx'
import { galleryList } from '../data/content.js'

export default function Galeri() {
  return (
    <section id="galeri">
      <Reveal>
        <span className="eyebrow" style={{ background: 'rgba(58,166,255,0.16)', color: 'var(--blue-deep)' }}>
          Dokumentasi
        </span>
        <h2 className="section-title">Galeri Foto & Video</h2>
        <p className="section-sub">Momen-momen kehidupan dan kegiatan warga Desa Sukamaju.</p>
      </Reveal>
      <Reveal className="gallery-grid">
        {galleryList.map((item) => (
          <div
            className="gallery-item glass"
            key={item.tag}
            style={{ height: item.height, background: item.bg }}
          >
            <img
              src={item.img}
              alt={item.tag}
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <span className="gtag">{item.tag}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
