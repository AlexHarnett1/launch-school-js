function repeater(str) {
  let chars = str.split('');
  let double = '';
  for (let i = 0; i < chars.length; i += 1) {
    double += chars[i] + chars[i];
  }
  console.log(double);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""