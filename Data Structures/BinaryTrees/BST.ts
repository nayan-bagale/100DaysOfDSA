class BSTNode<T> {
  public value: T;
  public left: BSTNode<T> | null = null;
  public right: BSTNode<T> | null = null;
  public height: number = -1;

  constructor(value: T) {
    this.value = value;
  }
}

class BST<T> {
  public root: BSTNode<T> | null = null;
  public height(node: BSTNode<T> | null): number {
    if (node === null) {
      return -1;
    }
    return node.height;
  }

  public isEmpty(): boolean {
    return this.root === null;
  }

  public insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: BSTNode<T> | null, value: T): BSTNode<T> {
    if (node === null) {
      node = new BSTNode(value);
      return node;
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    }

    if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }

    return node;
  }

  public populate(nums: T[]): void {
    nums.forEach((e) => this.insert(e));
  }

  public display(): void {
    this.displayBST(this.root, "Root node: ");
  }

  private displayBST(node: BSTNode<T> | null, details: string) {
    if (node === null) {
      return;
    }
    console.log(details + node.value);
    this.displayBST(node.left, "Left child of " + node.value + " : ");
    this.displayBST(node.right, "right child of " + node.value + " : ");
  }

  public sortedPopulate(nums: T[]): void {
    // nums.sort((a, b) => a < b ? -1 : 1);
    this.sortedPopulateBST(nums, 0, nums.length);
  }

  private sortedPopulateBST(nums: T[], start: number, end: number): void {
    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);

    this.insert(nums[mid]);
    this.sortedPopulateBST(nums, start, mid);
    this.sortedPopulateBST(nums, mid + 1, end);
  }
}

const arr = [25, 15, 50, 10, 22, 35, 70, 4, 12];
let bst = new BST<number>();
bst.populate(arr);
bst.display();

console.log("----------------------Sorted Populate----------------------");

const sortedArr = [4, 10, 12, 15, 22, 25, 35, 50, 70];
let bst2 = new BST<number>();
bst2.sortedPopulate(sortedArr);
bst2.display();
