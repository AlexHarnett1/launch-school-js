function totalArea(arr) {
  return arr.reduce((total, element) => total + (element[0] * element[1]), 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

function totalSquareArea(arr) {
  let squares = arr.filter((element) => element[0] === element[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121