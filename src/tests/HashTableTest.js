import HashTable from '../data_structures/HashTable.js';

const ht = new HashTable();

const v1 = {key: 'hello', value: 'world'}

ht.set(v1.key, v1.value);

const got = ht.get(v1.key);

if (got.key !== v1.key || got.value !== v1.value) {
  console.log('idk what you got but it is wrong:', got, v1);
}
