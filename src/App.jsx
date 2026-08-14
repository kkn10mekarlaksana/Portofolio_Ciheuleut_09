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
import PageLoader from "./components/PageLoader.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const { dark, toggle } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => setIsLoading(false);
    const fallback = window.setTimeout(finishLoading, 2500);
    window.addEventListener("load", finishLoading, { once: true });
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <>
      {isLoading && <PageLoader />}
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
