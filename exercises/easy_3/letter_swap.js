function swap(str) {
  let words = str.split(' ');
  let newStrArr = [];
  words.forEach(function (word) {
    if (word.length === 1) {
      newStrArr.push(word);
    } else {
      newStrArr.push(word[word.length - 1] + word.slice(1, word.length - 1) + word[0]);
    }
  });
  console.log(newStrArr.join(' '));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"