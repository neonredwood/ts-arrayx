declare global {
  interface Array<T> {
    /**
     * Selects all elements except first `n` ones.
     *
     * @param n
     */
    drop(n: number): T[];
  }
}

if (!Array.prototype.drop) {
  Array.prototype.drop = function drop<T>(n: number): T[] {
    return this.slice(n, this.length);
  };
}

export {};
