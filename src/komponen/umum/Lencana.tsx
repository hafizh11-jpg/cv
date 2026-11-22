import { type Component } from "solid-js";

interface PropsLencana {
  teks: string;
  warna?: string;
}

// Lencana kecil bergaya brutal
const Lencana: Component<PropsLencana> = (props) => {
  return (
    <span
      class="inline-block border-2 border-black px-2 py-1 text-xs font-bold uppercase"
      style={{ "background-color": props.warna ?? "#ffd600" }}
    >
      {props.teks}
    </span>
  );
};

export default Lencana;
