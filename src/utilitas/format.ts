// Utilitas format tampilan

// Format nomor telepon tampilan
export function formatTelepon(telepon: string): string {
  return telepon.replace(/\s+/g, " ").trim();
}

// Potong teks dengan ellipsis
export function potongTeks(teks: string, maksimal: number): string {
  if (teks.length <= maksimal) return teks;
  return `${teks.slice(0, maksimal).trim()}...`;
}

// Slug sederhana
export function buatSlug(teks: string): string {
  return teks
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
