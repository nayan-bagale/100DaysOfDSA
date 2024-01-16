function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head = new ListNode();
  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
      current = current.next;
    } else {
      current.next = list2;
      list2 = list2.next;
      current = current.next;
    }
  }

  current.next = list1 ? list1 : list2;

  return head.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;

  let result = lists[0];

  for (let i = 1; i < lists.length; i++) {
    result = mergeTwoLists(result, lists[i]);
  }

  return result;
}
