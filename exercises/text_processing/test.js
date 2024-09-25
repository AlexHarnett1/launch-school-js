function foo(list) {
  return list.map(function (word) {
    return word.match(/[aeiou]/gi) || [];
  }).reduce(function (acc, letterList) {
    return acc + letterList.length;
  }, 0);
}

console.log(foo(['a', 'e', 'i', 'o', 'u']));
console.log('abcdefghijk'.substring(2, 2));

let str = "_hello_world";
console.log(str.match(/\w+/g));
console.log(str.match(/[A-Z]+/gi));