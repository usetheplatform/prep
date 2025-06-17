function findMapWithMinValue(maps, key) {
  if (maps.length === 0) {
    return null;
  }

  let result = null;
  let minValue = Number.POSITIVE_INFINITY;

  for (const map of maps) {
    if (map[key] !== undefined && map[key] < minValue) {
      minValue = map[key];
      result = map;
    }
  }

  return result;
}
