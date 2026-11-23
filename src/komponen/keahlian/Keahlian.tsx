import { type Component, onMount } from "solid-js";
import KartuKeahlian from "./KartuKeahlian";
import { daftarKeahlian } from "../../data/keahlian";
import { animasiStagger } from "../../animasi/animasiMasuk";
import { acakKartu } from "../../animasi/animasiLanjutan";
import { animasiKemiringanHalus } from "../../animasi/animasiLanjutan";

// Bagian keahlian
const Keahlian: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiStagger(".kartu-keahlian", 80);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
    animasiKemiringanHalus(".kartu-keahlian .brutal-card");
  });

  return (
    <section id="keahlian" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Keahlian</h2>
        <button class="brutal-btn mb-6 bg-cyan-300 px-3 py-2 text-sm" onClick={() => acakKartu(".wadah-keahlian")}>Acak Kartu</button>
        <div class="wadah-keahlian grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {daftarKeahlian.map((k) => (
            <div class="kartu-keahlian opacity-0">
              <KartuKeahlian nama={k.nama} tingkat={k.tingkat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Keahlian;
