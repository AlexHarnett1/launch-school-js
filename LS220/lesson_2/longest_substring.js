// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 1;
  let currentSub = string.slice(anchor, runner);
  let longestSubLength = 1;
  // h, a:0, r:3
  // currentSub: hel
  while (runner < string.length) {
    let char = string.charAt(runner);
    // helloworld
    if (currentSub.includes(char)) {
      longestSubLength = Math.max(currentSub.length, longestSubLength);
      runner = currentSub.indexOf(char) + anchor;
      anchor = runner + 1;
      currentSub = '';
    } else {
      currentSub += char;
    }
    runner++;
  }
  return Math.max(currentSub.length, longestSubLength);
}

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);