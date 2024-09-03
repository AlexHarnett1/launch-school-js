function multiply(num1, num2) {
  return num1 * num2;
}

let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter number 2\n'));

console.log(multiply(number1, number2));