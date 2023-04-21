declare global {
  interface Array<T> {
    /**
     * Takes longest prefix of elements that satisfy the `predicate`.
     *
     * @param predicate
     */
    takeWhile(predicate: (value: T) => boolean): T[];
  }
}

if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function takeWhile<T>(predicate: (value: T) => boolean): T[] {
    let i = 0;
    while (i < this.length && predicate(this[i])) {
      i++;
    }
    return this.slice(0, i);
  };
}

export {};
