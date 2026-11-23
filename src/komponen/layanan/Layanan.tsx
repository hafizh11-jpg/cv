import { type Component, onMount } from "solid-js";
import { Globe, Database, AppWindow, Monitor, Smartphone } from "lucide-solid";
import Kartu from "../umum/Kartu";
import { daftarLayanan } from "../../data/layanan";
import { animasiStagger } from "../../animasi/animasiMasuk";

// Peta nama layanan ke ikon lucide
const petaIkon: Record<string, Component<{ size?: number }>> = {
  "Static Web": Globe,
  "Dynamic Web": Database,
  "Web App": AppWindow,
  "Desktop App (Online/Offline)": Monitor,
  "Mobile App (Online/Offline)": Smartphone,
};

// Bagian layanan jasa
const Layanan: Component = () => {
  let refBagian: HTMLDivElement | undefined;

  onMount(() => {
    const observer = new IntersectionObserver(
      (masuk) => {
        masuk.forEach((m) => {
          if (m.isIntersecting) animasiStagger(".item-layanan", 80);
        });
      },
      { threshold: 0.2 },
    );
    if (refBagian) observer.observe(refBagian);
  });

  return (
    <section id="layanan" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refBagian}>
        <h2 class="mb-8 text-4xl font-black uppercase">Layanan Jasa</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {daftarLayanan.map((l) => {
            const Ikon = petaIkon[l.nama];
            return (
              <div class="item-layanan opacity-0">
                <Kartu warna="#ffffff">
                  <div class="text-black">
                    {Ikon ? <Ikon size={32} /> : null}
                  </div>
                  <h3 class="mt-3 text-xl font-black">{l.nama}</h3>
                  <p class="mt-2">{l.deskripsi}</p>
                </Kartu>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
