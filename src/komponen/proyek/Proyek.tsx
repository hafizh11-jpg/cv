import { type Component, onMount } from "solid-js";
import KartuProyek from "./KartuProyek";
import { daftarProyek } from "../../data/proyek";
import { animasiStagger } from "../../animasi/animasiMasuk";

// Bagian proyek
const Proyek: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiStagger(".kartu-proyek", 100);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
  });

  return (
    <section id="proyek" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Proyek</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarProyek.map((p) => (
            <div class="kartu-proyek opacity-0">
              <KartuProyek proyek={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyek;
