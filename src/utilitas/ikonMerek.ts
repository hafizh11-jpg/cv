import {
  siRust,
  siDotnet,
  siOpenjdk,
  siGo,
  siKotlin,
  siTypescript,
  siSolid,
  siGithub,
  siWhatsapp,
  siGmail,
} from "simple-icons";

// Peta nama ke ikon merek (path SVG dan warna brand)
export interface IkonMerek {
  path: string;
  hex: string;
  judul: string;
}

const peta: Record<string, IkonMerek> = {
  Rust: { path: siRust.path, hex: `#${siRust.hex}`, judul: siRust.title },
  "C#": { path: siDotnet.path, hex: `#${siDotnet.hex}`, judul: "C#" },
  Java: { path: siOpenjdk.path, hex: `#${siOpenjdk.hex}`, judul: siOpenjdk.title },
  Go: { path: siGo.path, hex: `#${siGo.hex}`, judul: siGo.title },
  Kotlin: { path: siKotlin.path, hex: `#${siKotlin.hex}`, judul: siKotlin.title },
  TypeScript: {
    path: siTypescript.path,
    hex: `#${siTypescript.hex}`,
    judul: siTypescript.title,
  },
  "Solid JS": { path: siSolid.path, hex: `#${siSolid.hex}`, judul: siSolid.title },
  "Kotlin Multiplatform": {
    path: siKotlin.path,
    hex: `#${siKotlin.hex}`,
    judul: "Kotlin Multiplatform",
  },
  GitHub: { path: siGithub.path, hex: `#${siGithub.hex}`, judul: siGithub.title },
  WhatsApp: {
    path: siWhatsapp.path,
    hex: `#${siWhatsapp.hex}`,
    judul: siWhatsapp.title,
  },
  Email: { path: siGmail.path, hex: `#${siGmail.hex}`, judul: "Email" },
};

export function ambilIkon(nama: string): IkonMerek | undefined {
  return peta[nama];
}
