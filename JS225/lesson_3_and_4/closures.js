function makeMultipleLister(num) {
  return function () {
    currentNum = num
    while (currentNum < 100) {
      console.log(currentNum);
      currentNum += num;
    }
  };
}

let lister = makeMultipleLister(13);
lister();
// > let lister = makeMultipleLister(13);
// > lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

let runningTotal = 0;

function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}

function subtract(num) {
  runningTotal -= num;
  console.log(runningTotal);
}

add(1);
add(42);
subtract(39);
add(6);

// > add(1);
// 1
//   > add(42);
// 43
//   > subtract(39);
// 4
//   > add(6);
// 10

