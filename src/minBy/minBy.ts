declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Finds the first element which yields the smallest value measured by function `f`.
     *
     * @param f
     */
    minBy(f?: (value: T, index: number, array: T[]) => number): T | undefined;
  }
}

if (!Array.prototype.minBy) {
  Array.prototype.minBy = function minBy<T>(f: (value: T, index: number, array: T[]) => number): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    let minValue: number = f(this[0], 0, this);
    let result: T | undefined;

    this.forEach((value, index, array) => {
      const v = f(value, index, array);

      if (v <= minValue) {
        minValue = v;
        result = value;
      }
    });

    return result;
  };
}

export {};
