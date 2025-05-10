/**
 * @param {string} str
 * @return {string}
 */
export default function longestPalindromeSubstring(str) {
  if (str.length < 2) {
    return str;
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    const len1 = expandAroundCenter(str, i, i);
    const len2 = expandAroundCenter(str, i, i + 1);

    const maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return str.substring(start, end + 1);
}

function expandAroundCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
