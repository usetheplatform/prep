/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  const n = numbers.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((acc, val) => acc + val, 0);

  return expectedSum - actualSum;
}

console.log(findMissingNumberInSequence([3, 0, 4, 2, 1]));
