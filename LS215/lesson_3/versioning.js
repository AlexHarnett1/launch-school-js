function compareVersions(version1, version2) {
  let arr1 = version1.split('.');
  let arr2 = version2.split('.');
  if (!(allNumbers(arr1) && allNumbers(arr2))) return null;
  return compareArrays(arr1, arr2);
}

function compareArrays(arr1, arr2) {
  arr1.length = 4;
  arr2.length = 4;
  for (let i = 0; i < 4; i += 1) {
    let num1 = parseInt(arr1[i], 10) || 0;
    let num2 = parseInt(arr2[i], 10) || 0;
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
}

function allNumbers(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].match(/[\D]/)) return false;
  }
  return true;
}
// 1
// 1.0
// 1.2
// 3.2.3
// 3.0.0
// 4.2.3.0

// Write a function that takes any two version numbers in this format and compares them,
// with the result of this comparison showing whether the first is less than, equal to, or
// greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the.character, we should return null.

// Here is an example of version number ordering:
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
Problem
INPUT: Two strings - version1 and version2

OUTPUT: An integer based on equality(1, 0, -1) or null

The Rules:
- the left most number supercedes any number that is a decimal after it
- If each of the left most number is the same then you move to the next number
- If the string contains anything other than numbers and decimals return null.

Examples
Data structures
- Array for split up numbers
- 

Algorithm
1. split each string into an array of strings by decimals.
2. Check to see if any string in the array contains anything other than numbers. Use function allNumbers()
3. Give array to function getBase10(arr1, arr2) and return 1, 0, -1, null.
4. based on the numbers return from getBase10() compare them and return a number accordingly.

getBase10(arr)
- create variable sum and set to 0.
- forEach element in the array multiply by 10.pow(4- index) and add to sum.
    -could use a reduce function here
- Then return the sum.

allNumbers(arr)
- forEach element in the array check if it's not a digit
- Can use regex \D
- returns true if all characters are numbers

*/

// version1 > version2
console.log(compareVersions('1', '0.1') === 1);
console.log(compareVersions('1.18.2', '1.2.0.0') === 1);

// version1 < version2
console.log(compareVersions('1.18.2', '13.2') === -1);
console.log(compareVersions('15', '15.0.0.1') === -1);

// version1 === version2
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0.1.0', '1.0.1') === 0);
console.log(compareVersions('2.4', '2.4.0.0') === 0);

//Edge cases
console.log(compareVersions('1.89.7t', '0.1') === null);
console.log(compareVersions('1', '0.1a') === null);