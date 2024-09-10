function shift(arr) {
  let first = arr[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let i = 1; i < arr.length; i += 1) {
    arr[i - 1] = arr[i];
  }
  arr.length -= 1;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]