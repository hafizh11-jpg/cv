import { type Component } from "solid-js";
import Lencana from "../umum/Lencana";

interface PropsKartuKeahlian {
  nama: string;
  tingkat: number;
}

// Kartu keahlian dengan progress bar
const KartuKeahlian: Component<PropsKartuKeahlian> = (props) => {
  return (
    <div class="brutal-card p-4">
      <div class="mb-2 flex items-center justify-between">
        <span class="font-bold">{props.nama}</span>
        <Lencana teks={`${props.tingkat}%`} warna="#00e5ff" />
      </div>
      <div class="h-3 border-2 border-black bg-gray-200">
        <div
          class="h-full bg-orange-400"
          style={{ width: `${props.tingkat}%` }}
        />
      </div>
    </div>
  );
};

export default KartuKeahlian;
