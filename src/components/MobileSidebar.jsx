import { navItems } from "../data/content.js";

export default function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <aside className={`sidebar-panel glass-strong ${isOpen ? "open" : ""}`}>
        <button
          className="sidebar-close"
          onClick={onClose}
          aria-label="Tutup menu"
        >
          ✕
        </button>
        <div className="sidebar-title">Menu</div>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose}>
            {item.label}
          </a>
        ))}
        <a href="#sosmed" className="sidebar-cta" onClick={onClose}>
          Sosial Media
        </a>
      </aside>
    </>
  );
}
