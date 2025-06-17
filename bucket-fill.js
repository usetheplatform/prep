function bucketFill(picture) {
  const rows = picture.length;
  const columns = picture[0].length;
  const visited = Array.from({ length: rows }, () =>
    Array(columns).fill(false),
  );
  let repaints = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function dfs(row, col, color) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= columns ||
      visited[row][col] ||
      picture[row][col] !== color
    )
      return;
    visited[row][col] = true;
    picture[row][col] = color;
    repaints++;
    for (const [dx, dy] of directions) {
      dfs(row + dx, col + dy, color);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (!visited[row][col]) {
        dfs(row, col, picture[row][col]);
        repaints++;
      }
    }
  }

  return repaints;
}
