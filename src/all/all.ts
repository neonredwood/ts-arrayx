declare global {
  interface Array<T> {
    all(callbackFn: (value: T) => boolean): boolean;
  }
}

if (!Array.prototype.all) {
  Array.prototype.all = function all<T>(callbackFn: (value: T) => boolean): boolean {
    for (let i = 0; i < this.length; i++) {
      const predicate = callbackFn(this[i]);
      if (!predicate) {
        return false;
      }
    }
    return true;
  };
}

export {};
