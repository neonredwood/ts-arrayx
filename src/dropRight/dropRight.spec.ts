import "./dropRight";

describe("Array.dropRight", () => {
  it("drops empty arrays", () => {
    const input: number[] = [];
    const output = input.dropRight(6);

    expect(output).toEqual([]);
  });

  it("drops on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.dropRight(2);
    const expected = [0, 1, 2];

    expect(output).toEqual(expected);
  });
});
