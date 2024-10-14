function reverseWords(str) {
  return str.split(' ').map(word => reverseWord(word)).join(' ');
}

function reverseWord(word) {
  let chars = word.split('');
  let start = 0;
  let end = chars.length - 1;
  
  while (start < end) {
    [chars[start], chars[end]] = [chars[end], chars[start]];
    start++;
    end--;
  }
  return chars.join('');
}


console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");