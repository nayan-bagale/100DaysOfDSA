class MinStack {
  private stack: number[] = [];
  private min: number = Infinity;
  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    this.min = Math.min(val, this.min);
  }

  pop(): void {
    let deleted = this.stack.pop();
    if (this.min === deleted) {
      this.min = this.stack.reduce(
        (min, curr) => Math.min(min, curr),
        Infinity
      );
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min ?? null;
  }
}
