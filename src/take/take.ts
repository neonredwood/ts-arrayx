declare global {
  interface Array<T> {
    /**
     * Selects the first `n` elements.
     *
     * @param n
     */
    take(n: number): T[];
  }
}

if (!Array.prototype.take) {
  Array.prototype.take = function take<T>(n: number): T[] {
    return this.slice(0, n);
  };
}

export {};
