import { describe, it, expect } from "vitest";
import { createDraggable } from "animejs";

describe("draggable", () => {
  it("creates on nodelist", () => {
    const a = document.createElement("div");
    a.className = "brutal-card";
    const b = document.createElement("button");
    b.className = "brutal-btn";
    document.body.appendChild(a);
    document.body.appendChild(b);
    const els = document.querySelectorAll(".brutal-card, .brutal-btn");
    const d = createDraggable(els, { dragThreshold: 6 });
    console.log("result", d);
    expect(d).toBeTruthy();
    a.remove(); b.remove();
  });
});
