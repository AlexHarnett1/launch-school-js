// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

// Test Cases:

// function findMajority(arr) {
//   arr = arr.sort(numberSort);
//   let halfway = Math.ceil(arr.length / 2);
//   for (let i = 0; i < halfway; i += 1){
//     if(arr.slice(i, i + halfway).every(element => element === arr[i])) return arr[i];

//   }
// }

function findMajority(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
    if (map.get(arr[i]) >= arr.length / 2) return arr[i];
  }
}


function numberSort(val1, val2) {
  return val1 - val2;
}

console.log(findMajority([6, 4, 4, 6, 4])); // === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1])); // === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2])); // === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1])); // === 1);
console.log(findMajority([5, 5, 5])); // === 5);

// All test cases should log true