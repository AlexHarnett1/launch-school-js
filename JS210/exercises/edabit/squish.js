/* 
Write a function that squishes an array from the left or the right. 

Squishing from the left is to successively sum the first two elements of an array (shortening the array in the process).

Squishing from the right is to successively sum the last two elements of an array.
Include the original array as the first element in either squish.
Return an empty array if the input is an empty array.

Input: Array, string(theoretically containing either 'right' or 'left')
Output: Array of arrays.

console.log(squish([1, 2, 3, 4, 5], "left")) 
[[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 2, 3, 4, 5], "right")) // ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]

Requirements:
- Include original array as first argument in the returned array.
- So given left as second argument
  - Sum the left most arguments first(first indices)
- Given right as second argument
 - Sum the right most arugments first(last indices)

- If array is empty then return an empty array.
- If there fewer arguments, return null
- If there are more than two arguemnts, ignore more than second
- If first argument is not an array, throw error that first arugment must be an array
- String will always 'left' and 'right'.
- Elements of the array will always be numbers or arrays with numbers.
- If elements of the array are arrays, 'flatten' them into a single array.

Algorithm:
- Start by checking all edges cases:
  - Check if there are at least two arguments
    -return null if not
  - CHeck if the first element is an array
    - Throw typeerror if not
  - If array.length is zero
    -return empty array
- array = givenArray flattened.
- if second argument is left
  - call the squishArray helper function with array.

-if second arugment is right
  - reverse the first element of array and then call squish array function
  - Then reverse each element of array

- return the array

- squishArray helper funciton
  for loop i = 0; i < givenArray.length; i += 1)
      sumOfFirst = array[i][0] + array[i][1]
      array.slice(2)
      push that to array
*/

function squish(array, str) {
  if (!array || !str) return null;
  if (!Array.isArray(array)) throw TypeError('First argument must be an array');
  let newArray = [array.flat()];
  if (newArray.length === 0) return [];

  if (str === 'right') {
    newArray[0].reverse()
    squishArray(newArray);
    newArray = newArray.map(element => element.reverse());
  } else {
    squishArray(newArray);
  }

  return newArray;
}

function squishArray(arr) {
  for (let i = 0; i < arr[0].length - 1; i += 1) {
    let innerArray = [];
    innerArray.push(arr[i][0] + arr[i][1]);
    innerArray.push(arr[i].slice(2));
    arr.push(innerArray.flat());
  }
}


console.log(squish([1, 2, 3, 4, 5], "left")) // ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 2, 3, 4, 5], "right")) // ➞ [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]
console.log(squish([1, 0, 2, -3], "left")) // ➞ [[1, 0, 2, -3], [1, 2, -3], [3, -3], [0]]
console.log(squish([1, 0, 2, -3], "right")) // ➞ [[1, 0, 2, -3], [1, 0, -1], [1, -1], [0]]

console.log(squish([], "right")) // ➞ []
console.log(squish([1, 0])) // ➞ null
console.log(squish([1, 2, 3, 4, 5], "left", "hello")) // ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([8], "right")) //, [[8]]

console.log(squish([[1, 2], [3, 4], 5], "left")) // ➞ [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
//console.log(squish(5, "left")) // ➞ "First argument must be an array"
