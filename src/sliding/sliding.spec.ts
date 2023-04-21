import "./sliding";

describe("Array.sliding", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.sliding(6);

    expect(output).toEqual([]);
  });

  it("slides arrays by one", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.sliding(3);
    const expected = [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
    ];

    expect(output).toEqual(expected);
  });

  it("slides arrays by N", () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output = input.sliding(5, 2);
    const expected = [
      [0, 1, 2, 3, 4],
      [2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8],
      [6, 7, 8, 9],
    ];

    expect(output).toEqual(expected);
  });
});
