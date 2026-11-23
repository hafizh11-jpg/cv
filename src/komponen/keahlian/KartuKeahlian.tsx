import { type Component } from "solid-js";
import Lencana from "../umum/Lencana";
import IkonMerek from "../umum/IkonMerek";
import IkonJava from "../umum/IkonJava";

interface PropsKartuKeahlian {
  nama: string;
  tingkat: number;
}

// Kartu keahlian dengan progress bar
const KartuKeahlian: Component<PropsKartuKeahlian> = (props) => {
  return (
    <div class="brutal-card p-4">
      <div class="mb-2 flex items-center justify-between">
        <span class="flex items-center gap-2 font-bold">
          {props.nama === "Java" ? (
            <IkonJava ukuran={20} />
          ) : (
            <IkonMerek nama={props.nama} ukuran={20} />
          )}
          {props.nama}
        </span>
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
