/**
 * @param {string} str
 * @return {boolean}
 */
function isBalancedBrackets(str) {
  const bracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (bracketsMap[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      const lastBracket = stack.pop();
      const expectedClosingBracket = bracketsMap[lastBracket];

      if (expectedClosingBracket !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const str = "{}[]()";

console.log(isBalancedBrackets(str));
