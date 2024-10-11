// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

/*
Input: String
Output: Boolean

Algorithm:
- forEach character, if it is an open character then add it to the stack, 
- when you come across a closing character then check if it matches the the top opening character,
  if so, then remove it and continue. Else return false

*/

function areMatched(str) {
  if (str === '') return true;
  let chars = str.split('');
  let stack = [];

  for (let i = 0; i < chars.length; i += 1) {
    element = chars[i];
    if (isOpener(element)) {
      stack.push(element);
    } else if(matchesOpener(element, stack[stack.length - 1])) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

function isOpener(char) {
  return char.match(/[\[\{\(]/);
}

function matchesOpener(char, opener) {
  return ((char === ')' && opener === '(')
    || (char === '}' && opener === '{')
    || (char === ']' && opener === '['));
}

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([)]"));            // Output: false
console.log(areMatched("{}({[]})"));        // Output: true
console.log(areMatched("()["));             // Output: false
console.log(areMatched(")"));               // Output: false