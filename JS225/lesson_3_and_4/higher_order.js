let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function (number) {
    return number % 2 === 0;
  };
}

let checkEven = makeCheckEven();

console.log(numbers.filter(checkEven)); // [2, 4]

function execute(func, operand) {
  console.log(func(operand));
}

execute(function (number) {
  return number * 2;
}, 10); // 20

execute(function (string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"

function makeListTransformer(func) {
  return function (arr) {
    return arr.map(func);
  };
}

let timesTwo = makeListTransformer(function (number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]