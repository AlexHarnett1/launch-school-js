const rlSync = require('readline-sync');
const suffixes = ['st', 'nd', 'rd', 'th', 'th'];
let numbers = [];

for (let i = 0; i < suffixes.length; i += 1) {
  let num = rlSync.question(`Enter the ${i + 1}${suffixes[i]} number: `);
  numbers.push(num);
}

let lastNum = rlSync.question(`Enter the last number: `);

let midSentence = numbers.includes(lastNum) ? 'appears' : 'does not appear';

console.log(`The number ${lastNum} ${midSentence} in [${numbers}].`);

/*
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

  Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
*/