import { type Component, type JSX } from "solid-js";
import { animasiKlik } from "../../animasi/animasiMasuk";

interface PropsTombol {
  children?: JSX.Element;
  jenis?: "utama" | "sekunder" | "bahaya";
  onClick?: (e: MouseEvent) => void;
  tipe?: "button" | "submit" | "reset";
  kelas?: string;
  href?: string;
}

// Tombol bergaya Neo-Brutalism
const Tombol: Component<PropsTombol> = (props) => {
  const kelasWarna = (): string => {
    switch (props.jenis) {
      case "sekunder":
        return "bg-cyan-300";
      case "bahaya":
        return "bg-red-400";
      default:
        return "bg-orange-400";
    }
  };

  const handleClick = (e: MouseEvent): void => {
    const target = e.currentTarget as Element;
    animasiKlik(target);
    props.onClick?.(e);
  };

  const kelasGabung = (): string =>
    `brutal-btn ${kelasWarna()} px-5 py-3 text-black ${props.kelas ?? ""}`;

  if (props.href) {
    return (
      <a
        href={props.href}
        class={kelasGabung()}
        onClick={handleClick}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.children}
      </a>
    );
  }

  return (
    <button type={props.tipe ?? "button"} class={kelasGabung()} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Tombol;
