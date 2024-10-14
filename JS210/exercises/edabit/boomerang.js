/*
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

Some boomerang examples:
[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.

countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) === 3

Input: Array
Output: Number, that number is the total number of boomerangs.


[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]

[3, 7, 3], [7, 3, 2], [3, 2, 1], [2, 1, 5], [1, 5, 1], [5, 1, 2], [1, 2, 2], [2, 2, -2], [2, -2, 2]


countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]) === 3

[3, 7, 3], [1, 5, 1], [2, -2, 2]

Requirements: 
- Find boomerangs:
  - Boomerang: an array of length that is derived from the original array with the first and last digits being the same.
- Count the boomerangs and return that.
Questions:
- The input will always be an array
- If string, still see if it's a boomerang
- If array is empty, return 0
- Array can contain undefined, or null elements and still make boomerang
- Ignore extra arguments if there are.
- If no input given, return undefined.
- If array is of lenght less than 3 return 0

Data Structures:
Array, number

Algorithm:
- Testing the input for edge cases
  - See if there is an input
    - if not return undefined
  - Test the length of the array
    - If less than 3 return 0
- Create a count number variable.
- Iterate through each element of the array, up to the length of the array - 3/4
- slice the array from i to i + 3 = subArray
  - Test to see if it's a boomerang, subArray[0] === subArray[2]
    - If so, increase a count.
- Return the count.

*/

function countBoomerangs(array) {
  if (!array) return null;
  if (array.length < 3) return 0;

  let count = 0;
  for (let i = 0; i < array.length - 2; i += 1) {
    let subArray = array.slice(i, i + 3);
    if (isBoomerang(subArray)) {
      count += 1;
    }
  }
  return count;

}

function isBoomerang(array) {
  return ((array[0] === array[2] && array[0] !== array[1]) ||
    (Number.isNaN(array[0]) && Number.isNaN(array[2]) && !Number.isNaN(array[1])));
}

console.log(countBoomerangs(['hello', 7, 'hello', 1])); // 1
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])); // 3
console.log(countBoomerangs([undefined, 7, undefined, 2, undefined, 5, undefined])); // 3


console.log(countBoomerangs([undefined, 7, undefined, 2, 1, 5, 1, 2, 2, -2, 2])); // 3
console.log(countBoomerangs([undefined, 7, undefined, 2, null, 5, null, 2, 2, -2, 2])); // 3
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2], [9])); // 3
console.log(countBoomerangs()); // null
console.log(countBoomerangs([3, 7,])) // 0

console.log(countBoomerangs([3, 7, 3]) === 1);
console.log(countBoomerangs([3, 7, 11]) === 0);
console.log(countBoomerangs([3, 3, 3]) === 0);
console.log(countBoomerangs([NaN, 7, NaN]) === 1);
console.log(countBoomerangs([NaN, 7, null]) === 0);
console.log(countBoomerangs([NaN, NaN, NaN]) === 0);

console.log(countBoomerangs(['a', NaN, 'a']) === 1);
console.log(countBoomerangs(['1', NaN, 1]) === 1);
