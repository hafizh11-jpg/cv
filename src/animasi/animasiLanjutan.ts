// Animasi lanjutan menggunakan anime.js v4
import {
  animate,
  stagger,
  splitText,
  onScroll,
  createTimeline,
  createDraggable,
  createDrawable,
} from "animejs";

// Animasi teks per huruf untuk judul hero
export function animasiHurufJudul(elemen: HTMLElement | null): void {
  if (!elemen) return;
  const dipisah = splitText(elemen, { chars: true });
  animate(dipisah.chars, {
    opacity: [0, 1],
    translateY: [40, 0],
    rotate: [-5, 0],
    duration: 900,
    delay: stagger(30),
    ease: "outExpo",
  });
}

// Animasi scramble untuk teks (efek mengetik acak)
export function animasiScramble(elemen: HTMLElement | null, teksAkhir: string): void {
  if (!elemen) return;
  animate(elemen, {
    textContent: teksAkhir,
    duration: 1200,
    ease: "outExpo",
    // @ts-ignore - scrambleText plugin
    scrambleText: { text: teksAkhir },
  } as any);
}

// Animasi melayang (floating) berulang
export function animasiMelayang(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  animate(elemen, {
    translateY: [-8, 8],
    duration: 2000,
    loop: true,
    alternate: true,
    ease: "inOutSine",
  });
}

// Animasi pulsa skala berulang
export function animasiPulsa(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  animate(elemen, {
    scale: [1, 1.05, 1],
    duration: 1500,
    loop: true,
    ease: "inOutQuad",
  });
}

// Animasi masuk saat scroll (reveal)
export function animasiMasukScroll(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  onScroll({
    target: elemen,
    onEnter: () => {
      animate(elemen, {
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 800,
        delay: stagger(80),
        ease: "outCubic",
      });
    },
    repeat: false,
  });
}

// Animasi timeline berantai untuk hero
export function timelineHero(
  judul: HTMLElement | null,
  teks: HTMLElement | null,
): void {
  if (!judul) return;
  const tl = createTimeline({ defaults: { ease: "outExpo" } });
  tl.add(judul, { opacity: [0, 1], translateY: [50, 0], duration: 900 });
  if (teks) {
    tl.add(teks, { opacity: [0, 1], translateY: [30, 0], duration: 700 }, 200);
  }
}

// Animasi paralaks sederhana pada scroll
export function animasiParalaks(elemen: HTMLElement | null): void {
  if (!elemen) return;
  onScroll({
    target: elemen,
    onUpdate: (self: { progress: number }) => {
      elemen.style.transform = `translateY(${self.progress * 40}px)`;
    },
  });
}


// Animasi kemiringan kartu (tilt) mengikuti kursor
export function animasiKemiringanKartu(selector: string): void {
  const kartu = document.querySelectorAll<HTMLElement>(selector);
  kartu.forEach((el) => {
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotX = ((y / rect.height) - 0.5) * -12;
      const rotY = ((x / rect.width) - 0.5) * 12;
      el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

// Animasi magnet tombol mengikuti kursor
export function animasiMagnet(selector: string): void {
  const tombol = document.querySelectorAll<HTMLElement>(selector);
  tombol.forEach((el) => {
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

// Animasi hitung angka (counter) sederhana
export function animasiCounter(
  elemen: HTMLElement | null,
  akhir: number,
  durasi: number = 1500,
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

// Animasi glow (bayangan berdenyut) berulang
export function animasiGlow(selector: string): void {
  const elemen = document.querySelectorAll<HTMLElement>(selector);
  if (elemen.length === 0) return;
  animate(elemen, {
    boxShadow: [
      "0 0 0px rgba(255,95,31,0.0)",
      "0 0 24px rgba(255,95,31,0.6)",
      "0 0 0px rgba(255,95,31,0.0)",
    ],
    duration: 2000,
    loop: true,
    ease: "inOutSine",
  });
}

// Animasi flip kartu 3D pada hover
export function animasiFlipKartu(selector: string): void {
  const kartu = document.querySelectorAll<HTMLElement>(selector);
  kartu.forEach((el) => {
    el.style.transformStyle = "preserve-3d";
    el.addEventListener("mouseenter", () => {
      animate(el, {
        rotateY: 180,
        duration: 600,
        ease: "outExpo",
      });
    });
    el.addEventListener("mouseleave", () => {
      animate(el, {
        rotateY: 0,
        duration: 600,
        ease: "outExpo",
      });
    });
  });
}

// Animasi draggable (bisa diseret)
export function animasiGeserDraggable(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  createDraggable(elemen, {
    container: document.body,
    releaseEase: "outElastic",
  });
}

// Animasi scramble teks pada elemen
export function animasiScrambleJudul(
  elemen: HTMLElement | null,
  teksAkhir: string,
): void {
  if (!elemen) return;
  animate(elemen, {
    textContent: teksAkhir,
    duration: 1500,
    ease: "outExpo",
    scrambleText: { text: teksAkhir, chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  } as any);
}

// Animasi progress bar scroll di bagian atas
export function animasiProgressScroll(idBar: string): void {
  const bar = document.getElementById(idBar);
  if (!bar) return;
  const perbarui = (): void => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progres = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${progres}%`;
  };
  window.addEventListener("scroll", perbarui, { passive: true });
  perbarui();
}

// Animasi draw garis SVG
export function animasiGarisSvg(selector: string): void {
  const garis = document.querySelectorAll<SVGGeometryElement>(selector);
  if (garis.length === 0) return;
  const drawable = createDrawable(garis);
  animate(drawable, {
    draw: "0 1",
    duration: 1500,
    ease: "outCubic",
  });
}
