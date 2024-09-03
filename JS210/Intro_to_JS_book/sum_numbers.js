let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter number 2\n'));
let sum = number1 + number2

console.log(sum);