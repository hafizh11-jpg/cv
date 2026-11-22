import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import { daftarSertifikat } from "../../data/sertifikat";
import { animasiStagger } from "../../animasi/animasiMasuk";

// Bagian sertifikat
const Sertifikat: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiStagger(".item-sertifikat", 80);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
  });

  return (
    <section id="sertifikat" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Sertifikat</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {daftarSertifikat.map((s) => (
            <div class="item-sertifikat opacity-0">
              <Kartu warna="#ffffff">
                <h3 class="font-black">{s.nama}</h3>
                <p class="mt-2 text-sm">{s.penerbit}</p>
                <p class="mt-1 text-xs font-bold">{s.tahun}</p>
              </Kartu>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
