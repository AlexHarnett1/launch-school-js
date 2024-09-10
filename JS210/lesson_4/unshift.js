function unshift(arr, val) {
  let temp = arr[0];
  arr[0] = val;
  for (let i = 1; i < arr.length; i += 1) {
    let temp2 = arr[i];
    arr[i] = temp;
    temp = temp2;
  }
  arr[arr.length] = temp;
  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]