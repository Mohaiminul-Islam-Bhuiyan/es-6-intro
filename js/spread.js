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

// Thus primitive data types refer to a ‘single value’ in an address in memory whereas non-primitive data types refer to the ‘address’ in memory which contains single or multiple key-value pair/s.

//ref: https://www.edureka.co/blog/data-types-in-javascript/#:~:text=The%20Primitive%20Data%20types%20in,one%20member%20i.e.%20the%20Object.