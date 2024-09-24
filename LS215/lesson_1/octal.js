function octalToDecimal(numberString) {
  let numbers = numberString.split('').reverse();
  let decimal = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    decimal += parseInt(numbers[i], 10) * Math.pow(8, i);
  }
  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9