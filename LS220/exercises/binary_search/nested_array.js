function findInNestedArray(array, num) {
  let leftArray = 0;
  let rightArray = array.length - 1;

  while (leftArray <= rightArray) {
    let midArray = Math.floor((leftArray + rightArray) / 2);
    if (num >= array[midArray][0] && num <= array[midArray][array[midArray].length - 1]) {
      let left = 0;
      let right = array[midArray].length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[midArray][mid] === num) {
          return true;
        } else if (num >= array[midArray][mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    } else if (num >= array[midArray][array[midArray].length - 1]) {
      leftArray = midArray + 1;
    } else {
      rightArray = midArray - 1;
    }
  }
  return false;

}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.