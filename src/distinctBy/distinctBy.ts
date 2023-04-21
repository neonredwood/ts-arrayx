declare global {
  interface Array<T> {
    /**
     * Returns a new array with distinct elements, as distinguished by the input function.
     *
     * @param distinctFunction A function which returns a property or result by which to distinguish
     * elements in the array.
     */
    distinctBy(distinctFunction: (value: T, index: number, array: T[]) => string | number): T[];
  }
}

if (!Array.prototype.distinctBy) {
  Array.prototype.distinctBy = function distinctBy<T>(
    this: Array<T>,
    distinctFunction: (value: T, index: number, array: T[]) => string | number,
  ): T[] {
    type Strumber = string | number;
    const existing: Strumber[] = [];

    const filtered = this.filter((value, index, array) => {
      const key = distinctFunction(value, index, array);

      const isUnique = existing.indexOf(key) < 0;

      if (isUnique) {
        existing.push(key);
      }

      return isUnique;
    });

    return filtered;
  };
}

export {};
