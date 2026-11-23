// Animasi lanjutan yang dikurasi agar tidak menyerupai AI slop
import {
  animate,
  stagger,
  splitText,
  onScroll,
  createTimeline,
  createDrawable,
  createDraggable,
  createLayout,
  createMotionPath,
  createAnimatable,
  svg,
  waapi,
  createScope,
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

// Animasi draggable (bisa diseret dengan fisika)
export function animasiDraggable(selector: string): void {
  const elemen = document.querySelectorAll(selector);
  if (elemen.length === 0) return;
  createDraggable(elemen, {
    container: document.body,
    releaseEase: "outElastic(1, .5)",
    dragSpeed: 1,
    dragThreshold: 6,
    onRelease: (self: any) => {
      const el = self.target as HTMLElement;
      const parent = el.parentElement;
      if (!parent) return;
      el.style.transform = "";
      const layout = createLayout(parent, { duration: 500, ease: "outExpo" });
      layout.record();
      const children = Array.from(parent.children) as HTMLElement[];
      children.sort((a, b) => {
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        if (Math.abs(ra.top - rb.top) > 10) return ra.top - rb.top;
        return ra.left - rb.left;
      });
      children.forEach((c) => parent.appendChild(c));
      layout.animate();
    },
  });
}

// Animasi layout FLIP (untuk perubahan urutan DOM)
export function animasiLayout(root: HTMLElement | null): any {
  if (!root) return null;
  return createLayout(root, {
    duration: 600,
    ease: "outExpo",
  });
}

// Animasi gerak sepanjang path SVG
export function animasiJalurGerak(
  elemen: HTMLElement | null,
  pathSelector: string,
): void {
  if (!elemen) return;
  const path = document.querySelector<SVGPathElement>(pathSelector);
  if (!path) return;
  const motionPath = createMotionPath(path);
  animate(elemen, {
    ...motionPath,
    duration: 3000,
    loop: true,
    ease: "inOutSine",
  } as any);
}

// Animatable: elemen mengikuti kursor dengan spring
export function animasiPengikutKursor(elemen: HTMLElement | null): void {
  if (!elemen) return;
  const animatable = createAnimatable(elemen, {
    x: 300,
    y: 300,
    ease: "outExpo",
  });
  const gerak = (e: MouseEvent): void => {
    animatable.x(e.clientX);
    animatable.y(e.clientY);
  };
  window.addEventListener("mousemove", gerak);
}

// Animasi morph SVG (berubah bentuk)
export function animasiMorphSvg(
  elemen: SVGPathElement | null,
  pathBaru: string,
): void {
  if (!elemen) return;
  elemen.addEventListener("mouseenter", () => {
    animate(elemen, {
      d: svg.morphTo(pathBaru),
      duration: 600,
      ease: "outExpo",
    } as any);
  });
  elemen.addEventListener("mouseleave", () => {
    animate(elemen, {
      d: svg.morphTo(elemen.getAttribute("data-asal") || ""),
      duration: 600,
      ease: "outExpo",
    } as any);
  });
}

// Animasi WAAPI (hardware-accelerated)
export function animasiWaapi(elemen: HTMLElement | null): void {
  if (!elemen) return;
  waapi.animate(elemen, {
    opacity: [0, 1],
    transform: ["translateY(20px)", "translateY(0px)"],
    duration: 800,
    ease: "outExpo",
  } as any);
}

// Animasi scope dengan media query (responsif)
export function buatScopeAnimasi(
  root: HTMLElement | null,
  callback: (self: any) => void,
): any {
  if (!root) return null;
  return createScope({
    root,
    mediaQueries: {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
  }).add(callback);
}


// Kemiringan kartu halus (subtle) mengikuti kursor
export function animasiKemiringanHalus(selector: string): void {
  const kartu = document.querySelectorAll<HTMLElement>(selector);
  kartu.forEach((el) => {
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotX = ((y / rect.height) - 0.5) * -6;
      const rotY = ((x / rect.width) - 0.5) * 6;
      el.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

export function animasiTimelinePengalaman(selector: string): void {
  const items = document.querySelectorAll<HTMLElement>(selector);
  if (items.length === 0) return;
  items.forEach((el, i) => {
    const dariKiri = i % 2 === 0;
    animate(el, {
      opacity: [0, 1],
      translateX: [dariKiri ? -40 : 40, 0],
      duration: 800,
      delay: i * 120,
      ease: "outCubic",
    });
  });
}

// Acak urutan kartu dalam container dengan animasi Layout FLIP
export function acakKartu(selectorContainer: string): void {
  const container = document.querySelector<HTMLElement>(selectorContainer);
  if (!container) return;
  const layout = createLayout(container, { duration: 500, ease: "outExpo" });
  layout.record();
  const children = Array.from(container.children) as HTMLElement[];
  for (let i = children.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    container.appendChild(children[j]);
  }
  layout.animate();
}
