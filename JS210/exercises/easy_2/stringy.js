function stringy(num) {
  str = '';
  for (let i = 0; i < num; i += 1) {
    if (i % 2 === 0) {
      str += '1';
    } else {
      str += '0';
    }
  }
  console.log(str);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"