declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Computes the average of an array of numbers. If the array
     * is empty the result is undefined.
     *
     * @param this
     */
    avg(this: ReadonlyArray<number>): number | undefined;
  }
}

if (!Array.prototype.avg) {
  Array.prototype.avg = function avg(this: ReadonlyArray<number>): number | undefined {
    if (this.length === 0) {
      return undefined;
    }
    return this.reduce((a, b) => a + b, 0) / this.length;
  };
}

export {};
