export default function binaryTreeEqual(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;

  return (
    a.val === b.val &&
    binaryTreeEqual(a.left, b.left) &&
    binaryTreeEqual(a.right, b.right)
  );
}
