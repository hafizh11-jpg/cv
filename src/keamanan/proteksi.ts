// Proteksi keamanan dasar sisi klien

// Cegah clickjacking: jika di-iframe, redirect
export function cegahClickjacking(): void {
  if (typeof window === "undefined") return;
  try {
    if (window.top !== window.self) {
      window.top!.location.href = window.self.location.href;
    }
  } catch {
    // Akses cross-origin diblokir; anggap aman
  }
}

// Nonaktifkan pemilihan teks pada elemen sensitif (opsional)
export function nonaktifkanKlikKanan(elemen: HTMLElement | null): void {
  if (!elemen) return;
  elemen.addEventListener("contextmenu", (e) => e.preventDefault());
}

// Validasi asal URL
export function urlAman(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
