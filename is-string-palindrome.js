/**
 * @param {string} str
 * @return {boolean}
 */
export default function isStringPalindrome(str) {
  const x = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let i = 0;
  let j = x.length - 1;

  while (i < j) {
    const a = x[i];
    const b = x[j];

    if (a !== b) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
