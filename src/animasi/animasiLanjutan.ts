// Animasi lanjutan yang dikurasi agar tidak menyerupai AI slop
import {
  animate,
  stagger,
  splitText,
  onScroll,
  createTimeline,
  createDrawable,
} from "animejs";

// Animasi teks per huruf (sekali, hierarkis)
export function animasiHurufJudul(elemen: HTMLElement | null): void {
  if (!elemen) return;
  const dipisah = splitText(elemen, { chars: true, accessible: true });
  animate(dipisah.chars, {
    opacity: [0, 1],
    translateY: [24, 0],
    duration: 900,
    delay: stagger(24, { from: "first" }),
    ease: "outCubic",
  });
}

// Timeline masuk hero (urutan jelas, bukan seragam)
export function timelineHero(
  judul: HTMLElement | null,
  teks: HTMLElement | null,
): void {
  if (!judul) return;
  const tl = createTimeline({ defaults: { ease: "outCubic" } });
  tl.add(judul, { opacity: [0, 1], translateY: [20, 0], duration: 800 });
  if (teks) {
    tl.add(teks, { opacity: [0, 1], translateY: [12, 0], duration: 600 }, 250);
  }
}

// Reveal saat scroll (sekali, dengan variasi delay)
export function animasiMasukScroll(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  onScroll({
    target: elemen,
    onEnter: () => {
      animate(elemen, {
        opacity: [0, 1],
        translateY: [32, 0],
        duration: 700,
        delay: stagger(60, { from: "first" }),
        ease: "outCubic",
      });
    },
    repeat: false,
  });
}

// Animasi counter angka (untuk statistik)
export function animasiCounter(
  elemen: HTMLElement | null,
  akhir: number,
  durasi: number = 1400,
): void {
  if (!elemen) return;
  const obj = { nilai: 0 };
  animate(obj, {
    nilai: akhir,
    duration: durasi,
    ease: "outExpo",
    onUpdate: () => {
      elemen.textContent = Math.round(obj.nilai).toString();
    },
  });
}

// Animasi draw garis SVG (sekali)
export function animasiGarisSvg(selector: string): void {
  const garis = document.querySelectorAll<SVGGeometryElement>(selector);
  if (garis.length === 0) return;
  const drawable = createDrawable(garis);
  animate(drawable, {
    draw: "0 1",
    duration: 1200,
    ease: "outCubic",
  });
}

// Animasi melayang sangat halus (satu elemen aksen)
export function animasiMelayangHalus(elemen: HTMLElement | null): void {
  if (!elemen) return;
  animate(elemen, {
    translateY: [-6, 6],
    duration: 3200,
    loop: true,
    alternate: true,
    ease: "inOutSine",
  });
}

// Animasi scramble teks (sekali, untuk label)
export function animasiScrambleJudul(
  elemen: HTMLElement | null,
  teksAkhir: string,
): void {
  if (!elemen) return;
  animate(elemen, {
    textContent: teksAkhir,
    duration: 1200,
    ease: "outExpo",
    scrambleText: { text: teksAkhir, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  } as any);
}
