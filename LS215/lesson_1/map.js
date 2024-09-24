function myMap(array, func) {
  let newArr = [];
  array.forEach(element => {
    newArr.push(func(element));
  });
  return newArr;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]