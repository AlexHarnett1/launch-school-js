function water(arr) {
  if (arr.length <= 1) return 0;

  let max = 0, start = 0, end = arr.length - 1;
  while (start < end) {
    max = Math.max(max, (end - start) * Math.min(arr[start], arr[end]));

    if (arr[start] > arr[end]) {
      end--;
    } else {
      start++;
    }
  }
  return max;
}

/*
Input: array
Output: number

Two pointer strategy(start, end)
*/

console.log(water([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(water([1, 1])); // 1
console.log(water([5, 3, 6, 9, 1, 2, 2])); // 15
console.log(water([])); // 0
console.log(water([5])); // 0
console.log(water([5, 5, 6, 9, 1, 1, 2])); // 15

/*
You are given an integer array height of length n. There are n vertical lines drawn,
where the two endpoints of the i-th line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container
contains the most water. The area of water the container can hold is determined by the
shorter of the two lines, multiplied by the distance between them.

Your task is to return the maximum amount of water a container can store.

Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
Output: 49
Explanation: The lines at index 1 and index 8 form a container that holds the most water, storing 49 units of water.

Input: height = [1, 1]
Output: 1

*/
