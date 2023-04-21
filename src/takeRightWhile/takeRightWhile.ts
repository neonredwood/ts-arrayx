declare global {
  interface Array<T> {
    /**
     * * Takes longest prefix of elements from the end that satisfy the `predicate`.
     *
     * @param predicate
     */
    takeRightWhile(predicate: (value: T) => boolean): T[];
  }
}

if (!Array.prototype.takeRightWhile) {
  Array.prototype.takeRightWhile = function takeRightWhile<T>(predicate: (value: T) => boolean): T[] {
    let i = this.length - 1;
    while (i > 0 && predicate(this[i])) {
      i--;
    }
    return this.slice(i + 1);
  };
}

export {};
