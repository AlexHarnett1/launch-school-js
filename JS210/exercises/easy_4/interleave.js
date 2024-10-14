function interleave(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i], arr2[i]);
  }
  console.log(newArr);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]