import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import Tombol from "../umum/Tombol";
import FormulirKontak from "./FormulirKontak";
import { profil } from "../../data/profil";
import IkonMerek from "../umum/IkonMerek";
import { animasiMasuk } from "../../animasi/animasiMasuk";
import { acakKartu } from "../../animasi/animasiLanjutan";

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
    <section id="kontak" class="px-4 py-28">
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
            <div class="wadah-kontak flex flex-wrap gap-3">
              <Tombol href={`mailto:${profil.email}`}>
              <span class="flex items-center gap-2">
                <IkonMerek nama="Email" ukuran={18} />
                Email
              </span>
            </Tombol>
              <Tombol
                jenis="sekunder"
                href={`https://wa.me/62${profil.telepon.replace(/\D/g, "").replace(/^0/, "")}`}
              >
                <span class="flex items-center gap-2">
                  <IkonMerek nama="WhatsApp" ukuran={18} />
                  WhatsApp
                </span>
              </Tombol>
              <Tombol jenis="sekunder" href="https://www.instagram.com/hafizh_mh11?gwpx=YnM4ODNhZ3R4MDJs">
                <span class="flex items-center gap-2">
                  <IkonMerek nama="Instagram" ukuran={18} />
                  Instagram
                </span>
              </Tombol>
              <Tombol jenis="sekunder" href={profil.tautanGithub}>
                <span class="flex items-center gap-2">
                  <IkonMerek nama="GitHub" ukuran={18} />
                  GitHub
                </span>
              </Tombol>
            </div>
            <button class="brutal-btn mt-2 bg-cyan-300 px-3 py-2 text-sm" onClick={() => acakKartu(".wadah-kontak")}>Acak Tombol</button>
          </div>
          <FormulirKontak />
        </div>
      </div>
    </section>
  );
};

export default Kontak;
