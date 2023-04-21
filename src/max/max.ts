declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns the maximum value from an array of strings. If the array
     * is empty, the result is undefined.
     *
     * The maximum value is calculated with lexical order.
     *
     * @param this
     */
    max(this: ReadonlyArray<string>): string | undefined;
    /**
     * Returns the maximum value from an array of numbers. If the array
     * is empty, the result is undefined.
     *
     * @param this
     */
    max(this: ReadonlyArray<number>): number | undefined;
  }
}

if (!Array.prototype.max) {
  function max(this: ReadonlyArray<number>): number | undefined;
  function max(this: ReadonlyArray<string>): string | undefined;
  // eslint-disable-next-line no-inner-declarations
  function max(this: ReadonlyArray<string | number>) {
    if (this.length === 0) {
      return undefined;
    }
    let maxValue: number | string = this[0];
    let result: string | number | undefined = undefined;

    this.forEach(value => {
      const v = value;

      if (v >= maxValue) {
        maxValue = v;
        result = value;
      }
    });

    return result;
  }

  Array.prototype.max = max;
}

export {};
