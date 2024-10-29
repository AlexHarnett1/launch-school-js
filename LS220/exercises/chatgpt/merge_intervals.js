function intervals(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  let newArr = [];
  let anchor = 0;
  let runner = 1;
  let topSide = arr[anchor][1];

  while (runner < arr.length) {
    if (arr[runner][0] <= topSide) {
      topSide = Math.max(topSide, arr[runner][1]);
    } else {
      newArr.push([arr[anchor][0], topSide]);
      anchor = runner;
      topSide = arr[anchor][1];
    }
    runner++;
  }
  newArr.push([arr[anchor][0], topSide]);
  return newArr;
}

console.log(intervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(intervals([[1, 4], [4, 5]]));
console.log(intervals([[2, 3], [1, 4], [5, 6]]));


/*
You are given an array of intervals, where each interval is represented as a pair of
integers[start, end].Your task is to merge all overlapping intervals and return an 
array of the non - overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
Explanation: The intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].

Input: intervals = [[1, 4], [4, 5]]
Output: [[1, 5]]
Explanation: The intervals [1, 4] and [4, 5] touch but do not overlap, so they are merged into [1, 5].

Input: [[2, 3], [1, 4], [5, 6]]
Output: [[1, 4], [5, 6]]

*/
