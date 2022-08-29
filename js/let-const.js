//breakup with var
//no more use of var
//let: let it to reassign
//const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan'
// bird = 'moyna'
const message = bird + 'potash potash'
console.log(bird)

const numbers = [22, 34, 21, 23, 78];
numbers.push(123);
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'rongpur'
}
// student ={name: 'mafazzal'}
student.name = 'mofazzal'

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = number[i];
    sum = sum + number;
    console.log(number)
}
console.log(number);
