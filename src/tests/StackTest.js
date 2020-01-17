import Stack from '../data_structures/Stack.js';

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);

let p = s.pop();

if (p !== 3) {
  console.log('push or pop broken idk look into it');
}

p = s.pop();

if (p !== 2) {
  console.log('pop broken');
}

p = s.pop();

if (p !== 1) {
  console.log('pop broken');
}


p = s.pop();

if (p) {
  console.log('pop broken');
}
