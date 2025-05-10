/**
 * @param {number} num
 * @return {number}
 */
export default function countOnesInBinary(num) {
  return num
    .toString(2)
    .split("")
    .filter((bit) => bit === "1").length;
}

console.log(countOnesInBinary(8));

function bitCounting(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(countOnesInBinary(i));
  }

  return result;
}

console.log(bitCounting(3));
