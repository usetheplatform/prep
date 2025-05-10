function fibonacci(n, memo = {}) {
  if (n <= 2) {
    return n;
  }

  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

console.log(fibonacci(5));

function fibonacciIter(n) {
  if (n <= 2) return n;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
