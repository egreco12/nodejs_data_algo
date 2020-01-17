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
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return newNode;
  }

  find(value, compareCallback) {
    let curr = this.head;
    while(curr) {
      if (compareCallback(curr.value, value)) {
        return curr;
      }

      curr = curr.next;
    }

    // If we fall to here, we didn't find it
    return null;
  }

  deleteHead() {
    if (!this.head) {
      // No head to delete, bail
      return;
    }

    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  deleteTail() {
    const deletedNode = this.tail;
    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let curr = this.head;

    while(curr.next) {
      // If next node is tail, chop it off
      if (!curr.next.next) {
        curr.next = null;
      } else {
        curr = curr.next;
      }
    }

    this.tail = curr;

    return deletedNode;
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
