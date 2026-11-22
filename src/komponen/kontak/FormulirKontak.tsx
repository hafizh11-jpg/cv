import { type Component, createSignal, onMount } from "solid-js";
import Tombol from "../umum/Tombol";
import {
  validasiEmail,
  validasiNama,
  validasiPesan,
  validasiTelepon,
} from "../../utilitas/validasi";
import { bersihkanTeks, batasiPanjang, mengandungPolaBerbahaya } from "../../utilitas/sanitasi";
import { buatTokenAcak } from "../../utilitas/kriptografi";
import { profil } from "../../data/profil";

// Formulir kontak dengan validasi dan keamanan dasar
const FormulirKontak: Component = () => {
  const [nama, setNama] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [telepon, setTelepon] = createSignal("");
  const [pesan, setPesan] = createSignal("");
  const [honeypot, setHoneypot] = createSignal("");
  const [token, setToken] = createSignal("");
  const [galat, setGalat] = createSignal<Record<string, string>>({});
  const [status, setStatus] = createSignal<"idle" | "sukses" | "gagal">("idle");
  const [mengirim, setMengirim] = createSignal(false);

  // Rate limiting sederhana di client
  const [terakhirKirim, setTerakhirKirim] = createSignal(0);

  onMount(() => {
    setToken(buatTokenAcak());
  });

  const tanganiKirim = async (e: Event): Promise<void> => {
    e.preventDefault();

    // Honeypot: jika terisi, anggap bot
    if (honeypot().trim() !== "") {
      setStatus("gagal");
      return;
    }

    // Rate limit: minimal 10 detik antar pengiriman
    const sekarang = Date.now();
    if (sekarang - terakhirKirim() < 10000) {
      setGalat({ umum: "Terlalu cepat, coba lagi nanti" });
      setStatus("gagal");
      return;
    }

    const namaBersih = bersihkanTeks(batasiPanjang(nama(), 100));
    const emailBersih = bersihkanTeks(batasiPanjang(email(), 100));
    const teleponBersih = bersihkanTeks(batasiPanjang(telepon(), 20));
    const pesanBersih = bersihkanTeks(batasiPanjang(pesan(), 2000));

    // Cek pola berbahaya
    if (
      mengandungPolaBerbahaya(namaBersih) ||
      mengandungPolaBerbahaya(emailBersih) ||
      mengandungPolaBerbahaya(pesanBersih)
    ) {
      setGalat({ umum: "Input tidak valid" });
      setStatus("gagal");
      return;
    }

    const hasilNama = validasiNama(namaBersih);
    const hasilEmail = validasiEmail(emailBersih);
    const hasilTelepon = validasiTelepon(teleponBersih);
    const hasilPesan = validasiPesan(pesanBersih);

    const galatBaru: Record<string, string> = {};
    if (!hasilNama.valid) galatBaru.nama = hasilNama.pesan;
    if (!hasilEmail.valid) galatBaru.email = hasilEmail.pesan;
    if (!hasilTelepon.valid) galatBaru.telepon = hasilTelepon.pesan;
    if (!hasilPesan.valid) galatBaru.pesan = hasilPesan.pesan;

    if (Object.keys(galatBaru).length > 0) {
      setGalat(galatBaru);
      setStatus("gagal");
      return;
    }

    setMengirim(true);
    setGalat({});
    try {
      // Simulasi pengiriman; buka mailto sebagai fallback statis
      const subjek = encodeURIComponent(`Pesan dari ${namaBersih}`);
      const isi = encodeURIComponent(
        `Nama: ${namaBersih}\nEmail: ${emailBersih}\nTelepon: ${teleponBersih}\n\n${pesanBersih}`,
      );
      window.location.href = `mailto:${profil.email}?subject=${subjek}&body=${isi}`;
      setStatus("sukses");
      setTerakhirKirim(sekarang);
      setNama("");
      setEmail("");
      setTelepon("");
      setPesan("");
    } catch {
      setStatus("gagal");
      setGalat({ umum: "Gagal mengirim pesan" });
    } finally {
      setMengirim(false);
    }
  };

  return (
    <form
      onSubmit={tanganiKirim}
      class="brutal-card space-y-4 p-6"
      autocomplete="off"
      noValidate
    >
      <input type="hidden" name="csrf" value={token()} />

      {/* Honeypot untuk bot */}
      <div class="hidden" aria-hidden="true">
        <label>
          Jangan diisi
          <input
            type="text"
            name="website"
            value={honeypot()}
            onInput={(e) => setHoneypot(e.currentTarget.value)}
            tabindex="-1"
            autocomplete="off"
          />
        </label>
      </div>

      <div>
        <label class="mb-1 block text-sm font-bold uppercase" for="nama">
          Nama
        </label>
        <input
          id="nama"
          type="text"
          value={nama()}
          onInput={(e) => setNama(e.currentTarget.value)}
          class="w-full border-2 border-black p-2"
          maxLength={100}
          required
        />
        {galat().nama && (
          <p class="mt-1 text-sm font-bold text-red-600">{galat().nama}</p>
        )}
      </div>

      <div>
        <label class="mb-1 block text-sm font-bold uppercase" for="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email()}
          onInput={(e) => setEmail(e.currentTarget.value)}
          class="w-full border-2 border-black p-2"
          maxLength={100}
          required
        />
        {galat().email && (
          <p class="mt-1 text-sm font-bold text-red-600">{galat().email}</p>
        )}
      </div>

      <div>
        <label class="mb-1 block text-sm font-bold uppercase" for="telepon">
          Telepon (opsional)
        </label>
        <input
          id="telepon"
          type="tel"
          value={telepon()}
          onInput={(e) => setTelepon(e.currentTarget.value)}
          class="w-full border-2 border-black p-2"
          maxLength={20}
        />
        {galat().telepon && (
          <p class="mt-1 text-sm font-bold text-red-600">{galat().telepon}</p>
        )}
      </div>

      <div>
        <label class="mb-1 block text-sm font-bold uppercase" for="pesan">
          Pesan
        </label>
        <textarea
          id="pesan"
          value={pesan()}
          onInput={(e) => setPesan(e.currentTarget.value)}
          class="w-full border-2 border-black p-2"
          rows={5}
          maxLength={2000}
          required
        />
        {galat().pesan && (
          <p class="mt-1 text-sm font-bold text-red-600">{galat().pesan}</p>
        )}
      </div>

      {galat().umum && (
        <p class="text-sm font-bold text-red-600">{galat().umum}</p>
      )}

      {status() === "sukses" && (
        <p class="text-sm font-bold text-green-600">
          Pesan berhasil disiapkan. Aplikasi email Anda akan terbuka.
        </p>
      )}

      <Tombol tipe="submit" kelas="w-full">
        {mengirim() ? "Mengirim..." : "Kirim Pesan"}
      </Tombol>
    </form>
  );
};

export default FormulirKontak;
