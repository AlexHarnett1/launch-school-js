function staggeredCase(str) {
  let goUpper = false;
  return str.split('').map(char => {
    if (!char.match(/[a-zA-Z]/)) return char;
    goUpper = !goUpper;
    if (goUpper) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
    
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"