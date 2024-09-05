function logOddNumbers(num) {
  for (let i = 0; i <= num; i += 1) {
    if (i % 2 === 1) console.log(i);
  }
}

logOddNumbers(19);