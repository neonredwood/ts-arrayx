import "./groupBy";

describe("Array.groupBy", () => {
  it("groups by empty array", () => {
    const original: { name: string; value: number }[] = [];
    const out = original.groupBy((x) => x.name);

    expect(out.size).toEqual(0);
  });

  it("groups by string key", () => {
    const original = [5, 5, 1];
    const out = original.groupBy((x) => "k" + x);

    expect(out.size).toEqual(2);
    expect(out.get("k1")).toEqual([1]);
    expect(out.get("k5")).toEqual([5, 5]);
  });

  it("groups by number key", () => {
    const original = [5, 5, 1];
    const out = original.groupBy((x) => 2 * x);

    expect(out.size).toEqual(2);
    expect(out.get(2)).toEqual([1]);
    expect(out.get(10)).toEqual([5, 5]);
  });

  it("groups objects by string key", () => {
    const original = [
      { name: "groupA", value: 13 },
      { name: "groupB", value: 1200 },
      { name: "groupA", value: -1 },
    ];
    const out = original.groupBy((x) => x.name);

    expect(out.size).toEqual(2);
    expect(out.get("groupA")).toEqual([
      { name: "groupA", value: 13 },
      { name: "groupA", value: -1 },
    ]);
    expect(out.get("groupB")).toEqual([{ name: "groupB", value: 1200 }]);
  });
});
