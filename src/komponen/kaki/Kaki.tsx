import { type Component } from "solid-js";
import { profil } from "../../data/profil";

// Footer
const Kaki: Component = () => {
  const tahun = new Date().getFullYear();
  return (
    <footer class="border-t-4 border-black bg-black px-4 py-8 text-white">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p class="text-sm font-bold">
          © {tahun} {profil.nama}. All rights reserved.
        </p>
        <p class="text-xs text-gray-300">
          Dibuat dengan SolidJS + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Kaki;
