declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns the sum of an array of numbers. The sum is undefined for empty arrays.
     *
     * @param this
     */
    sum(this: ReadonlyArray<number>): number | undefined;
  }
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function sum(this: ReadonlyArray<number>): number | undefined {
    if (this.length === 0) {
      return undefined;
    }
    return this.reduce((a, b) => a + b, 0);
  };
}

export {};
