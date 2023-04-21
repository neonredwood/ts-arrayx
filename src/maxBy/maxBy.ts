declare global {
  interface Array<T> {
    /**
     * Determine the largest element based on the return value of the provided maxFunction.
     *
     * @param maxFunction
     */
    maxBy(maxFunction?: (value: T, index: number, array: T[]) => number): T | undefined;
  }
}

if (!Array.prototype.maxBy) {
  Array.prototype.maxBy = function maxBy<T>(
    maxFunction: (value: T, index: number, array: T[]) => number,
  ): T | undefined {
    if (this.length === 0) {
      return undefined;
    }
    let maxValue: number = maxFunction(this[0], 0, this);
    let result: T | undefined;

    this.forEach((value, index, array) => {
      const v = maxFunction(value, index, array);

      if (v >= maxValue) {
        maxValue = v;
        result = value;
      }
    });

    return result;
  };
}

export {};
