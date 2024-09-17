const rlSync = require('readline-sync');
let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adj = rlSync.question('Enter a adjective: ');
let adv = rlSync.question('Enter a adverb: ');

console.log(`Do you ${verb} your ${adj} ${noun} ${adv} ? That's hilarious!`);

/*
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly ? That's hilarious!
*/