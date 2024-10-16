// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const cache = new Map();

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    const key = `${row} ${col}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    const paths = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    cache.set(key, paths);

    return paths;
  }

  return pathsToCoord(rows - 1, cols - 1);
}

/*

function chaosInTheGrid(grid) {
  if (grid.length === 1 || grid[0].length === 1) return 1;

  let dp1 = new Array(grid.length - 1).fill(new Array(grid[0].length).fill(""));
  let dp2 = new Array(grid.length).fill(new Array(grid[0].length - 1).fill(""));
  return chaosInTheGrid(dp1) + chaosInTheGrid(dp2);
}

*/
// Test cases


const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true