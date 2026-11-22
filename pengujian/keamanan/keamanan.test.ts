import { describe, it, expect } from "vitest";
import { mengandungPolaBerbahaya } from "../../src/utilitas/sanitasi";
import { urlAman, cegahClickjacking } from "../../src/keamanan/proteksi";

describe("keamanan", () => {
  it("deteksi XSS", () => {
    expect(mengandungPolaBerbahaya("<script>alert(1)</script>")).toBe(true);
    expect(mengandungPolaBerbahaya("javascript:alert(1)")).toBe(true);
    expect(mengandungPolaBerbahaya("onload=alert(1)")).toBe(true);
  });

  it("urlAman validasi", () => {
    expect(urlAman("https://example.com")).toBe(true);
    expect(urlAman("javascript:alert(1)")).toBe(false);
  });

  it("cegahClickjacking tidak throw", () => {
    expect(() => cegahClickjacking()).not.toThrow();
  });
});
