function repeatedCharacters(word) {
  let chars = word.toLowerCase().split('');
  let charCount = {}
  chars.forEach(char => {
    let count = 0
    if (charCount[char]) count = charCount[char];
    charCount[char] = count + 1;
  });

  for (char in charCount) {
    if (charCount[char] === 1) {
      delete charCount[char];
    }
  }
  return charCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }