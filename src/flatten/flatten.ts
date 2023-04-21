declare global {
  interface Array<T> {
    /**
     * Removes one level of nesting from a multidimensional array.
     */
    flatten(): T;
  }
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function flatten<T>(): T[] {
    return this.flatMap(x => x);
  };
}

export {};
