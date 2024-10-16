// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

// function chaosInTheGridWithCats(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   if (rows === 1 || cols === 1) return 0;

//   let encounteredC = false;
//   for (let i = 0; i < rows; i += 1) {
//     if (grid[i][0] === 'C' || encounteredC) {
//       grid[i][0] = 0;
//       encounteredC = true;
//     } else {
//       grid[i][0] = 1;
//     }
//   }

//   encounteredC = false;
//   for (let i = 0; i < cols; i += 1) {
//     if (grid[0][i] === 'C' || encounteredC) {
//       grid[0][i] = 0;
//       encounteredC = true;
//     } else {
//       grid[0][i] = 1;
//     }
//   }

  
//   for (let rowid = 1; rowid < rows; rowid += 1) {
//     for (let colid = 1; colid < cols; colid += 1) {
//       if (grid[rowid][colid] === 'C') {
//         grid[rowid][colid] = 0;
//       } else {
//         grid[rowid][colid] = grid[rowid][colid - 1] + grid[rowid -1][colid];
//       }
//     }
//   }
//   console.log(grid);
//   return grid[rows - 1][cols - 1];

// }

function chaosInTheGridWithCats(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (rows === 1 || cols === 1) return 0;

  let encounteredC = false;
  for (let i = 0; i < rows; i += 1) {
    if (grid[i][0] === 'C' || encounteredC) {
      grid[i][0] = 0;
      encounteredC = true;
    } else {
      grid[i][0] = 1;
    }
  }

  encounteredC = false;
  for (let i = 0; i < cols; i += 1) {
    if (grid[0][i] === 'C' || encounteredC) {
      grid[0][i] = 0;
      encounteredC = true;
    } else {
      grid[0][i] = 1;
    }
  }

  let row = 1;
  let col = 1;
  for (let rowid = 1; rowid < rows; rowid += 1) {
    for (let colid = 1; colid < cols; colid += 1) {
      if (grid[rowid][colid] === 'C') {
        grid[rowid][colid] = 0;
      } else {
        grid[rowid][colid] = grid[rowid][colid - 1] + grid[rowid - 1][colid];
      }
    }
  }
  console.log(grid);
  return grid[rows - 1][cols - 1];

}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
// const grid4 = [
//   ["1", "1", "1", "1", "C"],
//   ["1", "C", "1", "2", "2"],
//   ["1", "1", "2", "C", "2"],
// ];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5));// === 43);