function isFirstHalfOfAlphabet(char) {
  return (char >= 'A' && char <= 'M' || char >= 'a' && char <= 'm');
}

function isLastHalfOfLAlphabet(char) {
  return (char >= 'N' && char <= 'Z' || char >= 'n' && char <= 'z');
}

function rot13(str) {
  const OFFSET = 13;
  let rotStr = '';
  let chars = str.split('');

  chars.forEach(function (char) {
    let charCode = char.charCodeAt(0);
    if (isFirstHalfOfAlphabet(char)) { 
      charCode += OFFSET;
      rotStr += String.fromCharCode(charCode);
    } else if (isLastHalfOfLAlphabet(char)) {
      charCode -= OFFSET;
      rotStr += String.fromCharCode(charCode);
    } else {
      rotStr += char;
    }
  });

  return rotStr;  
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
