function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let firstElement = arr[0];
  let newArray = arr.slice(1);
  newArray.push(firstElement);
  return newArray;
}

/*
Input: Array
Output: array

Rules: 
- Given an array, return a NEW array with the first element at the end.
  - Make sure not to mutate original array.
- If there is no argument given or the argument given is not an array, return undefined.
- If array is empty then return an empty array.

Data structure: 
- Should simply need a variable to hold first element and an array that we will end up returning.

Algorithm:
- store the first element in a variable.
- Slice the array from index 1 and set equal to new array.
- push first elment to new array.



*/

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
console.log(rotateArray('Yo yo'));                  // undefined

// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]