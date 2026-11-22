// Utilitas sanitasi input untuk mencegah XSS

const PETA_KARAKTER_BERBAHAYA: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};

// Escape karakter berbahaya menjadi entitas HTML
export function escapeHtml(teks: string): string {
  if (typeof teks !== "string") return "";
  return teks.replace(/[&<>"'/]/g, (karakter) => {
    return PETA_KARAKTER_BERBAHAYA[karakter] ?? karakter;
  });
}

// Hapus tag HTML dan karakter kontrol
export function bersihkanTeks(teks: string): string {
  if (typeof teks !== "string") return "";
  const tanpaTag = teks.replace(/<[^>]*>/g, "");
  return tanpaTag.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

// Validasi panjang input
export function batasiPanjang(teks: string, maksimal: number): string {
  if (typeof teks !== "string") return "";
  if (maksimal < 0) return "";
  return teks.slice(0, maksimal);
}

// Cek apakah string mengandung pola berbahaya
export function mengandungPolaBerbahaya(teks: string): boolean {
  if (typeof teks !== "string") return false;
  const pola = [
    /<script/i,
    /javascript:/i,
    /on\w+=/i,
    /data:text\/html/i,
    /vbscript:/i,
  ];
  return pola.some((p) => p.test(teks));
}
