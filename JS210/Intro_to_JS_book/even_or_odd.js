function evenOrOdd(num) {
  if (!parseInt(num)) {
    console.log('Must give a number');
    return;
  }

  text = (num % 2 === 0) ? 'Even' : 'Odd'
  console.log(text)
}

evenOrOdd(2);

evenOrOdd(5);

evenOrOdd('sdf');
