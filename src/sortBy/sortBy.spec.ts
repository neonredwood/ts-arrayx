import "./sortBy";

describe("Array.sortBy should", () => {
  it("handles empty arrays", () => {
    type TestType = { a: number; b: number };
    const input: TestType[] = [];
    const output = input.sortBy(x => x.a);

    expect(output).toEqual([]);
  });

  it("handles an object accessor", () => {
    const input = [
      { a: 1, b: 0 },
      { a: -1, b: 1 },
      { a: -20, b: 100 },
      { a: 14, b: -1.2 },
    ];
    const output = input.sortBy(x => x.a);
    const expected = [
      { a: -20, b: 100 },
      { a: -1, b: 1 },
      { a: 1, b: 0 },
      { a: 14, b: -1.2 },
    ];

    expect(output).toEqual(expected);
  });
});
