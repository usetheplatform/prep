/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
  const map = {};

  for (const num of numbers) {
    if (map[num.toString()]) {
      return true;
    }

    map[num.toString()] = 1;
  }

  return false;
}
