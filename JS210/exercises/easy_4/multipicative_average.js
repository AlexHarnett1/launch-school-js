function showMultiplicativeAverage(arr) {
  let sum = 1;
  arr.forEach(element => {
    sum *= element;
  });
  console.log((sum / arr.length).toFixed(3));
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"