function trim(str) {
  let firstCharIndex = -1;
  let lastCharIndex = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== ' ') {
      firstCharIndex = i;
      break;
    }
  }

  for (let i = str.length - 1; i >= 0; i -= 1) {
    if (str[i] !== ' ') {
      lastCharIndex = i;
      break;
    }
  }

  if (firstCharIndex === -1) {
    console.log('');
  } else {
    trimmedStr = '';
    for (let i = firstCharIndex; i <= lastCharIndex; i += 1) {
      trimmedStr += str[i];
    }
    console.log(trimmedStr);
  }


}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""