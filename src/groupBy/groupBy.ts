declare global {
  interface Array<T> {
    /**
     * Partitions this array into a Map of arrays according to some `discriminator` function.
     *
     * @param discriminator
     */
    groupBy(discriminator: (value: T, index: number, array: T[]) => number): Map<number, T[]>;
    groupBy(discriminator: (value: T, index: number, array: T[]) => string): Map<string, T[]>;
  }
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function groupBy<T, G>(
    this: T[],
    discriminator: (value: T, index: number, array: T[]) => G,
  ): Map<G, T[]> {
    const map = new Map<G, T[]>();

    this.forEach((item, currentIndex, array) => {
      const key = discriminator(item, currentIndex, array);

      const targetArray = map.get(key) || [];
      targetArray.push(item);
      map.set(key, targetArray);
    });

    return map;
  };
}

export {};
