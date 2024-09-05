function fizzbuzz() {
  for (let number = 1; number <= 100; number += 1) {
    str = ''
    if (number % 3 === 0) {
      str += 'Fizz';
    }
    
    if (number % 5 === 0) {
      str += 'Buzz';
    }

    if (str.length) {
      console.log(str);
    } else {
      console.log(String(number));
    }
  }
}

fizzbuzz();