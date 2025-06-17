function findExtreme(items, type = "min") {
  if (items.length === 0) {
    return null;
  }

  const comparator = type === "min" ? (a, b) => a.value < b.value : (a, b) => a.value > b.value;

  let result = items[0];

  for (const item of items) {
    if (comparator(item, result) {
      result = item;
    }
  }

  return result;
}


function findAllExtremes(items, type = "min") {
  if (items.length === 0) {
    return null;
  }


  const compatator = type === "min" ? Math.min : Math.max;

  const extremeValue = items.reduce((acc, current) => compatator(acc, current.value), items[0].value);

  return items.filter(item => item.value === extremeValue);
}
