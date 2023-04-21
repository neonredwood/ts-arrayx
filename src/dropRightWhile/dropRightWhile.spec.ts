import "./dropRightWhile";

describe("Array.dropRightWhile", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.dropRightWhile(x => x > 0);

    expect(output).toEqual([]);
  });

  it("drops on number array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.dropRightWhile(x => x >= 3);
    const expected = [0, 1, 2];

    expect(output).toEqual(expected);
  });

  it("drops on false condition array", () => {
    const input = [0, 1, 2, 3, 4];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const output = input.dropRightWhile(x => false);
    const expected = [0, 1, 2, 3, 4];

    expect(output).toEqual(expected);
  });
});
