// Animasi masuk menggunakan anime.js v4
import { animate, stagger } from "animejs";

// Animasi fade + slide dari bawah
export function animasiMasuk(
  elemen: Element | string | null,
  jeda: number = 0,
): void {
  if (!elemen) return;
  animate(elemen, {
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 800,
    delay: jeda,
    ease: "outExpo",
  });
}

// Animasi stagger untuk daftar
export function animasiStagger(
  selector: string,
  jedaDasar: number = 100,
): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  animate(elemen, {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 600,
    delay: stagger(jedaDasar),
    ease: "outQuad",
  });
}

// Animasi klik tombol
export function animasiKlik(elemen: Element | null): void {
  if (!elemen) return;
  animate(elemen, {
    scale: [1, 0.95, 1],
    duration: 300,
    ease: "inOutQuad",
  });
}
