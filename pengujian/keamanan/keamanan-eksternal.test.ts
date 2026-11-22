import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("keamanan eksternal", () => {
  it("index.html memiliki Content-Security-Policy", () => {
    const html = readFileSync(resolve(process.cwd(), "index.html"), "utf-8");
    expect(html).toContain("Content-Security-Policy");
    expect(html).toContain("frame-ancestors 'none'");
  });
});
