function missing(arr) {
  let missin = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i += 1) {
    if (arr.indexOf(i) === -1) missin.push(i);
  }
  return missin;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []