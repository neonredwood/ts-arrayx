import "./distinctBy";

describe("Array.distinctBy", () => {
  it("works with empty array", () => {
    const input: string[] = [];
    const output = input.distinctBy(str => str.length);
    expect(output).toEqual([]);
  });

  it("works with object property picker", () => {
    const arr = ["1", "22", "33", "4", "5555"];
    const out = arr.distinctBy(str => str.length);
    expect(out).toEqual(["1", "22", "5555"]);
  });

  it("works with a field accessor", () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 1 }, { a: 2 }];
    const out = arr.distinctBy(x => x.a);
    expect(out).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }]);
  });
});
