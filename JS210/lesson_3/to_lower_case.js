function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);

    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"