import Reveal from './Reveal.jsx'
import { eventList } from '../data/content.js'

export default function EventCalendar() {
  return (
    <section id="event">
      <Reveal>
        <span className="eyebrow" style={{ background: 'rgba(52,199,123,0.16)' }}>Agenda</span>
        <h2 className="section-title">Kalender Event Desa</h2>
        <p className="section-sub">Ikuti kegiatan dan perayaan yang berlangsung di desa kami.</p>
      </Reveal>
      <Reveal className="event-list">
        {eventList.map((ev) => (
          <div className="event-row glass" key={ev.title}>
            <div className="event-date" style={{ background: ev.bg }}>
              <strong>{ev.day}</strong>
              <span>{ev.month}</span>
            </div>
            <div className="event-detail">
              <h4>{ev.title}</h4>
              <p>{ev.desc}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
