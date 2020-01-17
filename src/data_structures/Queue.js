import LinkedList from './LinkedList.js';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  peek() {
    return this.linkedList.tail.value;
  }

  enqueue(value) {
    return this.linkedList.prepend(value).value;
  }

  dequeue(value) {
    const removed = this.linkedList.deleteTail();
    return removed ? removed.value : null;
  }

  print() {
    this.linkedList.print();
  }
}
