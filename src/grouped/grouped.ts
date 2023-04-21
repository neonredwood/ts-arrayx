import "../sliding";

declare global {
  interface Array<T> {
    /**
     * Groups the array into groups of size n. If the array is not evenly divisible by n,
     * the last group will hold the remainder.
     *
     * @param size
     */
    grouped(size: number): T[][];
  }
}

if (!Array.prototype.grouped) {
  Array.prototype.grouped = function grouped<T>(by: number): T[][] {
    return this.sliding(by, by);
  };
}

export {};
