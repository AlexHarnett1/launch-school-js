rlSync = require('readline-sync');
word = rlSync.question('Give me a word: ');

console.log(`There are ${word.length} characters in "${word}".`);