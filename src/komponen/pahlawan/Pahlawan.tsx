import { type Component, onMount } from "solid-js";
import { lazy } from "solid-js";
const LatarTigaD = lazy(() => import("./LatarTigaD"));
import Tombol from "../umum/Tombol";
import IkonMerek from "../umum/IkonMerek";
import { profil } from "../../data/profil";
import { animasiStagger } from "../../animasi/animasiMasuk";
import {
  animasiHurufJudul,
  timelineHero,
  animasiParalaks,
  animasiMelayang,
  animasiPulsa,
} from "../../animasi/animasiLanjutan";

// Bagian hero / pahlawan
const Pahlawan: Component = () => {
  let refJudul: HTMLHeadingElement | undefined;
  let refTeks: HTMLParagraphElement | undefined;

  onMount(() => {
    animasiHurufJudul(refJudul ?? null);
    timelineHero(refJudul ?? null, refTeks ?? null);
    animasiStagger(".hero-aksi > *", 150);
    animasiMelayang(".hero-orb");
    animasiPulsa(".hero-orb");
    if (refJudul) animasiParalaks(refJudul);
  });

  return (
    <section
      id="beranda"
      class="relative flex min-h-[90vh] items-center overflow-hidden px-4 py-20"
    >
      <LatarTigaD />
      <div class="hero-orb absolute right-10 top-20 h-24 w-24 border-4 border-black bg-pink-300" />
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
          <h2 class="mt-4 text-2xl font-bold md:text-3xl">{profil.gelar}</h2>
          <p
            ref={refTeks}
            class="mt-6 max-w-xl text-lg opacity-0"
          >
            {profil.ringkasan}
          </p>
          <div class="hero-aksi mt-8 flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Pahlawan;
