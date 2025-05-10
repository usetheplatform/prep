function deepFreeze(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        deepFreeze(obj[key]);
      }
    }
  }

  return Object.freeze(obj);
}
