class MyQueue {
  private first: Stack = new Stack();
  private second: Stack = new Stack();

  constructor() {}

  push(x: number): void {
    while (!this.first.isEmpty()) {
      this.second.push(this.first.pop());
    }

    this.first.push(x);

    while (!this.second.isEmpty()) {
      this.first.push(this.second.pop());
    }
  }

  pop(): number {
    if (this.empty()) throw new Error("Queue is empty.");
    return this.first.pop();
  }

  peek(): number {
    if (this.empty()) throw new Error("Queue is empty.");
    return this.first.peek();
  }

  empty(): boolean {
    return this.first.isEmpty();
  }
}
