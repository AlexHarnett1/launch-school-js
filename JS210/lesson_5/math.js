function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

console.log(radiansToDegrees(1));

let neg = -180;
console.log(Math.abs(neg));

console.log(Math.sqrt(16777216));
console.log(Math.pow(16, 6));

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

function rand(max, min) {
  if (max < min) {
    let temp = max;
    max = min;
    min = temp;
    // [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(rand(5, 7));