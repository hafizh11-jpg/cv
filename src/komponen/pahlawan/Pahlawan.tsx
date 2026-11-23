import { type Component, onMount } from "solid-js";
import { lazy } from "solid-js";
const LatarTigaD = lazy(() => import("./LatarTigaD"));
import Tombol from "../umum/Tombol";
import IkonMerek from "../umum/IkonMerek";
import { profil } from "../../data/profil";
import { animasiStagger } from "../../animasi/animasiMasuk";
import { acakKartu } from "../../animasi/animasiLanjutan";
import {
  animasiHurufJudul,
  timelineHero,
  animasiScrambleJudul,
} from "../../animasi/animasiLanjutan";

// Bagian hero / pahlawan
const Pahlawan: Component = () => {
  let refJudul: HTMLHeadingElement | undefined;
  let refGelar: HTMLHeadingElement | undefined;
  let refTeks: HTMLParagraphElement | undefined;

  onMount(() => {
    animasiHurufJudul(refJudul ?? null);
    timelineHero(refJudul ?? null, refTeks ?? null);
    animasiScrambleJudul(refGelar ?? null, profil.gelar);
    animasiStagger(".hero-aksi > *", 150);
  });

  return (
    <section
      id="beranda"
      class="relative flex min-h-[90vh] items-center overflow-hidden px-4 py-20"
    >
      <LatarTigaD />
      <div class="konten-utama mx-auto max-w-6xl">
        <div class="max-w-3xl">
          <p class="mb-4 inline-block border-2 border-black bg-cyan-300 px-3 py-1 text-sm font-bold uppercase">
            Halo, saya
          </p>
          <h1
            ref={refJudul}
            class="text-5xl font-black leading-none md:text-7xl opacity-0"
          >
            {profil.nama}
          </h1>
          <h2 ref={refGelar} class="mt-4 text-2xl font-bold md:text-3xl">{profil.gelar}</h2>
          <p
            ref={refTeks}
            class="mt-6 max-w-xl text-lg opacity-0"
          >
            {profil.ringkasan}
          </p>
          <div class="hero-aksi wadah-hero mt-8 flex flex-wrap gap-4">
            <Tombol href={`mailto:${profil.email}`}>
            <span class="flex items-center gap-2">
              <IkonMerek nama="Email" ukuran={18} />
              Hubungi Saya
            </span>
          </Tombol>
            <Tombol jenis="sekunder" href={profil.tautanGithub}>
              <span class="flex items-center gap-2">
                <IkonMerek nama="GitHub" ukuran={18} />
                GitHub
              </span>
            </Tombol>
          </div>
          <button class="brutal-btn mt-4 bg-cyan-300 px-3 py-2 text-sm" onClick={() => acakKartu(".wadah-hero")}>Acak Tombol</button>
        </div>
      </div>
    </section>
  );
};

export default Pahlawan;
