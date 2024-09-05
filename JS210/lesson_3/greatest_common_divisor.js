function gcd(num1, num2) {
  let minNumber = Math.min(num1, num2);
  cd = 1;
  for (let i = 2; i <= minNumber; i += 1) {
    if (num1 % i == 0 && num2 % i == 0) cd = i;
  }
  console.log(String(cd));
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1