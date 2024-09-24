function myReduce(array, func, initial) {
  let start = initial ? initial : array[0];
  array.forEach(element => {
    start = func(start, element);
  });
  return start;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49