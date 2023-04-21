import "./first";

describe("Array.first", () => {
  it("handles empty arrays", () => {
    const input: Array<number> = [];
    const output = input.first();

    expect(output).toBeUndefined();
  });

  it("yields first on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.first();
    const expected = 0;

    expect(output).toEqual(expected);
  });
});
