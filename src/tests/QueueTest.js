import Queue from '../data_structures/Queue.js'

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

if (q.peek() !== 1) {
  console.log('peek and/or enqueue broke');
}

const d = q.dequeue();

if (d !== 1) {
  console.log('dequeue broke');
}

q.print();
