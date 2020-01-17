import LinkedList from './LinkedList.js';

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  enqueue(value) {
    return this.linkedList.append(value);
  }

  dequeue(value) {
    return this.linkedList.deleteTail();
  }
}
