function crunch(str) {
  let new_str = ''
  for (let i = 0; i < str.length; i += 1) {
    if (!new_str.endsWith(str.charAt(i))) new_str += str.charAt(i);
  }
  return new_str;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""