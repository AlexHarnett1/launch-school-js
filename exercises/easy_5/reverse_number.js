function reverseNumber(num) {
  let reversedArr = String(num).split('').reverse();
  console.log(parseInt(reversedArr.join(''), 10));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1