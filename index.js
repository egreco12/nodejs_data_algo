import LinkedList from './src/data_structures/LinkedList.js'

let k = new LinkedList()
k.append(1);
k.append(2);
k.append(5);
k.append(6);
k.append(7);
k.delete(5);
k.print();
k.prepend(10);
k.prepend(9);
k.prepend(8);

k.print();
