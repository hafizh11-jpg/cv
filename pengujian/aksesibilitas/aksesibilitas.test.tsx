import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import axe from "axe-core";
import Tombol from "../../src/komponen/umum/Tombol";

describe("aksesibilitas", () => {
  it("Tombol tidak memiliki pelanggaran a11y kritis", async () => {
    const { container } = render(() => <Tombol>Simpan</Tombol>);
    const hasil = await axe.run(container);
    const kritis = hasil.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious",
    );
    expect(kritis).toHaveLength(0);
  });
});
