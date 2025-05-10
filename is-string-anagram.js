/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export default function isStringAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
