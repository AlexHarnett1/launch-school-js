let rlSync = require('readline-sync');
let int1 = Number(rlSync.question("Enter a number: "));
let int2 = Number(rlSync.question("Enter another number: "))

console.log(`${int1} + ${int2} = ${int1 + int2}`);
console.log(`${int1} - ${int2} = ${int1 - int2}`);
console.log(`${int1} * ${int2} = ${int1 * int2}`);
console.log(`${int1} / ${int2} = ${Math.floor(int1 / int2)}`);
console.log(`${int1} % ${int2} = ${int1 % int2}`);
console.log(`${int1} ** ${int2} = ${Math.pow(int1, int2)}`);