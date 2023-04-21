declare global {
  interface Array<T> {
    groupBy(callbackFn: (value: T, index: number, array: T[]) => number): Map<number, T[]>;
    groupBy(callbackFn: (value: T, index: number, array: T[]) => string): Map<string, T[]>;
  }
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function groupBy<T, G>(
    this: T[],
    callbackFn: (value: T, index: number, array: T[]) => G,
  ): Map<G, T[]> {
    const map = new Map<G, T[]>();

    this.forEach((item, currentIndex, array) => {
      const key = callbackFn(item, currentIndex, array);

      const targetArray = map.get(key) || [];
      targetArray.push(item);
      map.set(key, targetArray);
    });

    return map;
  };
}

export {};
