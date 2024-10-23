function countDigits(num) {
  let newNum = Math.floor(num / 10);
  if (newNum === 0) return 1;

  return countDigits(newNum) + 1;
}

console.log(countDigits(12345) === 5);
console.log(countDigits(7) === 1);
console.log(countDigits(100000) === 6);
console.log(countDigits(99999) === 5);
console.log(countDigits(0) === 1);

// All test cases should log true.