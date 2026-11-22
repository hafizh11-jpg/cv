import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@solidjs/testing-library";
import FormulirKontak from "../../src/komponen/kontak/FormulirKontak";

describe("FormulirKontak", () => {
  it("menampilkan error jika nama kosong", async () => {
    render(() => <FormulirKontak />);
    const tombol = screen.getByRole("button", { name: /kirim pesan/i });
    await fireEvent.click(tombol);
    expect(screen.getAllByText(/wajib diisi/i).length).toBeGreaterThan(0);
  });

  it("menerima input nama", async () => {
    render(() => <FormulirKontak />);
    const input = screen.getByLabelText(/nama/i) as HTMLInputElement;
    await fireEvent.input(input, { target: { value: "Hafizh" } });
    expect(input.value).toBe("Hafizh");
  });
});
