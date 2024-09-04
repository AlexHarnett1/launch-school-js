function oddLengths(arr) {
  let lengths = arr.map(value => value.length);
  return lengths.filter(value => value % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]