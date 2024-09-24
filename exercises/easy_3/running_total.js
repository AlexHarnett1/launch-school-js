function runningTotal(arr) {
  if (arr.length <= 1) return arr;

  newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i] + newArr[i - 1]);
    }
  }
  return newArr;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []