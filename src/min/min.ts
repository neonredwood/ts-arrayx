declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns the minimum value from an array of strings. If the array
     * is empty, the result is undefined.
     *
     * The minimum value is calculated with lexical order.
     *
     * @param this
     */
    min(this: ReadonlyArray<string>): string | undefined;
    /**
     * Returns the minimum value from an array of numbers. If the array
     * is empty, the result is undefined.
     *
     * @param this
     */
    min(this: ReadonlyArray<number>): number | undefined;
  }
}

if (!Array.prototype.min) {
  function min(this: ReadonlyArray<number>): number | undefined;
  function min(this: ReadonlyArray<string>): string | undefined;
  // eslint-disable-next-line no-inner-declarations
  function min(this: ReadonlyArray<string | number>) {
    if (this.length === 0) {
      return undefined;
    }
    let minValue: number | string = this[0];
    let result: string | number | undefined = undefined;

    this.forEach(value => {
      const v = value;

      if (v <= minValue || !v) {
        minValue = v;
        result = value;
      }
    });

    return result;
  }

  Array.prototype.min = min;
}

export {};
