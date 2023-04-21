import "./flatten";

describe("Array.flatten", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.flatten();

    expect(output).toEqual([]);
  });

  it("flatten on real array", () => {
    const input = [
      [1, 2],
      [1, 3, 69],
    ];
    const output = input.flatten();
    const expected = [1, 2, 1, 3, 69];

    expect(output).toEqual(expected);
  });
});
