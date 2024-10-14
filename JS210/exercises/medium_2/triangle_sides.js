/*
Input: 3 numbers
Output: string

Rules:
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
Invalid: 
  - Any of the sides are less than or equal to zero.
  - Sum of the two shorter sides are less than or equal to the longer sides (this rule 
    encompasses rule above).

Data Structure:
- Array

Algorithm:
 - Throw the three sides into an array and sort them in ascending order.
 - Add the first two elements and see if it's less than or equal to third element
    - If so return invalid
 - Do Triangle comparison:
  - If all three are equal, reutrn equilateral
  - Else if arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2], return isosceles
  - else return scalene

*/



function triangle(side1, side2, side3) {
  let numberSort = (num1, num2) => num1 - num2;
  let tri = [side1, side2, side3].sort(numberSort);

  if (tri[0] + tri[1] <= tri[2]) return 'invalid';
  if (tri[0] === tri[1] && tri[0] === tri[2]) {
    return 'equilateral';
  } else if (tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(0, 0, 0));        // "invalid"