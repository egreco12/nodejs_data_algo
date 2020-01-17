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
    return this.linkedList.deleteTail().value;
  }

  print() {
    this.linkedList.print();
  }
}
