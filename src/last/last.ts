declare global {
  interface Array<T> {
    /**
     * Returns the last element in the array.
     */
    last(): T;
  }
}

if (!Array.prototype.last) {
  Array.prototype.last = function <T>(): T {
    return this[this.length - 1];
  };
}

export {};
