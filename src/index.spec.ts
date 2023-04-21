import "./index";

describe("main index include", () => {
  it("includes 'avg' function", () => expect([].avg).toBeDefined());

  it("includes 'chunk' function", () => expect([].chunk).toBeDefined());

  it("includes 'distinct' function", () => expect([].distinct).toBeDefined());
  it("includes 'distinctBy' function", () => expect([].distinctBy).toBeDefined());

  it("includes 'drop' function", () => expect([].drop).toBeDefined());
  it("includes 'dropRight' function", () => expect([].dropRight).toBeDefined());
  it("includes 'dropRightWhile' function", () => expect([].dropRightWhile).toBeDefined());
  it("includes 'dropWhile' function", () => expect([].dropWhile).toBeDefined());

  it("includes 'first' function", () => expect([].first).toBeDefined());

  it("includes 'groupBy' function", () => expect([].groupBy).toBeDefined());
  it("includes 'grouped' function", () => expect([].grouped).toBeDefined());

  it("includes 'last' function", () => expect([].last).toBeDefined());

  it("includes 'max' function", () => expect([].max).toBeDefined());
  it("includes 'maxBy' function", () => expect([].maxBy).toBeDefined());

  it("includes 'min' function", () => expect([].min).toBeDefined());
  it("includes 'minBy' function", () => expect([].minBy).toBeDefined());

  it("includes 'sliding' function", () => expect([].sliding).toBeDefined());

  it("includes 'sortBy' function", () => expect([].sortBy).toBeDefined());

  it("includes 'sum' function", () => expect([].sum).toBeDefined());

  it("includes 'take' function", () => expect([].take).toBeDefined());
  it("includes 'takeRight' function", () => expect([].takeRight).toBeDefined());
  it("includes 'takeRightWhile' function", () => expect([].takeRightWhile).toBeDefined());
  it("includes 'takeWhile' function", () => expect([].takeWhile).toBeDefined());
});
