import "./takeRight";

describe("Array.takeRight", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.takeRight(6);

    expect(output).toEqual([]);
  });

  it("takes right on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.takeRight(2);
    const expected = [3, 4];

    expect(output).toEqual(expected);
  });
});
