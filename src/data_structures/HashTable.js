import LinkedList from './LinkedList.js';

const DEFAULT_HASH_TABLE_SIZE = 32;

export default class HashTabl {
  constructor(size = DEFAULT_HASH_TABLE_SIZE) {
    this.buckets = Array(size).fill(null).map(() => new LinkedList());
    this.keys = {};
  }

  hash(key) {
    const hashValue = Array.from(key).reduce(
      (acc, keyChar) => (acc + keyChar.charCodeAt(0)),
      0);

    return hashValue % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find(value, (a, b) => {a.key === key});

    if (!node) {
      bucketLinkedList.append({key, value});
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    return bucketLinkedList.find((curr) => {return curr.key === key});
  }
}
