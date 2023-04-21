import "./last";

describe("Array.last", () => {
  it("handles empty array", () => {
    const input: number[] = [];
    const output = input.last();

    expect(output).toBeUndefined();
  });

  it("yields last on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.last();
    const expected = 4;

    expect(output).toEqual(expected);
  });
});
