function logMultiples(num) {
  let multiplier = 1;
  let arr = [];
  while (multiplier * num <= 100) {
    arr.push(multiplier * num);
    multiplier += 2;
  }
  
  arr.reverse().forEach(value => console.log(value));
}


logMultiples(17);

logMultiples(21);