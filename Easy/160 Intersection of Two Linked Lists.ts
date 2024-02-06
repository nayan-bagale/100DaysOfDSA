function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) return null;

  let curA = headA,
    curB = headB;

  while (curA !== curB) {
    if (curA === null) {
      curA = headB;
    } else {
      curA = curA.next;
    }

    if (curB === null) {
      curB = headA;
    } else {
      curB = curB.next;
    }
  }

  return curA;
}
