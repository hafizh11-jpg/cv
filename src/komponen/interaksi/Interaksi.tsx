import { type Component, onMount } from "solid-js";
import Kartu from "../umum/Kartu";
import {
  animasiDraggable,
  animasiJalurGerak,
  animasiMorphSvg,
  animasiPengikutKursor,
  animasiLayout,
  animasiWaapi,
} from "../../animasi/animasiLanjutan";

// Bagian interaktif (menampilkan berbagai fitur anime.js)
const Interaksi: Component = () => {
  let refRoot: HTMLDivElement | undefined;
  let refKartuDrag: HTMLDivElement | undefined;
  let refGerak: HTMLDivElement | undefined;
  let refMorph: SVGPathElement | undefined;
  let refPengikut: HTMLDivElement | undefined;
  let refLayout: HTMLDivElement | undefined;
  let layoutInstance: any;

  onMount(() => {
    animasiDraggable(".kartu-drag");
    animasiJalurGerak(refGerak ?? null, "#jalur-gerak");
    if (refMorph) {
      refMorph.setAttribute("data-asal", refMorph.getAttribute("d") || "");
      animasiMorphSvg(refMorph, "M10,30 A20,20 0 1,0 50,30 A20,20 0 1,0 10,30 Z");
    }
    animasiPengikutKursor(refPengikut ?? null);
    layoutInstance = animasiLayout(refLayout ?? null);
    animasiWaapi(refRoot ?? null);
  });

  const acakUrutan = (): void => {
    if (!refLayout || !layoutInstance) return;
    const kartu = Array.from(refLayout.children) as HTMLElement[];
    layoutInstance.record();
    // acak urutan
    for (let i = kartu.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      refLayout.appendChild(kartu[j]);
    }
    layoutInstance.animate();
  };

  return (
    <section id="interaksi" class="px-4 py-20">
      <div class="mx-auto max-w-6xl" ref={refRoot}>
        <h2 class="mb-8 text-4xl font-black uppercase">Interaksi</h2>

        <div class="grid gap-6 md:grid-cols-2">
          <Kartu warna="#ffffff">
            <h3 class="text-xl font-black">Kartu Bisa Diseret</h3>
            <p class="mt-2 text-sm">
              Seret kartu ini ke mana saja. Lepaskan untuk animasi elastis.
            </p>
            <div
              ref={refKartuDrag}
              class="kartu-drag brutal-card mt-4 flex h-24 w-24 cursor-grab items-center justify-center bg-yellow-300 font-black"
            >
              DRAG
            </div>
          </Kartu>

          <Kartu warna="#ffffff">
            <h3 class="text-xl font-black">Gerak Sepanjang Jalur</h3>
            <p class="mt-2 text-sm">Elemen bergerak mengikuti path SVG.</p>
            <svg class="mt-4 h-24 w-full" viewBox="0 0 200 60">
              <path
                id="jalur-gerak"
                d="M10,30 C50,0 150,60 190,30"
                fill="none"
                stroke="#0a0a0a"
                stroke-width="2"
              />
            </svg>
            <div
              ref={refGerak}
              class="absolute h-4 w-4 rounded-full border-2 border-black bg-orange-400"
            />
          </Kartu>

          <Kartu warna="#ffffff">
            <h3 class="text-xl font-black">Morph SVG</h3>
            <p class="mt-2 text-sm">Arahkan kursor ke bentuk di bawah.</p>
            <svg class="mt-4 h-24 w-24" viewBox="0 0 60 60">
              <path
                ref={refMorph}
                d="M30,5 A25,25 0 1,1 29.9,5 Z"
                fill="#00e5ff"
                stroke="#0a0a0a"
                stroke-width="2"
              />
            </svg>
          </Kartu>

          <Kartu warna="#ffffff">
            <h3 class="text-xl font-black">Layout FLIP</h3>
            <p class="mt-2 text-sm">Acak urutan kartu dengan animasi FLIP.</p>
            <div ref={refLayout} class="mt-4 flex gap-2">
              <div class="brutal-card flex h-12 w-12 items-center justify-center bg-pink-300 font-black">
                A
              </div>
              <div class="brutal-card flex h-12 w-12 items-center justify-center bg-green-300 font-black">
                B
              </div>
              <div class="brutal-card flex h-12 w-12 items-center justify-center bg-yellow-300 font-black">
                C
              </div>
            </div>
            <button
              class="brutal-btn mt-4 bg-orange-400 px-3 py-2 text-sm"
              onClick={acakUrutan}
            >
              Acak
            </button>
          </Kartu>
        </div>

        <div
          ref={refPengikut}
          class="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-orange-400"
        />
      </div>
    </section>
  );
};

export default Interaksi;
