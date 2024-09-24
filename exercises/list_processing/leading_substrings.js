function leadingSubstrings(str) {
  return str.split('').map((_, index) => {
    return str.slice(0, index + 1);
  });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substrings(str) {
  let arrOfSubs = [];
  for (let i = 0; i < str.length; i += 1) {
    arrOfSubs.push(leadingSubstrings(str.slice(i)));
  }
  return arrOfSubs.flat();
}

console.log(substrings('abcde'));

// returns
["a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e"]

function palindromes(str) {
  let words = substrings(str);
  return words.filter(word => isPalindrome(word) && word.length > 1);
}

function isPalindrome(word) {
  return word === word.split('').toReversed().join('');
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
["ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo"]

console.log(palindromes('knitting cassettes'));
// returns
["nittin", "itti", "tt", "ss", "settes", "ette", "tt"]