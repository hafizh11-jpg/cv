import { type Component } from "solid-js";
import Lencana from "../umum/Lencana";
import { type Proyek } from "../../data/proyek";

interface PropsKartuProyek {
  proyek: Proyek;
}

// Kartu proyek
const KartuProyek: Component<PropsKartuProyek> = (props) => {
  return (
    <div
      class="brutal-card flex flex-col p-5"
      style={{ "background-color": props.proyek.warna }}
    >
      <h3 class="text-xl font-black">{props.proyek.nama}</h3>
      <p class="mt-2 flex-1">{props.proyek.deskripsi}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        {props.proyek.teknologi.map((t) => (
          <Lencana teks={t} warna="#ffffff" />
        ))}
      </div>
      <a
        href={props.proyek.tautan}
        target="_blank"
        rel="noopener noreferrer"
        class={
          "mt-4 inline-block border-2 border-black bg-black " +
          "px-3 py-1 text-sm font-bold text-white " +
          "hover:bg-white hover:text-black"
        }
      >
        Lihat Repo
      </a>
    </div>
  );
};

export default KartuProyek;
