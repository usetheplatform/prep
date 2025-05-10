/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;
  let startIndex = 0;

  if (acc === undefined) {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }

    acc = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};

[1, 2, 3].myReduce((prev, curr) => prev + curr, 0); // 6
