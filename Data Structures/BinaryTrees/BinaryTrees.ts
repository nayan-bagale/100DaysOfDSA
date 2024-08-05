class TreeNode<T> {
  public value: T | null = null;
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  constructor(value: T | null) {
    this.value = value;
  }
}

let root = new TreeNode(25);
root.left = new TreeNode(15);
root.right = new TreeNode(50);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(22);
root.right.left = new TreeNode(35);
root.right.right = new TreeNode(70);
root.left.left.left = new TreeNode(4);
root.left.left.right = new TreeNode(12);

const showTree = (root: TreeNode<number> | null) => {
  if (root === null) {
    return;
  }
  console.log(root.value);
  showTree(root.left);
  showTree(root.right);
};

showTree(root);
