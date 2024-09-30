/*
This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0),
then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not
valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula.
This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric
characters in the input string.

Input: String of digits, that can have non_numerics in it.
Output: Boolean, Valid or not valid.

Rules: 
- Double every second digit and subtract by 9 if > 10.
- Once doubled/subtracted. Sum all of the digits in the string.
- If sum % 10 === 0 then return true, if it is not === 0 than return false.
Questions: 
- Will the input always be a string?
- What do I do if that string is empty?
- Will there always be just one argument? If there are more, what do I do with those? Ignore them?
- Should the output return a boolean related to validity?



Data Structures:
- Array of numbers that is conceived from the cleaned input.
- Number which holds the sum of the digits after doubling them.

Algorithm:
1. Clean the string using Regex and replace to get rid of non digits.
2. Check if the string is empty, if so return false.
3. Pass the string into the doubleEveryOther function. Returns an array of numbers.
4. Use the reduce function to get the sum of the numbers. *Maybe include this on function above.*
5. Check if that number is divisible by 10. If so return true, else false.

doubleEveryOther
- Split the string('')
- Reverse the array and call map on it. If index % 2 !== 0 then double.
- If double >= 10. Then subtract 9 and return.
- Reduce on the array given from map to get checksum.

*/
function checkLuhn(str) {
  let cleanStr = str.replace(/\D/g, '');
  if (cleanStr.length === 0) return false;
  let sum = getCheckSum(cleanStr);
  if (sum % 10 === 0) return true;
  return false;
}

function getCheckSum(str) {
  let charArray = str.split('');
  let doubledNumArray = charArray.reverse().map((element, index) => {
    let num = parseInt(element, 10);
    if (index % 2 !== 0) num *= 2;
    if (num >= 10) num -= 9;
    return num;
  }).reverse();
  return doubledNumArray.reduce((sum, value) => sum + value, 0);
}

// Invalid
console.log(checkLuhn('1111') === false);
console.log(checkLuhn('2020') === false);
console.log(checkLuhn('11b14a') === false);

// Valid
console.log(checkLuhn('2020204') === true);
console.log(checkLuhn('8763') === true);
console.log(checkLuhn('2323 2005 7766 3554') === true);

// Edge Cases
console.log(checkLuhn('') === false);
console.log(checkLuhn('a - n_g') === false);

