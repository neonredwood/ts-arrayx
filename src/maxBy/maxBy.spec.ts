import "./maxBy";

describe("Array.maxBy", () => {
  it("works with an empty array", () => {
    const arr: number[] = [];
    const out = arr.maxBy();
    expect(out).toBeUndefined();
  });

  it("counts max in array of objects", () => {
    const arr = [{ a: 10 }, { a: 30 }, { a: 12 }, { a: 20 }];
    const out = arr.maxBy(x => x.a);
    expect(out).toEqual({ a: 30 });
  });
});
