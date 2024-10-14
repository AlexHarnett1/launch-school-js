function isTargetFrequent(arr, num) {
  console.log(findRighttMostIndex(arr, num));
  console.log(findLeftMostIndex(arr, num));

  return (findRighttMostIndex(arr, num) - findLeftMostIndex(arr, num) >= 3);
}

function findLeftMostIndex(array, num) {
  let left = 0;
  let right = array.length - 1;
  let leftMost = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === num) {
      leftMost = mid;
      right = mid - 1;
    } else if (array[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return leftMost;

}

function findRighttMostIndex(array, num) {
  let left = 0;
  let right = array.length - 1;
  let rightMost = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === num) {
      rightMost = mid;
      left = mid + 1;
    } else if (array[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return rightMost;

}


console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.