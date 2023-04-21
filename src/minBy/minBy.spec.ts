import "./minBy";

describe("Array.minBy", () => {
  it("works with an empty array", () => {
    const arr: number[] = [];
    const out = arr.minBy();
    expect(out).toBeUndefined();
  });

  it("counts max in array of objects", () => {
    const arr = [{ a: 10 }, { a: 30 }, { a: 12 }, { a: 20 }];
    const out = arr.minBy(x => x.a);
    expect(out).toEqual({ a: 10 });
  });
});
