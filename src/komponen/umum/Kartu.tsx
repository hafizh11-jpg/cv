import { type Component, type JSX } from "solid-js";

interface PropsKartu {
  children?: JSX.Element;
  warna?: string;
  kelas?: string;
  onHover?: () => void;
}

// Kartu bergaya Neo-Brutalism
const Kartu: Component<PropsKartu> = (props) => {
  return (
    <div
      class={`brutal-card p-6 ${props.kelas ?? ""}`}
      style={{ "background-color": props.warna ?? "#ffffff" }}
      onMouseEnter={() => props.onHover?.()}
    >
      {props.children}
    </div>
  );
};

export default Kartu;
