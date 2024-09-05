const rlSync = require('readline-sync');
let password = 'password';

guesses = 0;
while (guesses < 3) {
  let guess = rlSync.question('What is the password: ');
  if (guess === password) {
    console.log('You have successfully logged in.');
    break
  }
  guesses += 1;
}

if (guesses === 3) console.log('You have been denied access.');