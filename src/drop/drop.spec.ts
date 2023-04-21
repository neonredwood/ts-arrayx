import "./drop";

describe("Array.drop", () => {
  it("drops empty arrays", () => {
    const input: number[] = [];
    const output = input.drop(6);

    expect(output).toEqual([]);
  });

  it("drops on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.drop(2);
    const expected = [2, 3, 4];

    expect(output).toEqual(expected);
  });
});
