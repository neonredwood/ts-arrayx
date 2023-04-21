import "./grouped";

describe("Array.grouped", () => {
  it("handles empty arrays", () => {
    const input: number[] = [];
    const output = input.grouped(6);

    expect(output).toEqual([]);
  });

  it("groups arrays", () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const output = input.grouped(5);
    const expected = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    expect(output).toEqual(expected);
  });

  it("groups odd arrays", () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const output = input.grouped(5);
    const expected = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8],
    ];

    expect(output).toEqual(expected);
  });
});
