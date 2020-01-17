import LinkedList from './LinkedList.js';

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(value) {
    this.items.push(value);
  }

  
};
