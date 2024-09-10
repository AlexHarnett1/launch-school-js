function concat(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    result.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i += 1) {
    result.push(arr2[i]);
  }
  console.log(result);
}


concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]