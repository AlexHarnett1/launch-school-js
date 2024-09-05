function substr(string, start, length) {
  if (start < 0) start += string.length;
  if (start <= 0 || length <= 0) {
    console.log('');
    return;
  }

  lastCharIndex = Math.min(length + start, string.length);
  let substring = ''
  for (let i = start; i <= lastCharIndex - 1; i += 1) {
    substring += string[i];
  }
  console.log(substring);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""