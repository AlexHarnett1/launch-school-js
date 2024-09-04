let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function (value) {
  if (value % 2 === 0)
    console.log(value);
});

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray2.forEach(function (array) {
  array.forEach(function (value) {
    if (value % 2 === 0)
      console.log(value);
  });
});

let newArray = myArray.map(function (value) {
  return value % 2 == 0 ? 'even' : 'odd'
});

console.log(newArray);