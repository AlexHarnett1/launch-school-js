function sumOfSquares(arr) {
  return arr.reduce((sum, value) => sum + value * value, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83