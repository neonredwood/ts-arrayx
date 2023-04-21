import "./take";

describe("Array.take", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.take(6);

    expect(output).toEqual([]);
  });

  it("takes on real array", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.take(2);
    const expected = [0, 1];

    expect(output).toEqual(expected);
  });
});
