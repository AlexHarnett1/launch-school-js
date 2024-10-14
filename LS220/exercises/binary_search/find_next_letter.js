function findNextLetter(chars, letter) {
  let left = 0;
  let right = chars.length - 1;
  const letterCharCode = letter.charCodeAt(0);
  let smallestLetter = '';

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (chars[mid].charCodeAt(0) === letterCharCode + 1) {
      return chars[mid];
    } else if (chars[mid].charCodeAt(0) > letterCharCode) {
      right = mid - 1;
      smallestLetter = chars[mid];
    } else {
      left = mid + 1;
    }
  }
  if (smallestLetter === '') return chars[0];
  return smallestLetter;
}


console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
