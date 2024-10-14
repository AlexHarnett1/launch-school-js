function isInAlphabet(char) {
  let charUpper = char.toUpperCase();
  return (charUpper >= 'A' && charUpper <= 'Z');
}

function caesarEncrypt(str, shift) {
  LOWER_BASE = 97;
  UPPER_BASE = 65;
  let rotStr = '';
  let chars = str.split('');

  chars.forEach(function (char) {
    let base = char <= 'Z' ? UPPER_BASE : LOWER_BASE;
    let charCode = char.charCodeAt(0);

    if (isInAlphabet(char)) charCode = (((charCode - base + shift) % 26) + base);

    rotStr += String.fromCharCode(charCode);
  });

  return rotStr;
}

/*
Input:
 - String
 - Number
Output:
 - String

Rules:
 - Given a string and a number, shift each character by the number amount of spaces.
 - Keep uppercase characters uppercase and lowercase character lowercase.
 - If the number is greater than 26 or
*/

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"