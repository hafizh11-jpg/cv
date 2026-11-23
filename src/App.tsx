import { type Component, onMount } from "solid-js";
import Tajuk from "./komponen/tajuk/Tajuk";
import Pahlawan from "./komponen/pahlawan/Pahlawan";
import Tentang from "./komponen/tentang/Tentang";
import Keahlian from "./komponen/keahlian/Keahlian";
import Pengalaman from "./komponen/pengalaman/Pengalaman";
import Layanan from "./komponen/layanan/Layanan";
import Kontak from "./komponen/kontak/Kontak";
import Kaki from "./komponen/kaki/Kaki";
import { cegahClickjacking } from "./keamanan/proteksi";
import { animasiMagnet, animasiProgressScroll } from "./animasi/animasiLanjutan";

// Komponen utama aplikasi
const App: Component = () => {
  onMount(() => {
    cegahClickjacking();
    animasiMagnet(".brutal-btn");
    animasiProgressScroll("progress-scroll");
  });

  return (
    <div class="min-h-screen">
      <div id="progress-scroll" class="fixed left-0 top-0 z-[60] h-1 w-0 bg-orange-400" />
      <Tajuk />
      <main>
        <Pahlawan />
        <Tentang />
        <Keahlian />
        <Pengalaman />
        <Layanan />
        <Kontak />
      </main>
      <Kaki />
    </div>
  );
};

export default App;
