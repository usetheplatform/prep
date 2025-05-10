/**
 * @param {string} str
 * @param {number} k
 * @return {number}
 */
export default function longestSubstringReplacement(str, k) {
  const counts = {};
  let left = 0;
  let maxCount = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const char = str[right];
    counts[char] = (counts[char] || 0) + 1;

    maxCount = Math.max(maxCount, counts[char]);

    while (right - left + 1 - maxCount > k) {
      counts[str[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
