// Data keahlian teknologi
export interface Keahlian {
  nama: string;
  kategori: "bahasa" | "framework" | "tools";
  tingkat: number;
}

export const daftarKeahlian: Keahlian[] = [
  { nama: "Rust", kategori: "bahasa", tingkat: 70 },
  { nama: "C#", kategori: "bahasa", tingkat: 75 },
  { nama: "Java", kategori: "bahasa", tingkat: 75 },
  { nama: "Go", kategori: "bahasa", tingkat: 65 },
  { nama: "Kotlin", kategori: "bahasa", tingkat: 80 },
  { nama: "TypeScript", kategori: "bahasa", tingkat: 85 },
  { nama: "Solid JS", kategori: "framework", tingkat: 80 },
  { nama: "Kotlin Multiplatform", kategori: "framework", tingkat: 70 },
];
