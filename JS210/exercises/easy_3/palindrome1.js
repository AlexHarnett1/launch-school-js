function isPalindrome(str) {
  chars = str.toLowerCase().split('');
  for (let i = 0; i < chars.length; i+= 1) {
    if (chars[i] !== chars[chars.length - 1 - i]) return false;
  }
  return true;
}

/*
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
*/

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true