import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import { daftarPengalaman } from "../../data/pengalaman";
import { animasiStagger } from "../../animasi/animasiMasuk";
import { acakKartu } from "../../animasi/animasiLanjutan";
import { animasiTimelinePengalaman } from "../../animasi/animasiLanjutan";

// Bagian pengalaman
const Pengalaman: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiStagger(".item-pengalaman", 120);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
    animasiTimelinePengalaman(".item-pengalaman");
  });

  return (
    <section id="pengalaman" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Pengalaman</h2>
        <button class="brutal-btn mb-6 bg-cyan-300 px-3 py-2 text-sm" onClick={() => acakKartu(".wadah-pengalaman")}>Acak Kartu</button>
        <div class="wadah-pengalaman space-y-6">
          {daftarPengalaman.map((p) => (
            <div class="item-pengalaman opacity-0">
              <Kartu warna="#ffffff">
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <h3 class="text-xl font-black">{p.judul}</h3>
                  <span class="border-2 border-black bg-yellow-300 px-2 py-1 text-xs font-bold">
                    {p.periode}
                  </span>
                </div>
                <p class="mt-1 font-bold text-orange-600">{p.tempat}</p>
                <p class="mt-3">{p.deskripsi}</p>
              </Kartu>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
