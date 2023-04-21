import "./min";

describe("Array.min", () => {
  it("works with an empty array", () => {
    const arr: number[] = [];
    const out = arr.min();
    expect(out).toBeUndefined();
  });

  it("finds min in array of strings", () => {
    const arr = ["a", "b", "c"];
    const out = arr.min();
    expect(out).toBe("a");
  });

  it("finds min in array of number", () => {
    const arr = [-1, -2, -3, 5, 4, 100];
    const out = arr.min();
    expect(out).toBe(-3);
  });
});
