function reverseSentence(str) {
  let words = str.split(' ');
  let firstWord = words[0];
  let lastWord = words[words.length - 1];
  words[0] = lastWord;
  words[words.length - 1] = firstWord;
  console.log(words.join(' '));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"