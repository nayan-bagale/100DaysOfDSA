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
