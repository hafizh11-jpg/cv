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
import { animasiDraggable } from "./animasi/animasiLanjutan";
import { animasiPengikutKursor } from "./animasi/animasiLanjutan";

// Komponen utama aplikasi
const App: Component = () => {
  let refPengikut: HTMLDivElement | undefined;
  onMount(() => {
    cegahClickjacking();
    animasiPengikutKursor(refPengikut ?? null);
    animasiDraggable(".brutal-card, .brutal-btn");
  });

  return (
    <div class="min-h-screen">
      <div
        ref={refPengikut}
        class="pointer-events-none fixed left-0 top-0 z-[70] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-orange-400 mix-blend-difference"
      />
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
