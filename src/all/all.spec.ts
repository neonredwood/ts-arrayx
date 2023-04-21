import "./all";

describe("Array.all", () => {
  it("works with an empty array", () => {
    const arr: number[] = [];
    const out = arr.all((x) => x > 0);
    expect(out).toBe(true);
  });

  it("works in positive case", () => {
    const arr = [10, 30, 12, 20];
    const out = arr.all((x) => x > 0);
    expect(out).toBe(true);
  });

  it("works in negative case", () => {
    const arr = [10, -1, 12, 20];
    const out = arr.all((x) => x > 0);
    expect(out).toBe(false);
  });
});
