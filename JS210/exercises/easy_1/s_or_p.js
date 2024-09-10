const rlSync = require('readline-sync');
let number = Number(rlSync.question('Please enter an integer greater than 0: '));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');


if (operation === 's') {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === 'p') {
  let product = 1;
  for (let i = 1; i <= number; i += 1) {
    product *= i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${product}.`);
} else {
  console.log('Invalid operation.');
}



/*
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
*/