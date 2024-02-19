class Stack<T> {
  private stack: T[] = [];

  push(val: T): void {
    this.stack.push(val);
  }

  pop(): T {
    let removedVal = this.stack.pop();
    if (!removedVal) throw new Error("Stack is empty.");
    return removedVal;
  }

  peak(): T {
    if (this.isEmpty()) throw new Error("Stack is empty.");
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    console.log(this.stack);
    return this.stack.length === 0;
  }
}

export default Stack;