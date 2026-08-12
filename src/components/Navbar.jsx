import { useState } from "react";
import { navItems } from "../data/content.js";
import useNavScroll from "../hooks/useNavScroll.js";
import MobileSidebar from "./MobileSidebar.jsx";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ dark, onToggleTheme }) {
  const scrolled = useNavScroll();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav
        className="navwrap glass-strong pill"
        style={{
          top: scrolled ? "10px" : "18px",
          width: scrolled ? "min(90%,1040px)" : "min(94%,1100px)",
        }}
      >
        <a href="#home" className="nav-logo">
          <span className="dot"></span> Kp. Ciheuleut
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a href="#sosmed" className="nav-cta">
          Sosial Media
        </a>

        <button
          className="theme-toggle glass"
          onClick={onToggleTheme}
          aria-label="Ganti mode gelap"
        >
          {dark ? (
            <FaSun size={16} color="#F6C453" />
          ) : (
            <FaMoon size={16} color="var(--green-deep)" />
          )}
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setSidebarOpen(true)}
          aria-label="Buka menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
}
