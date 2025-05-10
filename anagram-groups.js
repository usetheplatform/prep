/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export default function anagramGroups(strs) {
  const groups = {};

  for (const str of strs) {
    const sortedStr = sortString(str);

    if (Array.isArray(groups[sortedStr])) {
      groups[sortedStr].push(str);
    } else {
      groups[sortedStr] = [str];
    }
  }

  const result = [];
  Object.values(groups).forEach((group) => {
    result.push(group);
  });

  return result;
}

function sortString(str) {
  return str.split("").sort().join("");
}
