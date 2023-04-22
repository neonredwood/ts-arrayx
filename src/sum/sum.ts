declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns the sum of an array of numbers.
     * The sum is 0 for empty arrays.
     *
     * @param this
     */
    sum(this: ReadonlyArray<number>): number;
  }
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function sum(this: ReadonlyArray<number>): number {
    return this.reduce((a, b) => a + b, 0);
  };
}

export {};
