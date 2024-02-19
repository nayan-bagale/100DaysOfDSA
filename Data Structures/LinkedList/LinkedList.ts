class Node<T> {
  public next: Node<T> | null = null;
  constructor(public value: T) {}
}

class LL<T> {
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;
  public size: number = 0;


  addElementLast(data: T) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail !== null) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    this.size++;
  }

  addElementFirst(data: T) {
    let node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  removeElementLast() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      for (let i = 1; i < this.size - 1; i++) {
        if (current !== null && current !== undefined) {
          current = current.next;
        }
      }

      let temp = current?.next;
      if (temp !== null) {
        this.tail = current;
        if (this.tail !== null) {
          this.tail.next = null;
        }
      }
      this.size--;
      return temp?.value;
    }
  }

  showSize() {
    return this.size;
  }

  showList() {
    if (this.size === 0) {
      console.log("List is empty");
      return null;
    }
    let temp = this.head,
      nums: number[] = [];
    while (temp !== null) {
      nums.push(temp.value as number);
      temp = temp.next;
    }
    console.log(nums.join(" -> "));
  }

  reverseList(){
    
  }

}

export {LL, Node};
