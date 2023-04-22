import "./sum";

describe("Array.sum should", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.sum();
    expect(output).toBe(0);
  });

  it("sums an array", () => {
    const input = [4, 6, 10, 20];
    const output = input.sum();
    expect(output).toEqual(40);
  });

  it("sums values in array of numbers", () => {
    const arr = [1, 2, 3, 3.4, 1, 4.5];
    const out = arr.sum();
    expect(out).toBe(14.9);
  });
});
