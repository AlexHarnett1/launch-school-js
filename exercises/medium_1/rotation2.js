function rotateRightmostDigits(num, n) {
  let stringNum = String(num);
  let slicePos = stringNum.length - n;
  return Number(stringNum.slice(0, slicePos) + stringNum.slice(slicePos + 1) + stringNum.charAt(slicePos));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

console.log(rotateRightmostDigits(4321, 3));        // 4213

/*
Write a function that rotates the last n digits of a number. For the rotation,
rotate by one digit to the left, moving the first digit to the end.

Input: Two numbers
Output: Number

Rules:
- slice the digit out at the (arr.length - n) and append it to the rest.

Questions: 
- What happens there's less or fewer arguments than 2?
- What happens if either argument isn't a number?
- What happens if the second number (n) is greater than the number of digits in the given num?

Data structures:
- Convert the number to a string.

Algorithm:
- Take first (arr.length - n) digits and that starts the new "number"
- add that to the the last (n - 1) numbers
- Then append the number at position n.
*/