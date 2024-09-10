function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let newLength = arr.length - 1;
  let value = arr[newLength];
  arr.length = newLength;
  return value;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]