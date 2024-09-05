function sum(arr) {
  let total = 0;
  arr.forEach(function (value) {
    total += value;
  });
  return total;
}

function average(arr) {
  return sum(arr) / arr.length;
}

console.log(average([2, 3, 7, 9, 45]));