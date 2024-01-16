function midNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

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
function isPalindrome(head: ListNode | null): boolean {
  let mid = midNode(head);
  let secondHalf = reverseList(mid);
  let rreverse = secondHalf;

  while (head && secondHalf) {
    if (head.val !== secondHalf.val) break;
    head = head.next;
    secondHalf = secondHalf.next;
  }

  reverseList(rreverse);
  return head === null || secondHalf === null;
}
