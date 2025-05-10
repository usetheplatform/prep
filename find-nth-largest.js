function findNthLargest(arr, n) {
  if (n < 1 || n > arr.length) return null;

  return [...arr].sort((a, b) => b - a)[n - 1];
}

function findNthLargest2(arr, n) {
  if (n < 1 || n > arr.length) return null;

  const k = arr.length - n;

  function quickSelect(left, right) {
    const pivot = arr[right];
    let p = left;

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        [arr[i], arr[p]] = [arr[p], arr[i]];
        p++;
      }
    }

    [arr[p], arr[right]] = [arr[right], arr[p]];

    if (p === k) return arr[p];
    if (p < k) return quickSelect(p + 1, right);
    return quickSelect(left, p - 1);
  }

  return quickSelect(0, arr.length - 1);
}

function findNthLargest3(arr, n) {
  if (n < 1 || n > arr.length) return null;

  const heap = [];

  for (const num of arr) {
    heap.push(num);
    heap.sort((a, b) => b - a);

    if (heap.length > n) {
      heap.shift();
    }
  }

  return heap[0];
}
