function reverse(arr) {
  let results = []
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    results.push(arr[i]);
  }
  console.log(results);
}

reverse(['Alex', 'John', 'Matt']);