import LinkedList from './LinkedList.js';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.linkedList.prepend(value);
    return this.linkedList.head
  }

  pop() {
    return this.linkedList.deleteHead();
  }

  peek() {
    if (this.linkedList.head) {
      return this.linkedList.head.value;
    } 

    return null;
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  print() {
    return this.linkedList.print();
  }
};
