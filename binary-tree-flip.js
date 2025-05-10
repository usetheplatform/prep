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
    if (nodes[i]) {
      nodes[i].left = nodes[j];
      if (j + 1 < nodes.length) {
        nodes[i].right = nodes[j + 1];
      }
    }
    i++;
    while (i < nodes.length && nodes[i] === null) i++;
  }

  return nodes[0];
}

function treeToArray(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      result.push(node.value);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }

  while (result[result.length - 1] === null) result.pop();

  return result;
}

/**
 * @param {TreeNode | null} root
 * @return {TreeNode | null}
 */
export default function binaryTreeFlipRec(root) {
  if (root === null) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  binaryTreeFlipRec(root.left);
  binaryTreeFlipRec(root.right);

  return root;
}

function binaryTreeFlipIter(root) {
  if (!root) return null;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
}
