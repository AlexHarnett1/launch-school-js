function triangle(num) {
  str = '';
  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < num - i; j += 1) {
      str += ' ';
    }

    for (let k = 0; k <= i; k += 1) {
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

triangle(5);

triangle(9);