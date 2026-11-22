import { describe, it, expect } from "vitest";
import { escapeHtml } from "../../src/utilitas/sanitasi";

describe("kinerja", () => {
  it("escapeHtml cepat untuk 10000 input", () => {
    const mulai = performance.now();
    for (let i = 0; i < 10000; i++) {
      escapeHtml("<script>alert('x')</script>");
    }
    const durasi = performance.now() - mulai;
    expect(durasi).toBeLessThan(1000);
  });
});
