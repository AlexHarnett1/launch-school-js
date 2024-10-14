/*

A featured number (something unique to this exercise) is an odd number that is a multiple of 7,
with all of its digits occurring exactly once each. For example, 49 is a featured number,
but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not 
(the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next featured number
greater than the integer. Issue an error message if there is no next featured number.

NOTE: The largest possible featured number is 9876543201.

Input: Number
Output: Number or string.
Rules:
- Number must be odd.
- Number must be a multiple of 7.
- Each digit in number must only occur once.
- Last number is 9876543201. If we go greater than that then

Data structure:
will need to break the number up into a digits array to check for duplicates.

Algorithm:
- Start by finding the next odd number divisible by seven by single digit iteration = featuredNum.
  - Create a function for this.
- Start a while loop (featuredNum <= 9876543201)
  if (!checkForDuplicates)
    return featuredNum
  else
    add 14.

*/

function featured(num) {
  let featuredNum = nextOddDivisor(num)
  while (featuredNum <= 9876543201) {
    if (!duplicates(featuredNum)) return featuredNum;
    featuredNum += 14;
  }
  return "There is no possible number that fulfills those requirements."
}

function duplicates(num) {
  let digits = String(num).split('');
  return digits.some((element, index) => digits.lastIndexOf(element) !== index);
}

function nextOddDivisor(num) {
  do {
    num += 1;
  } while ((num % 7 !== 0) || (num % 2 == 0));
  return num;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."