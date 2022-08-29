const max = Math.max(12, 45, 999, 56);
// console.log(max);

const numbers = [12, 85, 999, 456, 45];
const largest = Math.max(numbers);
const largest1 = Math.max(...numbers);
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);
// console.log(largest1);

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111 , 33];

console.log(numbers3);
console.log(numbers4);