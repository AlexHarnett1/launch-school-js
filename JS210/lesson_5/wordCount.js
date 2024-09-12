function wordCount(str) {
  let words = str.split(' ');
  let obj = {};
  words.forEach(function (word) {
    if (obj[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }
  });
  return obj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }