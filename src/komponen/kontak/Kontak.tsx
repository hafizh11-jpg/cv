import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import Tombol from "../umum/Tombol";
import FormulirKontak from "./FormulirKontak";
import { profil } from "../../data/profil";
import { animasiMasuk } from "../../animasi/animasiMasuk";

// Bagian kontak
const Kontak: Component = () => {
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
    <section id="kontak" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Kontak</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="space-y-4">
            <Kartu warna="#ffd600">
              <h3 class="text-xl font-black">Mari Berkolaborasi</h3>
              <p class="mt-2">
                Tersedia untuk pekerjaan dan proyek freelance. Hubungi via
                email atau WhatsApp.
              </p>
            </Kartu>
            <div class="flex flex-wrap gap-3">
              <Tombol href={`mailto:${profil.email}`}>Email</Tombol>
              <Tombol
                jenis="sekunder"
                href={`https://wa.me/62${profil.telepon.replace(/\D/g, "").replace(/^0/, "")}`}
              >
                WhatsApp
              </Tombol>
              <Tombol jenis="sekunder" href={profil.tautanGithub}>
                GitHub
              </Tombol>
            </div>
          </div>
          <FormulirKontak />
        </div>
      </div>
    </section>
  );
};

export default Kontak;
