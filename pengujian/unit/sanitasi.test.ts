import { describe, it, expect } from "vitest";
import {
  escapeHtml,
  bersihkanTeks,
  batasiPanjang,
  mengandungPolaBerbahaya,
} from "../../src/utilitas/sanitasi";

describe("sanitasi", () => {
  it("escapeHtml mengubah karakter berbahaya", () => {
    expect(escapeHtml("<script>")).toBe("&lt;script&gt;");
    expect(escapeHtml("a & b")).toBe("a &amp; b");
  });

  it("bersihkanTeks menghapus tag", () => {
    expect(bersihkanTeks("<b>halo</b>")).toBe("halo");
  });

  it("batasiPanjang memotong", () => {
    expect(batasiPanjang("abcdef", 3)).toBe("abc");
  });

  it("mengandungPolaBerbahaya mendeteksi script", () => {
    expect(mengandungPolaBerbahaya("<script>alert(1)</script>")).toBe(true);
    expect(mengandungPolaBerbahaya("halo dunia")).toBe(false);
  });
});
