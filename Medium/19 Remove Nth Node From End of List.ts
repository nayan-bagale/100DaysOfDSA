function reverseList(head: ListNode | null): ListNode | null {
  let present = head;
  let previous: ListNode | null = null;

  while (present) {
    let next = present.next;
    present.next = previous;
    previous = present;
    present = next;
  }

  return previous;
}
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let reversed = reverseList(head);
  let reReverse = reversed;

  let prev = reversed;
  for (let i = 0; reversed && i < n - 1; i++) {
    prev = reversed;
    reversed = reversed.next;
  }

  prev.next = reversed.next;
  if (n == 1) {
    reReverse = reversed.next;
  }

  return reverseList(reReverse);
}
