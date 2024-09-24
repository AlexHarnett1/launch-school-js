function sum(num) {
  let digits = String(num).split('');
  return digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45