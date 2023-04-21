declare global {
  interface Array<T> {
    /**
     * Sorts this array according to the ordering implied by
     * applying the transformation function to each element.
     *
     * @param transformation
     */
    sortBy(transformation: (value: T) => number): T[];
  }
}

if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function sortBy<T>(this: T[], transformation: (value: T) => number): T[] {
    return this.slice().sort((a, b) => transformation(a) - transformation(b));
  };
}

export {};
