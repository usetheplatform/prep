/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export default function pairSum(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(numbers[i], i);
  }
}

console.log(pairSum([0, 7, 1, 9], 7)); // [0, 1]
