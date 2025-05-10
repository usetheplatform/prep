export default function flatten(array) {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      acc.push(...flatten(value));
    } else {
      acc.push(value);
    }

    return acc;
  }, []);
}
