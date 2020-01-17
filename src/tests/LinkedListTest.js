import LinkedList from '../data_structures/LinkedList.js'

const ll1 = new LinkedList();

// Test append
ll1.append(1);
ll1.append(2);

if (ll1.head.value !== 1 || ll1.tail.value !== 2) {
  console.log('LL broken, fix it');
}

// Try with objects
const val = {key: 'hello', value: 'world'};
const ll2 = new LinkedList();
ll2.append(val);
const res = ll2.find((curr) => {return curr.key === val.key});

if (res.key !== val.key || res.value !== val.value) {
  console.log('LL find broke');
}
