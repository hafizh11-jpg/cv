import { describe, it, expect } from "vitest";
import { hashSha256, buatTokenAcak, buatHmac } from "../../src/utilitas/kriptografi";

describe("kriptografi", () => {
  it("hashSha256 menghasilkan hex 64 char", async () => {
    const h = await hashSha256("halo");
    expect(h).toHaveLength(64);
    expect(/^[0-9a-f]+$/.test(h)).toBe(true);
  });

  it("hashSha256 deterministik", async () => {
    const a = await hashSha256("test");
    const b = await hashSha256("test");
    expect(a).toBe(b);
  });

  it("buatTokenAcak panjang", () => {
    const t = buatTokenAcak(16);
    expect(t).toHaveLength(32);
  });

  it("buatHmac menghasilkan hex", async () => {
    const h = await buatHmac("pesan", "kunci");
    expect(h).toHaveLength(64);
  });
});
