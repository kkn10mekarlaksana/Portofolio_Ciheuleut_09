import Ambient from "./components/Ambient.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Statistik from "./components/Statistik.jsx";
import Potensi from "./components/Potensi.jsx";
import PetaInteraktif from "./components/PetaInteraktif.jsx";
import Peternakan from "./components/Peternakan.jsx";
import Umkm from "./components/Umkm.jsx";
import EventCalendar from "./components/EventCalendar.jsx";
import Galeri from "./components/Galeri.jsx";
import SosialMedia from "./components/SosialMedia.jsx";
import Footer from "./components/Footer.jsx";
import useTheme from "./hooks/useTheme.js";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <>
      <Ambient />
      <Navbar dark={dark} onToggleTheme={toggle} />

      <Hero />
      <About />
      <Statistik />
      <Potensi />
      <PetaInteraktif />
      <Peternakan />
      <Umkm />
      <EventCalendar />
      <Galeri />
      <SosialMedia />
      <Footer />
    </>
  );
}
