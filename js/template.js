const person = 'Adam Sandler';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine = 'First Line Text \n' +
'second line of code \n' +
'third line of code \n' +
'fourth line of string';
// console.log(multiLine)

const newMultiLine = `first line of text
second line of code
third line of string
fourth line of code`
// console.log(multiLine);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 4, 444]
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
// console.log(summary)

const newSummary = `sum of ${a} and ${nums.length} is: ${a+b}`
console.log(newSummary)