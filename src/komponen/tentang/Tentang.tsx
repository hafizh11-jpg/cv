import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import { profil } from "../../data/profil";
import { animasiMasuk } from "../../animasi/animasiMasuk";
import { animasiCounter, animasiGarisSvg, acakKartu } from "../../animasi/animasiLanjutan";

// Bagian tentang saya
const Tentang: Component = () => {
  let refBagian: HTMLDivElement | undefined;
  let refCounter: HTMLSpanElement | undefined;

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
    animasiCounter(refCounter ?? null, 3);
    animasiGarisSvg(".garis-tentang line");
  });

  return (
    <section id="tentang" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Tentang Saya</h2>
        <button class="brutal-btn mb-6 bg-cyan-300 px-3 py-2 text-sm" onClick={() => acakKartu(".wadah-tentang")}>Acak Kartu</button>
        <svg class="garis-tentang mb-8 h-2 w-full" viewBox="0 0 100 2" preserveAspectRatio="none">
          <line x1="0" y1="1" x2="100" y2="1" stroke="#0a0a0a" stroke-width="2" />
        </svg>
        <div class="wadah-tentang grid gap-6 md:grid-cols-2">
          <Kartu warna="#ffffff">
            <p class="text-lg leading-relaxed">{profil.ringkasan}</p>
            <ul class="mt-6 space-y-2 text-sm font-bold">
              <li>Email: {profil.email}</li>
              <li>Telepon: {profil.telepon}</li>
              <li>GitHub: {profil.github}</li>
              <li>Lokasi: {profil.lokasi}</li>
            </ul>
            <p class="mt-6 text-4xl font-black">
              <span ref={refCounter}>0</span>+
            </p>
            <p class="text-sm font-bold">Tahun pengalaman freelance</p>
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
