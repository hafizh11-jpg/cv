// Utilitas validasi form

export interface HasilValidasi {
  valid: boolean;
  pesan: string;
}

// Validasi email dengan regex sederhana
export function validasiEmail(email: string): HasilValidasi {
  const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.trim() === "") {
    return { valid: false, pesan: "Email wajib diisi" };
  }
  if (!pola.test(email.trim())) {
    return { valid: false, pesan: "Format email tidak valid" };
  }
  return { valid: true, pesan: "" };
}

// Validasi nama
export function validasiNama(nama: string): HasilValidasi {
  if (!nama || nama.trim() === "") {
    return { valid: false, pesan: "Nama wajib diisi" };
  }
  if (nama.trim().length < 2) {
    return { valid: false, pesan: "Nama terlalu pendek" };
  }
  if (nama.trim().length > 100) {
    return { valid: false, pesan: "Nama terlalu panjang" };
  }
  return { valid: true, pesan: "" };
}

// Validasi pesan
export function validasiPesan(pesan: string): HasilValidasi {
  if (!pesan || pesan.trim() === "") {
    return { valid: false, pesan: "Pesan wajib diisi" };
  }
  if (pesan.trim().length < 10) {
    return { valid: false, pesan: "Pesan terlalu pendek" };
  }
  if (pesan.trim().length > 2000) {
    return { valid: false, pesan: "Pesan melebihi batas" };
  }
  return { valid: true, pesan: "" };
}

// Validasi telepon Indonesia sederhana
export function validasiTelepon(telepon: string): HasilValidasi {
  const pola = /^0[0-9]{9,12}$/;
  const bersih = telepon.replace(/\s/g, "");
  if (!bersih) {
    return { valid: true, pesan: "" };
  }
  if (!pola.test(bersih)) {
    return { valid: false, pesan: "Format telepon tidak valid" };
  }
  return { valid: true, pesan: "" };
}
