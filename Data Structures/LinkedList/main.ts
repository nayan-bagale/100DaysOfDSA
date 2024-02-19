import { LL, Node } from "./LinkedList";

class Questions<T> extends LL<T> {
  constructor() {
    super();
  }

  removeDuplicates() {
    let node = this.head;
    while (node?.next !== null && node !== null) {
      if (node.value === node.next.value) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
  }
}

const buildList = <T>(nums: number[]): Node<T> | null => {
  let ll = new LL();
  nums.forEach((item) => ll.addElementLast(item));
  // ll.showList();
  return ll.head as Node<T>;
};

let list1 = buildList([1, 2, 4]);
let list2 = buildList([1, 3, 4]);

function mergeTwoLists<T>(list1: Node<T> | null, list2: Node<T> | null): LL<T> {
  let ll = new LL();
  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      ll.addElementLast(list1.value);
      list1 = list1.next;
    } else {
      ll.addElementLast(list2.value);
      list2 = list2.next;
    }
  }

  while (list1 !== null) {
    ll.addElementLast(list1.value);

    list1 = list1.next;
  }
  while (list2 !== null) {
    ll.addElementLast(list2.value);

    list2 = list2.next;
  }

  return ll as LL<T>;
}

// let newList = mergeTwoLists(list1, list2);

// newList.showList();

let list3 = buildList([1,2,3,4,5])

function reverseList<T>(head: any) {
  let node:any;
  const helper = (first: any, second: any) => {
    if(first.next === null && first !==null){
      node = head;
      first.next = second;
      return;
    }

    helper(first?.next, second);
    first.next = second;
  }
  helper(head?.next, head);

   node.showList();
};

const ll = new LL()

ll.addElementLast(1)
ll.addElementLast(2)
ll.addElementLast(3)
ll.addElementLast(4)
ll.addElementLast(5)


