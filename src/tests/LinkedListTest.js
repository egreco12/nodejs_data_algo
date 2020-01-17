import LinkedList from '../data_structures/LinkedList.js'

const ll1 = new LinkedList();

// Test append
ll1.append(1);
ll1.append(2);

if (ll1.head.value !== 1 || ll1.tail.value !== 2) {
  console.log('LL broken, fix it');
}


