declare global {
  interface Array<T> {
    /**
     * Breaks an array into n chunks. If the array size is not evenly divisible by n,
     * the last chunk will hold the remainder.
     *
     * @param n Number of chunks in which to split the array.
     */
    chunk(n: number): T[][];
  }
}

if (!Array.prototype.chunk) {
  Array.prototype.chunk = function chunk<T>(n: number): T[][] {
    if (this.length === 0) {
      throw new RangeError("Empty array cannot be chunked.");
    }
    // empty or negative chunks
    else if (n <= 0) {
      throw new RangeError("Number of chunks must be greater than 0.");
    }
    // over chunked
    else if (n > this.length) {
      throw new RangeError("Number of chunks must less than array size.");
    }

    const ret = [];
    const [...arr] = this;
    const chunkSize = Math.ceil(this.length / n);
    while (arr.length) {
      ret.push(arr.splice(0, chunkSize));
    }
    return ret;
  };
}

export {};
