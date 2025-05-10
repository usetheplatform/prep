/**
 * @param {ListNode} head
 * @param {number} n
 * @return {Node | null}
 */
export default function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
