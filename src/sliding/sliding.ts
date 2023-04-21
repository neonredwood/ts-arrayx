import "./sliding";

declare global {
  interface Array<T> {
    /**
     * Groups elements in fixed size blocks by passing a "sliding window" over them
     * (as opposed to partitioning them, as is done in grouped.)
     *
     * @param size
     * @param step
     */
    sliding(size: number, step?: number): T[][];
  }
}

if (!Array.prototype.sliding) {
  Array.prototype.sliding = function sliding<T>(size: number, step = 1): T[][] {
    const ret = [];
    let i = 0;
    for (; i < this.length - size + step; i = i + step) {
      const sub = [];
      for (let j = 0; j < size; j++) {
        if (this[i + j] != undefined) {
          sub.push(this[i + j]);
        }
      }
      ret.push(sub);
    }
    return ret;
  };
}

export {};
