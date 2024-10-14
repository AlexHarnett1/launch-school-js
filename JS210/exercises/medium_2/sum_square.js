/*
Write a function that computes the difference between the square of the sum of the first n
positive integers and the sum of the squares of the first n positive integers.

Input: Number
Output: Number

Rules:
- square of sums: (1 + 2 + 3)**2
- sume of squares: (1**2 + 2**2 + 3**2)
- Return the difference of these.

Data Structures:
Numbers

Algorithm: 
- Start by getting the sum of all the numbers less than num
  - Can use a helper function that uses a for loop
- Get the sum of squares, can also use a for loop for this one.
  - On second thought we can use the same for loop above.
- Square the sum
- Return the difference of the two.


*/

function sumSquareDifference(num) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }
  let squareOfSum = Math.pow(sum, 2);
  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150