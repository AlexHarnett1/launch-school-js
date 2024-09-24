function cleanUp(str) {
  let chars = str.split('');
  let newStr = '';
  let lastCharNonAlpha = false;
  chars.forEach(function (value) {
    if (!lastCharNonAlpha && !charIsAlpha(value)) {
      newStr += ' ';
      lastCharNonAlpha = true;
    } else if (charIsAlpha(value)) {
      newStr += value;
      lastCharNonAlpha = false;
    }
  });
  console.log(newStr);
}

function charIsAlpha(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

cleanUp("---what's my +*& line?");    // " what s my line "