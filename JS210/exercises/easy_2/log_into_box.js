function logInBox(str) {
  let topLine = '+';
  let secondLine = '|';
  for (let i = 0; i < str.length + 2; i += 1) {
    topLine += '-';
    secondLine += ' ';
  }
  secondLine += '|';
  topLine += '+';

  let total = `${topLine}\n${secondLine}\n| ${str} |\n${secondLine}\n${topLine}`;
  console.log(total);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');