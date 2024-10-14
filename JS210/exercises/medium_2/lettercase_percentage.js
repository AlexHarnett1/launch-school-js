/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: String
Output: Object

Requirements:
- Find the number of lowercase characters
- Find the number of uppercase characters
- Find the number of characters that are neither.
- Find the total number of characters.
- Use those numbers to find the percentages of each.
- The values should all be to two decimal points.

Data Structures:
- Numbers, and an object

Algorithm:
- Foreach character in the string... using split('')
  - Find the number of lowercase characters
  - Find the number of uppercase characters
  - Find the number of characters that are neither.
- Find the total number of characters.
- return an object by dividing each of our findings by the total.

*/

function letterPercentages(str) {
  let total = str.length;
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  str.split('').forEach(element => {
    if (!isAlphabetic(element)) {
      neither += 1;
    } else if (element.toUpperCase() === element) {
      uppercase += 1;
    } else {
      lowercase += 1;
    }
  });

  return {
    lowercase: ((lowercase / total) * 100).toFixed(2),
    uppercase: ((uppercase / total) * 100).toFixed(2),
    neither: ((neither / total) * 100).toFixed(2),
  };
}

function isAlphabetic(char) {
  return (char.toUpperCase() >= 'A' && char.toUpperCase() <= 'Z');
}

/*
Better route:

function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}

*/


console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('AAAbbb111'));
// { lowercase: "33.33", uppercase: "33.33", neither: "33.33" }


console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }