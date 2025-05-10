/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const classes = [];

  const process = (item) => {
    if (
      item === 0 ||
      item === "" ||
      item === null ||
      item === undefined ||
      item === false
    )
      return;

    if (typeof item === "string" || typeof item === "number") {
      classes.push(String(item));
    } else if (Array.isArray(item)) {
      item.forEach(process);
    } else if (typeof item === "object") {
      for (const key in item) {
        if (item[key]) {
          classes.push(key);
        }
      }
    }
  };

  args.forEach(process);

  return classes.join(" ");
}
