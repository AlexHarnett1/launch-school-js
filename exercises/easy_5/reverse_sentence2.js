function reverseWords(str) {
  let words = str.split(' ');
  let reversed = [];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > 4) {
      reversed.push(reverseWord(words[i]));
    } else {
      reversed.push(words[i]);
    }
  }
  console.log(reversed.join(' '));
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"