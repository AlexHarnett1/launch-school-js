function swap(str) {
  let swappedStrArray = str.split('');
  let alphas = str.split('').filter(element => isAlphabetic(element));
  let numbers = str.split('').filter(element => isNumeric(element));

  for (let i = 0; i < swappedStrArray.length; i += 1) {
    if (isAlphabetic(swappedStrArray[i]) && numbers.length > 0) {
      swappedStrArray[i] = numbers.shift();
    } else if (isNumeric(swappedStrArray[i]) && alphas.length > 0) {
      swappedStrArray[i] = alphas.shift();
    }
  }
  return swappedStrArray.join('');
}

function isAlphabetic(char) {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z');
}

function isNumeric(char) {
  return (char >= '0' && char <= '9');
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("ab-123") === "12-ab3");
console.log(swap('-_&!') === '-_&!');
console.log(swap('12345') === '12345');
console.log(swap('this string') === 'this string');
console.log(swap("ab1CD23") === "12a3DbC");


// Edge cases
console.log(swap('') === '');


/*
Write a function called swap that takes a string as an argument, and returns a new string,
where the alphabetic characters have taken the place of the numeric characters, and vice versa.

Questions:
- Do I need to worry about other inputs or can I assume that the input will always be a string?
- Is it possible for there to be more than one argument, or 0 arguments? What do I do in those scenarios?
- I only swap alphabetic characters for numbers? Non alphabetic and non numerics are not swapped?
- Do I return an empty string if an empty string is given?
- 

Input: string
Output: string

Rules:
- Swap each numeric with alphabetic.
  - If there are more alphabetic characters than numeric characters, swap them until one of those run out.
    Then do nothing.
- 

Data Structures:
- Starting string
- Two arrays. One of the 


- Spl

Algorithm:
- create an empty string
-Split the string into two arrays. One with all the alphabetic characters. One with all the numbers.
- Iterate through the starting string.
  - If that character isAlphabetic and numbers.length > 0 then get the first element of numbers
    and replace that character. Then delete that from the numbers array.
  - If that character isNumberic and alphabet.length > 0 then get the frist element of alphabet
    array and replace that character. Then delete it form the alphabert array.
  - Else do nothing.
- return the swapped string.

*/
