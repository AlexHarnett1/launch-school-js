function isPrime(num) {
  divisors = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i == 0) divisors += 1;
  }
  console.log(divisors === 2);
}


isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false