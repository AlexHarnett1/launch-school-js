function sequence(times, step) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < times; i += 1) {
    sum += step;
    arr.push(sum);
  }
  console.log(arr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []