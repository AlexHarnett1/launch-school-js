// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]
function findRange(array) {
  return [findLeftMost(array), findRightMost(array)];
}

function findRightMost(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 3) {
      if (mid === 0 || array[mid + 1] > 3) return mid;
      left = mid + 1;
    } else if (array[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
function findLeftMost(array) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 3) {
      if (mid === 0 || array[mid - 1] < 3) return mid;
      right = mid - 1;
    } else if (array[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5]));
console.log(findRange([1, 2, 5, 5, 6, 9, 10]));

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]
