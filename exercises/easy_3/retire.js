let age = Number(prompt('What is your age? '));
let retireAge = Number(prompt('At what age would you like to retire? '));
let ageDiff = retireAge - age;

let today = new Date();
let year = today.getFullYear();
console.log(`It's ${year}. You will retire in ${year + ageDiff}.`);
console.log(`You have only ${ageDiff} years of work to go!`);

/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/