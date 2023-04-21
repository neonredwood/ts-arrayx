import "./avg";

describe("Array.avg", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.avg();
    expect(output).toBeUndefined();
  });

  it("compute average in a number array", () => {
    const input = [2, 4, 2, 4, 0, 6, 3];
    const output = input.avg();
    const expected = 3;
    expect(output).toEqual(expected);
  });
});
