BLOCKS = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']

function isBlockWord(str) {
  let usedChars = [];
  if (str.length <= 0) return false;
  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i].toUpperCase()
    if (usedChars.includes(letter)) return false;
    usedChars.push(letter);
    usedChars.push(findCompanionLetter(letter));
  }
  console.log(usedChars);
  return true;
}

function findCompanionLetter(char) {
  for (let i = 0; i < BLOCKS.length; i += 1) {
    if (BLOCKS[i].indexOf(char) >= 0) {
      let index = Math.abs(BLOCKS[i].indexOf(char) - 1);
      return BLOCKS[i][index];
    }
  }
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord(''));           // false
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

/*
Input: String
Output: Boolean

Rules:
 - Given 13 2 letter blocks
 - If any of those 2 letter blocks is used more than once, return false.
  - If not, return true
 - Not case sensitive.

Data structures: 
- Array of used characters. Which will add both letters in a block when used.

Algorithm:
- Create block as so: ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM']
- Create an empty array that will hold used Characters.
- If str.length  === 0 return false.
- Split the str into characters and iterate through it.
  - check if usedChars has the value, if so, return false.
  - add both characters in the block to the usedChars array.
-If we get through the str without returning false, then return true.


*/