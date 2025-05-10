/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  if (thisArg === null || thisArg === undefined) {
    thisArg = globalThis;
  }

  thisArg = Object(thisArg);

  const funcSymbol = Symbol("func");
  thisArg[funcSymbol] = this;

  const result = thisArg[funcSymbol](...argArray);
  delete thisArg[funcSymbol];

  return result;
};
