function multiplyAllPairs(arr1, arr2) {
  let products = [];
  arr1.forEach(value1 => {
    arr2.forEach(value2 => {
      products.push(value1 * value2);
    });
  });
  return products.sort(sortNums);
}

function sortNums(num1, num2) {
  return num1 - num2;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]