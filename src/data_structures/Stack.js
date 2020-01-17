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
    return this.linkedList.head;
  } 
};
