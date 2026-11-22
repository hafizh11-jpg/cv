// Data proyek portofolio (contoh)
export interface Proyek {
  nama: string;
  deskripsi: string;
  teknologi: string[];
  tautan: string;
  warna: string;
}

export const daftarProyek: Proyek[] = [
  {
    nama: "Kasir Pintar",
    deskripsi:
      "Aplikasi kasir desktop offline untuk UMKM. " +
      "Mendukung cetak struk dan laporan harian.",
    teknologi: ["Kotlin", "Compose Multiplatform"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#ffd600",
  },
  {
    nama: "Portal Desa",
    deskripsi:
      "Web dinamis untuk administrasi desa. " +
      "Pengajuan surat dan data warga online.",
    teknologi: ["Go", "Solid JS", "PostgreSQL"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#00e5ff",
  },
  {
    nama: "Catatan Tugas",
    deskripsi:
      "Aplikasi mobile pencatat tugas dengan sinkronisasi cloud.",
    teknologi: ["Kotlin Multiplatform", "Rust"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#ff5f1f",
  },
  {
    nama: "API Pembayaran",
    deskripsi:
      "Layanan backend pembayaran dengan autentikasi JWT " +
      "dan rate limiting.",
    teknologi: ["Rust", "Actix", "Redis"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#7c3aed",
  },
  {
    nama: "Dashboard Analitik",
    deskripsi:
      "Dashboard web app real-time untuk monitoring bisnis.",
    teknologi: ["TypeScript", "Solid JS", "WebSocket"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#22c55e",
  },
  {
    nama: "Inventaris Gudang",
    deskripsi:
      "Aplikasi desktop online/offline untuk stok gudang.",
    teknologi: ["C#", ".NET MAUI"],
    tautan: "https://github.com/hafizh11-jpg",
    warna: "#ef4444",
  },
];
