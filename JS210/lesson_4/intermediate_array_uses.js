function oddElementsOf(arr) {
  new_arr = []
  for (let i = 1; i < arr.length; i += 2) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

mirroredArray(digits);  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

function compareNumbers(a, b) {
  return b - a;
}

function sortDescending(arr) {
  let copy = arr.slice();
  return copy.sort(compareNumbers);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

function matrixSums(arr) {
  let new_arr = []
  arr.forEach(function (arr2) {
    let sum = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
    new_arr.push(sum);
  });
  return new_arr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

function uniqueElements(arr) {
  let unique = []
  arr.forEach(function (value) {
    if (unique.indexOf(value) === -1) unique.push(value);
  });
  return unique;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]