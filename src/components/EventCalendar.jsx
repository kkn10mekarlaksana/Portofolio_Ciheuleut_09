import { useState } from 'react'
import Reveal from './Reveal.jsx'
import DetailModal from './DetailModal.jsx'
import { eventList } from '../data/content.js'
import LazyImage from './LazyImage.jsx'

export default function EventCalendar() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section id="event">
      <Reveal>
        <span className="eyebrow" style={{ background: 'rgba(52,199,123,0.16)' }}>Agenda</span>
        <h2 className="section-title">Kalender Kegiatan Kp. Ciheuleut</h2>
        <p className="section-sub">Ikuti kegiatan dan perayaan yang berlangsung di wilayah kami.</p>
      </Reveal>
      <Reveal className="event-list">
        {eventList.map((ev) => (
          <button className="event-row glass" type="button" key={ev.title} onClick={() => setSelectedEvent(ev)} aria-label={`Lihat detail ${ev.title}`}>
            <div className="event-date" style={{ background: ev.bg }}>
              <strong>{ev.day}</strong>
              <span>{ev.month}</span>
            </div>
            <div className="event-detail">
              <h4>{ev.title}</h4>
              <p>{ev.desc}</p>
              <div className="event-media" style={{ background: ev.bg }}>
                <LazyImage src={ev.img} alt={`Dokumentasi ${ev.title}`} />
              </div>
            </div>
          </button>
        ))}
      </Reveal>
      {selectedEvent && <DetailModal item={selectedEvent} type="Kalender Event" onClose={() => setSelectedEvent(null)} />}
    </section>
  )
}
