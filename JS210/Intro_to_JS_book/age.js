let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old is you? '));

console.log(`You are ${age} years old.`);
for (i = 10; i <= 40; i += 10){
  console.log(`In 10 years, you will be ${age + i} years old.`);
}

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);