/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (typeof valueA !== typeof valueB) return false;

  if (typeof valueA === "object") {
    if (valueA === null || valueB === null) return valueA === valueB;

    const isArrayA = Array.isArray(valueA);
    const isArrayB = Array.isArray(valueB);

    if (isArrayA !== isArrayB) return false;

    if (isArrayA && isArrayB) {
      if (valueA.length !== valueB.length) return false;
      for (let i = 0; i < valueA.length; i++) {
        if (!deepEqual(valueA[i], valueB[i])) return false;
      }
      return true;
    }

    const keysA = Object.keys(valueA);
    const keysB = Object.keys(valueB);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(valueA[key], valueB[key])) return false;
    }

    return true;
  }

  return valueA === valueB;
}
