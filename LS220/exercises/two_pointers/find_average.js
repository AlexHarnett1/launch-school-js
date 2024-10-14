/*
In this provided, you're given an array of numbers nums, and a specific integer k. Your objective is to compute the average value of each contiguous subarray of length k within the given array.

Requirements:

The input will be an array of numbers and an integer k.
You need to find the average of every contiguous subarray of size k in the array.
The output should be an array containing these averages.


*/

function findAverages(arr, num) {
  let start = 0;
  let end = num;
  let averages = []
  while (end <= arr.length) {
    averages.push(getAverage(arr.slice(start, end)));
    start++;
    end++;
  }
  return averages;
}

function getAverage(array) {
  return array.reduce((num, sum) => sum + num, 0) / array.length;
}

/*
Brillliant solution
function findAverages(nums, k) {
  let result = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }
  return result;
}
*/



console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]