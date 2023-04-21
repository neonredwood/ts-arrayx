declare global {
  interface Array<T> {
    /**
     * Drops longest prefix of elements that satisfy the `predicate` from the end.
     *
     * @param predicate
     */
    dropRightWhile(predicate: (value: T) => boolean): T[];
  }
}

if (!Array.prototype.dropRightWhile) {
  Array.prototype.dropRightWhile = function dropRightWhile<T>(predicate: (value: T) => boolean): T[] {
    let i = this.length - 1;
    while (i >= 0 && predicate(this[i])) {
      i--;
    }
    return this.slice(0, i + 1);
  };
}

export {};
