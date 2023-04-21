import "./max";

describe("Array.max", () => {
  it("works with an empty array", () => {
    const arr: number[] = [];
    const out = arr.max();
    expect(out).toBeUndefined();
  });

  it("finds max in array of strings", () => {
    const arr = ["a", "b", "c"];
    const out = arr.max();
    expect(out).toBe("c");
  });

  it("finds max in array of number", () => {
    const arr = [-1, -2, -3, 5, 4, 100];
    const out = arr.max();
    expect(out).toBe(100);
  });
});
