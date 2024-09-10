function slice(arr, index1, index2) {
  let results = [];
  for (let i = index1; i < index2; i += 1) {
    results.push(arr[i]);
  }
  console.log(results);
}


slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]