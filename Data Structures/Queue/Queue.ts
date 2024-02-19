class QueueArray<T> {
  private queue: T[] = [];
  constructor() {}

  push(x: T): void {
    this.queue.push(x);
  }

  pop(): any {
    return this.queue.shift();
  }

  peek(): any {
    return this.queue[0];;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export default QueueArray;