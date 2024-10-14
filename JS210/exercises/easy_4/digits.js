function digitList(num) {
  let charNums = String(num).split('');
  let digits = []
  for (let i = 0; i < charNums.length; i += 1) {
    digits.push(parseInt(charNums[i], 10));
  }
  console.log(digits);
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]