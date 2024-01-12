function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let quotient = 0;
  let node = new ListNode();
  let head = node;
  while (l1 !== null || l2 !== null) {
    let n = (l1?.val || 0) + (l2?.val || 0) + quotient;
    node.next = new ListNode(n % 10);
    quotient = Math.floor(n / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    node = node.next;
  }

  if (quotient !== 0) node.next = new ListNode(quotient);

  return head.next;
}
