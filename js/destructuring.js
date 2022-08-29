const fish = {
    name: 'king hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '0202020202',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone}= fish;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
console.log(age);

const {address} = fish;
console.log(address);

//array destructuring
const [first, another] = [44, 99, 78, 99];
console.log(first, another)

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost , notun] = nayoks;
console.log(notun);

function getNames(){
    return ['alim', 'halim'];
}
const [baba, chacha] = getNames();
console.log(baba, chacha);