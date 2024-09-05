function checkGoldbach(num) {
  numbers = []
  for (let i = 2; i <= num / 2; i += 1) {
    if (isPrime(i) && isPrime(num - i)) numbers.push([i, num - i]);
  }
  if (numbers.length === 0) {
    return console.log(null);
  } else {
    numbers.forEach(value => console.log(value));
  }
}

function isPrime(num) {
  divisors = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i == 0) divisors += 1;
  }
  return (divisors === 2);
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53