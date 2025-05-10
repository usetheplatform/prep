/**
 * @param {Array<string>} items
 * @param {{sorted?: boolean, length?: number, unique?: boolean}} [options]
 * @return {string}
 */
export default function listFormat(items, options = {}) {
  items = items.filter((item) => item !== "");

  if (options.unique) {
    items = [...new Set(items)];
  }

  if (options.sorted) {
    items.sort();
  }

  if (options.length && options.length > 0) {
    const len = options.length;

    if (items.length > len) {
      const others = items.length - len;

      return `${items.slice(0, len).join(", ")} and ${others} other${others > 1 ? "s" : ""}`;
    }
  }

  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
