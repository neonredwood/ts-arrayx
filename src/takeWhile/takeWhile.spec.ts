import "./takeWhile";

describe("Array.takeWhile", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.takeWhile(x => x > 0);

    expect(output).toEqual([]);
  });

  it("takes on number array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.takeWhile(x => x <= 3);
    const expected = [0, 1, 2, 3];

    expect(output).toEqual(expected);
  });

  it("takes on false condition array", () => {
    const input = [0, 1, 2, 3, 4];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const output = input.takeWhile(x => false);

    expect(output).toEqual([]);
  });
});
