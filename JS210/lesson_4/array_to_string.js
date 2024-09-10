function arrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += String(arr[i]);
  }
  console.log(result);
}

arrayToString([1, 'Joe', 6]);