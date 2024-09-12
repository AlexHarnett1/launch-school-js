function isInAlphabet(char) {
  let charUpper = char.toUpperCase();
  return (charUpper >= 'A' && charUpper <= 'Z');
}

function rot13(str) {
  OFFSET = 13;
  LOWER_BASE = 97;
  UPPER_BASE = 65;
  let rotStr = '';
  let chars = str.split('');

  chars.forEach(function (char) {
    let base = char <= 'Z' ? UPPER_BASE : LOWER_BASE;
    let charCode = char.charCodeAt(0);

    if (isInAlphabet(char)) charCode = (((charCode - base + OFFSET) % 26) + base);
    
    rotStr += String.fromCharCode(charCode);
  });

  return rotStr;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
