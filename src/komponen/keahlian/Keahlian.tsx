import { type Component, onMount } from "solid-js";
import KartuKeahlian from "./KartuKeahlian";
import { daftarKeahlian } from "../../data/keahlian";
import { animasiStagger } from "../../animasi/animasiMasuk";

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
  });

  return (
    <section id="keahlian" class="bg-cyan-100 px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Keahlian</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
