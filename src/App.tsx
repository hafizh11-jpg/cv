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

// Komponen utama aplikasi
const App: Component = () => {
  onMount(() => {
    cegahClickjacking();
  });

  return (
    <div class="min-h-screen">
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
