import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import { profil } from "../../data/profil";
import { animasiMasuk } from "../../animasi/animasiMasuk";

// Bagian tentang saya
const Tentang: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiMasuk(m.target as Element);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
  });

  return (
    <section id="tentang" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Tentang Saya</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <Kartu warna="#ffffff">
            <p class="text-lg leading-relaxed">{profil.ringkasan}</p>
            <ul class="mt-6 space-y-2 text-sm font-bold">
              <li>Email: {profil.email}</li>
              <li>Telepon: {profil.telepon}</li>
              <li>GitHub: {profil.github}</li>
              <li>Lokasi: {profil.lokasi}</li>
            </ul>
          </Kartu>
          <Kartu warna="#ffd600">
            <h3 class="text-2xl font-black">Fokus Kerja</h3>
            <p class="mt-3">
              Membangun backend yang andal, API yang aman, dan aplikasi
              lintas platform. Mengutamakan performa, keamanan, dan
              kemudahan perawatan kode.
            </p>
          </Kartu>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
