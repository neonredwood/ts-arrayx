declare global {
  interface Array<T> {
    /**
     * Returns the distinct elements in an array.
     */
    distinct(): T[];
  }
}

if (!Array.prototype.distinct) {
  Array.prototype.distinct = function distinct<T>(this: Array<T>): T[] {
    return Array.from(new Set(this));
  };
}

export {};
