/*
Input: Array
Output: Array

Rules:
- This should mutate the original array that is given as an argument.
- Start from the left most index in the array and compare it with each of the next elements
in the array and swap them if a > b.
- 

Data structures:
array

Algorithm:
Do this the length of array times.
 - For loop(start at 0, end with length - 2)
  if arr[i] > arr[i + 1], swap them.
That's it!
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let k = 0; k < arr.length - 1; k += 1) {
      if (arr[k] > arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
  }
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]