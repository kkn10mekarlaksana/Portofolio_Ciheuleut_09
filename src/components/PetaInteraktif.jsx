import Reveal from './Reveal.jsx'
import { kontakInfo } from '../data/content.js'

const alamat = kontakInfo.find((i) => i.title === 'Alamat')?.text || 'Kp. Ciheuleut RW.009'
const mapQuery = encodeURIComponent(alamat)

export default function PetaInteraktif() {
  return (
    <section id="peta">
      <Reveal className="map-wrap">
        <div className="map-stage glass">
          <iframe
            className="map-embed"
            title="Peta Lokasi Kp. Ciheuleut RW.009"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="map-info">
          <span className="eyebrow" style={{ background: 'rgba(58,166,255,0.16)', color: 'var(--blue-deep)' }}>
            Peta Interaktif
          </span>
          <h2 className="section-title">Lokasi Kp. Ciheuleut RW.009</h2>
          <p style={{ color: 'var(--ink-soft)' }}>{alamat}</p>
          <p style={{ color: 'var(--ink-soft)' }}>
            Geser dan zoom peta di samping untuk melihat lokasi secara langsung, atau buka penuh di Google Maps.
          </p>
          <a
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: '12px' }}
            href={`https://www.google.com/maps/search/${mapQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            Buka di Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
