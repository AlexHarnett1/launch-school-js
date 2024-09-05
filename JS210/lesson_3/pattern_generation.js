function generatePattern(num) {
  str = '';
  for (let i = 1; i <= num; i += 1) {

    for (let j = 1; j <= i; j += 1) {
      str += String(j);
    }

    for (let k = 0; k < (num - i); k += 1) {
      str += '*';
    }

    str += '\n';
  }

  console.log(str);
}

generatePattern(2);