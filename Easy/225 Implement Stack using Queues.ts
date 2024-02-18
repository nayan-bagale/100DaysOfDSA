import Queue from "../Data Structures/Queue/Queue";

class MyStack {
    private first = new Queue<number>();
    private second = new Queue<number>();

  constructor() {}

  push(x: number): void {
    this.first.push(x);
  }

  pop(): number {
    let lastVal = 0;
    while (!this.first.empty()) {
        lastVal = this.first.pop();
        if(!this.first.empty())
        this.second.push(lastVal);
    }

    while(!this.second.empty()){
        this.first.push(this.second.pop());
    }

    return lastVal;
  }

  top(): number {
    let lastVal = 0;
    while (!this.first.empty()) {
      lastVal = this.first.pop();
      this.second.push(lastVal);
    }

    while (!this.second.empty()) {
      this.first.push(this.second.pop());
    }

    return lastVal;
  }

  empty(): boolean {
    return this.first.empty();
  }
}
