function buildTree(array) {
  if (!array.length) return null;

  const nodes = array.map((value) =>
    value === null
      ? null
      : {
          value,
          left: null,
          right: null,
        },
  );

  let i = 0;
  for (let j = 1; j < nodes.length; j += 2) {
    const current_node = nodes[i];

    if (current_node) {
      const left_node = nodes[j];
      current_node.left = left_node;
      if (j + 1 < nodes.length) {
        const right_node = nodes[j + 1];
        current_node.right = right_node;
      }
    }

    i++;
    while (i < nodes.length && nodes[i] === null) i++;
  }

  return nodes[0];
}

function maxDepth(root) {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
