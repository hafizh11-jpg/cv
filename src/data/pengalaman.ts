// Data pengalaman kerja
export interface Pengalaman {
  judul: string;
  tempat: string;
  periode: string;
  deskripsi: string;
}

export const daftarPengalaman: Pengalaman[] = [
  {
    judul: "Freelancer",
    tempat: "Mandiri",
    periode: "2023 - Sekarang",
    deskripsi:
      "Mengerjakan berbagai proyek web dan aplikasi untuk klien. " +
      "Meliputi static web, dynamic web, web app, desktop app, " +
      "dan mobile app.",
  },
  {
    judul: "Praktik Kerja Lapangan (PKL)",
    tempat: "UIN",
    periode: "2026 (1 bulan)",
    deskripsi:
      "Magang di lingkungan kampus UIN. Membantu pengembangan " +
      "sistem dan belajar proses kerja profesional.",
  },
  {
    judul: "Kuliah Kerja Mahasiswa (KKM)",
    tempat: "Desa Citapen",
    periode: "2026 (1 bulan)",
    deskripsi:
      "Program pengabdian masyarakat di Desa Citapen. " +
      "Membantu digitalisasi dan pelayanan warga.",
  },
];
