function halvsies(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i < arr.length / 2) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  console.log([arr1, arr2])
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]