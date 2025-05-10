/**
 * @param {ListNode} head
 * @return {boolean}
 */
export default function linkedListDetectCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
