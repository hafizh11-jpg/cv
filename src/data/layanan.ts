// Data layanan jasa
export interface Layanan {
  nama: string;
  deskripsi: string;
}

export const daftarLayanan: Layanan[] = [
  {
    nama: "Static Web",
    deskripsi: "Website statis cepat, aman, dan hemat biaya hosting.",
  },
  {
    nama: "Dynamic Web",
    deskripsi: "Website dinamis dengan CMS dan database.",
  },
  {
    nama: "Web App",
    deskripsi: "Aplikasi web interaktif berbasis SPA/PWA.",
  },
  {
    nama: "Desktop App (Online/Offline)",
    deskripsi: "Aplikasi desktop cross-platform, bisa offline.",
  },
  {
    nama: "Mobile App (Online/Offline)",
    deskripsi: "Aplikasi mobile Android/iOS, bisa offline.",
  },
];
