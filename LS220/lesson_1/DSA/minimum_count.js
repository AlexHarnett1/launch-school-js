// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

function minimumCount(array) {

  return Math.min(positiveCount(array), negativeCount(array));

}

function positiveCount(array) {
  let left = 0;
  let right = array.length - 1;
  let leftMost = array.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] > 0) {
      leftMost = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return array.length - leftMost;
}

function negativeCount(array) {
  let left = 0;
  let right = array.length - 1;
  let rightMost = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] < 0) {
      rightMost = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return rightMost + 1;
}


console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);

console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.