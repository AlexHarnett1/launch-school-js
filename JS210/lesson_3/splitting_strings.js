function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  currentStr = '';
  currentIndex = 0;
  while (currentIndex < string.length) {
    if (string[currentIndex] === delimiter) {
      console.log(currentStr);
      currentStr = '';
    } else if (delimiter === '') {
      console.log(string[currentIndex]);
    } else {
      currentStr += string[currentIndex];
    }
    currentIndex += 1;
  }

  if (currentStr !== '') console.log(currentStr);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
