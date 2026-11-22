// Data sertifikat (contoh)
export interface Sertifikat {
  nama: string;
  penerbit: string;
  tahun: string;
}

export const daftarSertifikat: Sertifikat[] = [
  { nama: "Backend Development Fundamentals", penerbit: "Dicoding", tahun: "2024" },
  { nama: "Kotlin Multiplatform", penerbit: "JetBrains Academy", tahun: "2025" },
  { nama: "Rust Programming", penerbit: "Rust Foundation", tahun: "2025" },
  { nama: "Web Security Basics", penerbit: "OWASP", tahun: "2026" },
];
