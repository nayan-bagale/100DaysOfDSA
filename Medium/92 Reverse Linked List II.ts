function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let current = head;
  let prev: ListNode | null = null;

  for (let i = 0; current != null && i < left - 1; i++) {
    prev = current;
    current = current.next;
  }

  let last = prev;
  let newLast = current;

  let next = current.next;
  for (let i = 0; current !== null && i < right - left + 1; i++) {
    current.next = prev;
    prev = current;
    current = next;
    if (next !== null) {
      next = next.next;
    }
  }

  if (last !== null) {
    last.next = prev;
  } else {
    head = prev;
  }

  newLast.next = current;

  return head;
}
