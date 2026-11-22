import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import App from "../../src/App";

describe("Aplikasi", () => {
  it("merender nama pengguna", () => {
    const { container } = render(() => <App />);
    expect(container.textContent).toContain("Hafizh Muhammad Hikmatiar");
  });

  it("merender bagian kontak", () => {
    const { container } = render(() => <App />);
    expect(container.textContent).toContain("Kontak");
  });
});
