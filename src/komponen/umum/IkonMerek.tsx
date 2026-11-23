import { type Component } from "solid-js";
import { ambilIkon } from "../../utilitas/ikonMerek";

interface PropsIkonMerek {
  nama: string;
  ukuran?: number;
}

// Render logo merek asli dari simple-icons
const IkonMerek: Component<PropsIkonMerek> = (props) => {
  const ikon = (): ReturnType<typeof ambilIkon> => ambilIkon(props.nama);
  const ukuran = (): number => props.ukuran ?? 24;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={ukuran()}
      height={ukuran()}
      fill={ikon()?.hex ?? "currentColor"}
      aria-label={ikon()?.judul ?? props.nama}
    >
      <title>{ikon()?.judul ?? props.nama}</title>
      <path d={ikon()?.path ?? ""} />
    </svg>
  );
};

export default IkonMerek;
