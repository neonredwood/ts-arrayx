declare global {
  interface Array<T> {
    /**
     * Returns the first element in the array.
     */
    first(): T;
  }
}

if (!Array.prototype.first) {
  Array.prototype.first = function <T>(): T {
    return this[0];
  };
}

export {};
