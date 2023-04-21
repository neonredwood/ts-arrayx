declare global {
  interface Array<T> {
    /**
     * Drops longest prefix of elements that satisfy the `predicate`.
     *
     * @param predicate
     */
    dropWhile(predicate: (value: T) => boolean): T[];
  }
}

if (!Array.prototype.dropWhile) {
  Array.prototype.dropWhile = function dropWhile<T>(predicate: (value: T) => boolean): T[] {
    let i = 0;
    while (i < this.length && predicate(this[i])) {
      i++;
    }
    return this.slice(i, this.length);
  };
}

export {};
