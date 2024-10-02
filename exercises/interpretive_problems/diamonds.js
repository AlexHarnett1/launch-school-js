function diamond(num) {
  if (num === 1) return '*';
  let topTriangle = [];
  for (let i = 1; i < num; i += 2) {
    let spaceCount = (num - i) / 2;
    topTriangle.push(' '.repeat(spaceCount) + '*'.repeat(i));
  }

  return (topTriangle.concat('*'.repeat(num)).concat(topTriangle.reverse())).join('\n');

}

console.log(diamond(1));
// logs
// *
console.log(diamond(3));
// logs
//  *
// ***
//  *
console.log(diamond(9));
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *



/*
Write a function that displays a four-pointed diamond in an nxn grid, where n
is an odd integer supplied as an argument to the function. You may assume that 
the argument will always be an odd integer.

Questions:
- Will the integer always be positive? What to do if negative? What to do if zero?

Rules:
- For the given number. Each line will have (given number - (number of stars))/2 spaces on each side
  of the stars.
- The number of lines is equal to the number given.

Data structures:
- Array of strings, that will hold each line for the top triangle.


Algorithm:
- If n === 1 return *
- Create top triangle
  - For start at 1, i < n i += 2
    - (n - i)/2 spaces
    - i stars
    - (n - i)/2 spaces --- don't know if we even need these spaces.

- Create middle line
- Reverse top triangle to make bottom triangle.
*/