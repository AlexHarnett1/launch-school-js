const rlSync = require('readline-sync');
let bill = Number(rlSync.question('What is the bill? '));
let tipPercentage = Number(rlSync.question('What is the tip percentage? '));

let tip = (bill * tipPercentage)/100.0;
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/