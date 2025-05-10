function factorial(n, acc = 1) {
  if (n === 0) {
    return acc;
  }

  return n * factorial(n - 1, n * acc);
}
