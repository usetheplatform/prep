/**
 * @param {number} n
 * @return {number}
 */
export default function bitReversal(n) {
  const binary = n.toString(2).padStart(32, "0");
  const reversed = binary.split("").reverse().join("");
  const reversedNumber = Number.parseInt(reversed, 2);

  return reversedNumber;
}
