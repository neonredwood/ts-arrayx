declare global {
  interface Array<T> {
    first(): T;
  }
}

if (!Array.prototype.first) {
  Array.prototype.first = function <T>(): T {
    return this[0];
  };
}

export {};
