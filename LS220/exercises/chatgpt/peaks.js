function findPeak(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid === 0 || mid === arr.length - 1) return mid;

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid
    } else if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

  }
}

console.log(findPeak([1, 2, 1, 3, 5, 6, 4]));
console.log(findPeak([1, 2, 3, 1]));
console.log(findPeak([1, 2, 3, 4]));
console.log(findPeak([4,3,2,1,0]))

/*
Input: array
Output: Number, which is an index of a peak.
In this situation we'll want to use a binary search.
Take a middle element and compare it with elements immediateely to left and right, if both are greater,
return that index.
If not then we'll want to set the bound on whichever side is greater.


You are given an integer array nums where nums[i] != nums[i+1] for all valid i. A 
peak element is an element that is strictly greater than its neighbors.

Your task is to find a peak element, and return its index. If the array contains 
multiple peaks, return the index of any of the peaks.

Input: nums = [1, 2, 3, 1]
Output: 2
Explanation: nums[2] is a peak element because nums[2] > nums[1] and nums[2] > nums[3].

Input: nums = [1, 2, 1, 3, 5, 6, 4]
Output: 5
Explanation: nums[5] is a peak element because nums[5] > nums[4] and nums[5] > nums[6].

*/