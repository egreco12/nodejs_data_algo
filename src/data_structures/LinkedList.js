import LinkedListNode from './LinkedListNode.js'

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return newNode;
  }
  
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      console.log("WE HERE");
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return newNode;
  }

  deleteHead() {
    if (!this.head) {
      // No head to delete, bail
      return;
    }

    this.head = this.head.next;
  }

  delete(value) {
    let currNode = this.head;
    let previous = null;
    let deletedNode = null;

    while(currNode) {
      if (currNode.value === value) {
        deletedNode = currNode;
        if (previous) {
          previous.next = currNode.next;
        } else {
          this.head = currNode.next;
        }
        return deletedNode;
      }

      previous = currNode;
      currNode = currNode.next;
    }

    return deletedNode;
  }

  print() {
    let curr = this.head;

    while(curr) {
      console.log('Current Node:', curr.value);
      curr = curr.next;
    }
  }
}
