import { describe, it, expect } from "vitest";
import { formatTelepon, potongTeks, buatSlug } from "../../src/utilitas/format";

describe("format", () => {
  it("formatTelepon", () => {
    expect(formatTelepon("0821  1821  1502")).toBe("0821 1821 1502");
  });
  it("potongTeks", () => {
    expect(potongTeks("abcdefghij", 5)).toBe("abcde...");
    expect(potongTeks("abc", 5)).toBe("abc");
  });
  it("buatSlug", () => {
    expect(buatSlug("Hello World!")).toBe("hello-world");
  });
});
