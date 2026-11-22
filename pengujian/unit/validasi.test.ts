import { describe, it, expect } from "vitest";
import {
  validasiEmail,
  validasiNama,
  validasiPesan,
  validasiTelepon,
} from "../../src/utilitas/validasi";

describe("validasi", () => {
  it("email valid", () => {
    expect(validasiEmail("a@b.com").valid).toBe(true);
    expect(validasiEmail("salah").valid).toBe(false);
    expect(validasiEmail("").valid).toBe(false);
  });

  it("nama valid", () => {
    expect(validasiNama("Hafizh").valid).toBe(true);
    expect(validasiNama("a").valid).toBe(false);
    expect(validasiNama("").valid).toBe(false);
  });

  it("pesan valid", () => {
    expect(validasiPesan("ini pesan yang cukup panjang").valid).toBe(true);
    expect(validasiPesan("pendek").valid).toBe(false);
  });

  it("telepon valid", () => {
    expect(validasiTelepon("082118211502").valid).toBe(true);
    expect(validasiTelepon("123").valid).toBe(false);
    expect(validasiTelepon("").valid).toBe(true);
  });
});
