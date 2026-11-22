// Data layanan jasa
export interface Layanan {
  nama: string;
  deskripsi: string;
  ikon: string;
}

export const daftarLayanan: Layanan[] = [
  {
    nama: "Static Web",
    deskripsi: "Website statis cepat, aman, dan hemat biaya hosting.",
    ikon: "📄",
  },
  {
    nama: "Dynamic Web",
    deskripsi: "Website dinamis dengan CMS dan database.",
    ikon: "⚙️",
  },
  {
    nama: "Web App",
    deskripsi: "Aplikasi web interaktif berbasis SPA/PWA.",
    ikon: "🌐",
  },
  {
    nama: "Desktop App (Online/Offline)",
    deskripsi: "Aplikasi desktop cross-platform, bisa offline.",
    ikon: "🖥️",
  },
  {
    nama: "Mobile App (Online/Offline)",
    deskripsi: "Aplikasi mobile Android/iOS, bisa offline.",
    ikon: "📱",
  },
];
