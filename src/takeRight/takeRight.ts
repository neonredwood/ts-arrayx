declare global {
  interface Array<T> {
    /**
     * Selects the last `n` elements of this array.
     *
     * @param n
     */
    takeRight(n: number): T[];
  }
}

if (!Array.prototype.takeRight) {
  Array.prototype.takeRight = function takeRight<T>(n: number): T[] {
    return this.slice(-n);
  };
}

export {};
