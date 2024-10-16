// Given a string `str`, reverse only all the consonants in the string and return it.
// Consonants are all alphabetic characters except for the vowels `'a'`, `'e'`, `'i'`,
// `'o'`, and `'u'`, which can appear in both lower and upper cases.
// The consonants can appear more than once in the string.

function reverseConsonants(str) {
  let arr = str.split('');
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    if (!isVowel(arr[start]) && !isVowel(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start += 1;
      end -= 1;
    }
    if (isVowel(arr[start])) start += 1;
    if (isVowel(arr[end])) end -= 1;
  }
  return arr.join('');
}

function isVowel(char) {
  return !!char.match(/[aeiouAEIOU ]/);
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");

// All test cases should log true