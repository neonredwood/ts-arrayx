import "./chunk";

describe("Array.chunk", () => {
  it("handles empty arrays", () => {
    const testInvocation = () => {
      const input: number[] = [];
      input.chunk(1);
    };
    expect(testInvocation).toThrow(RangeError);
  });

  it("chunks arrays", () => {
    const input = [0, 1, 2, 3, 4, 5];
    const output = input.chunk(6);
    const expected = input.map(s => [s]);

    expect(output).toEqual(expected);
  });

  it("chunks odd arrays", () => {
    const input = [0, 1, 2, 3, 4];
    const output = input.chunk(3);
    const expected = [[0, 1], [2, 3], [4]];

    expect(output).toEqual(expected);
  });

  it("fails on negative chunk size", () => {
    const testInvocation = () => {
      const input = [0, 1, 2, 3, 4];
      input.chunk(-1);
    };
    expect(testInvocation).toThrow(RangeError);
  });

  it("fails on 0 chunk size", () => {
    const testInvocation = () => {
      const input = [0, 1, 2, 3, 4];
      input.chunk(0);
    };
    expect(testInvocation).toThrow(RangeError);
  });

  it("fails on huge chunk size", () => {
    const testInvocation = () => {
      const input = [0, 1, 2, 3, 4];
      input.chunk(15);
    };
    expect(testInvocation).toThrow(RangeError);
  });
});
