function partial(fn, ...args) {
  return function (...nextArgs) {
    return fn(...args, ...nextArgs);
  };
}

function add(a, b) {
  return a + b;
}

const addTwoCustom = partial(add, 2);
console.log(addTwoCustom(3));
