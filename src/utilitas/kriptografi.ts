// Utilitas kriptografi menggunakan Web Crypto API

// Buat hash SHA-256 dari teks
export async function hashSha256(teks: string): Promise<string> {
  if (typeof crypto === "undefined" || !crypto.subtle) {
    throw new Error("Web Crypto tidak tersedia");
  }
  const data = new TextEncoder().encode(teks);
  const buffer = await crypto.subtle.digest("SHA-256", data);
  const array = Array.from(new Uint8Array(buffer));
  return array.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Buat token acak untuk CSRF sederhana
export function buatTokenAcak(panjang: number = 32): string {
  if (typeof crypto === "undefined" || !crypto.getRandomValues) {
    return Math.random().toString(36).slice(2);
  }
  const array = new Uint8Array(panjang);
  crypto.getRandomValues(array);
  return Array.from(array)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Verifikasi integritas sederhana dengan HMAC (simulasi)
export async function buatHmac(
  pesan: string,
  kunci: string,
): Promise<string> {
  if (typeof crypto === "undefined" || !crypto.subtle) {
    throw new Error("Web Crypto tidak tersedia");
  }
  const kunciBuffer = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(kunci),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const tanda = await crypto.subtle.sign(
    "HMAC",
    kunciBuffer,
    new TextEncoder().encode(pesan),
  );
  return Array.from(new Uint8Array(tanda))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
