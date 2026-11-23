import { type Component, createSignal, onMount } from "solid-js";
import { animasiMasuk } from "../../animasi/animasiMasuk";
import { animasiScrambleJudul, acakKartu } from "../../animasi/animasiLanjutan";

const TautanNav = [
  { label: "Tentang", href: "#tentang" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Layanan", href: "#layanan" },
  { label: "Kontak", href: "#kontak" },
];

// Header / navbar
const Tajuk: Component = () => {
  const [menuTerbuka, setMenuTerbuka] = createSignal(false);
  let refLogo: HTMLAnchorElement | undefined;
  let refNav: HTMLElement | undefined;

  onMount(() => {
    animasiMasuk(refNav ?? null);
  });

  return (
    <header
      ref={refNav}
      class="sticky top-0 z-50 border-b-4 border-black bg-yellow-300"
    >
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          ref={refLogo}
          href="#beranda"
          class="text-xl font-black uppercase tracking-tight"
          onMouseEnter={() => animasiScrambleJudul(refLogo ?? null, "HMH.")}
        >
          HMH.
        </a>

        <button
          class="brutal-btn bg-white px-3 py-2 md:hidden"
          onClick={() => setMenuTerbuka(!menuTerbuka())}
          aria-label="Buka menu"
          aria-expanded={menuTerbuka()}
        >
          {menuTerbuka() ? "Tutup" : "Menu"}
        </button>

        <ul class="wadah-nav hidden items-center gap-2 md:flex">
          {TautanNav.map((t) => (
            <li>
              <a
                href={t.href}
                class="border-2 border-black bg-white px-3 py-1 text-sm font-bold uppercase transition-transform duration-150 hover:-translate-y-0.5 hover:bg-orange-400"
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      <div class="hidden px-4 pb-2 md:block">
        <button class="brutal-btn bg-cyan-300 px-3 py-2 text-xs" onClick={() => acakKartu(".wadah-nav")}>Acak Menu</button>
      </div>
      </nav>

      {menuTerbuka() && (
        <ul class="flex flex-col gap-2 border-t-4 border-black bg-white p-4 md:hidden">
          {TautanNav.map((t) => (
            <li>
              <a
                href={t.href}
                class="block border-2 border-black px-3 py-2 text-sm font-bold uppercase hover:bg-orange-400"
                onClick={() => setMenuTerbuka(false)}
              >
                {t.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Tajuk;
