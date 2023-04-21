declare global {
  interface Array<T> {
    /**
     * The rest of the collection without its `n` last elements.
     *
     * @param n
     */
    dropRight(n: number): T[];
  }
}

if (!Array.prototype.dropRight) {
  Array.prototype.dropRight = function dropRight<T>(n: number): T[] {
    return this.slice(0, this.length - n);
  };
}

export {};
