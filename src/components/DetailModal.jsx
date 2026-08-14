import { useEffect } from "react";
import LazyImage from "./LazyImage.jsx";

export default function DetailModal({ item, onClose, type }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="detail-modal-backdrop" onMouseDown={onClose} role="presentation">
      <article
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="detail-modal-close" type="button" onClick={onClose} aria-label="Tutup detail">
          ×
        </button>
        <div className="detail-modal-image" style={{ background: item.bg || item.iconBg }}>
          <LazyImage src={item.img} alt={item.title} eager />
        </div>
        <div className="detail-modal-content">
          <span className="detail-modal-type">{type}</span>
          <h3 id="detail-modal-title">{item.title}</h3>
          <p>{item.fullDesc || item.desc}</p>
        </div>
      </article>
    </div>
  );
}
