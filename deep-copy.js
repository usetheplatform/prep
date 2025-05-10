function deepCopy(obj) {
  if (object === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((o) => deepCopy(o));
  }

  const copy = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

const originalObject = { a: 1, b: { c: 2 } };
const deepCopyObject = deepCopy(originalObject);
console.log(deepCopyObject); // { a: 1, b: { c: 2 } }
