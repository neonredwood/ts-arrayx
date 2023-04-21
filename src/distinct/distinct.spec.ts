import "./distinct";

describe("Array.distinct", () => {
  it("works on empty array", () => {
    const arr: number[] = [];
    const out = arr.distinct();
    expect(out.length).toBe(0);
  });

  it("works on number arrays", () => {
    const arr = [4, 4, 4, 13, 0, 15, 4];
    const out = arr.distinct();
    expect(out).toEqual([4, 13, 0, 15]);
  });

  it("works on string arrays", () => {
    const arr = ["4", "4", "4", "13", "0", "15", "4"];
    const out = arr.distinct();
    expect(out).toEqual(["4", "13", "0", "15"]);
  });

  it("works with mixed arrays", () => {
    const arr = [
      "string",
      "",
      null,
      null,
      23,
      { x: 13 },
      { x: 13 },
      NaN,
      NaN,
      undefined,
      undefined,
      "string",
      1,
      1,
      2,
      3,
    ];
    const out = arr.distinct();
    expect(out).toEqual(["string", "", null, 23, { x: 13 }, { x: 13 }, NaN, undefined, 1, 2, 3]);
  });
});
