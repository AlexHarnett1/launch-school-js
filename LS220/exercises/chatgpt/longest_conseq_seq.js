// function longest(arr) {
//   arr.sort((a, b) => a - b);
//   let runner = 1;
//   let consec = 1;
//   let maxConsec = 1;
//   while (runner < arr.length) {
//     let hop = arr[runner] - arr[runner - 1];
//     if (hop === 1) {
//       consec++;
//     } else if (hop !== 0) {
//       maxConsec = Math.max(maxConsec, consec);
//       consec = 1;
//     }
//     runner++;
//   }
//   return Math.max(maxConsec, consec);
// }

function longest(arr) {
  
}

console.log(longest([100, 4, 200, 1, 3, 2])); // 4 
console.log(longest([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9 
console.log(longest([1, 2, 2, 3])); // 3

/*
Input: array
Output: number (of consecutive integers)

For this we'll want to start by sorting the array. Time complexity O(n).
Then we'll use the anchor runner pointer strategy. 
Start by initializing a maxLength to 0;
anchor = 0;
runner = 1;
consecCount = 0;
while (anchor < runner)
  if (arr[runner] - arr[runner - 1] === 1) {
    consecCount == 1
  } else if 
*/


/*
You are given an unsorted array of integers nums. Your task is to find the length 
of the longest consecutive elements sequence in the array.

A consecutive sequence is a sequence of numbers where each number is exactly 1 greater 
than the previous one. The sequence does not need to be contiguous in the array.

Input: nums = [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore, its length is 4.

Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
Output: 9

Input: nums = [1, 2, 2, 3]
Output: 3
Explanation: The longest consecutive sequence is [1, 2, 3], with a length of 3. The duplicate 
`2` does not affect the sequence.

*/