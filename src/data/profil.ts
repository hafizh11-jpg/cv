// Data profil utama
export interface Profil {
  nama: string;
  gelar: string;
  email: string;
  telepon: string;
  github: string;
  tautanGithub: string;
  lokasi: string;
  ringkasan: string;
}

export const profil: Profil = {
  nama: "Hafizh Muhammad Hikmatiar",
  gelar: "Junior Backend Developer / Junior App Developer",
  email: "hafizhnezuko@gmail.com",
  telepon: "0821 1821 1502",
  github: "hafizh11-jpg",
  tautanGithub: "https://github.com/hafizh11-jpg",
  lokasi: "Indonesia",
  ringkasan:
    "Developer muda yang fokus pada backend dan pembuatan aplikasi. " +
    "Terbiasa membangun layanan yang cepat, aman, dan mudah dirawat. " +
    "Terbuka untuk pekerjaan maupun proyek freelance.",
};
