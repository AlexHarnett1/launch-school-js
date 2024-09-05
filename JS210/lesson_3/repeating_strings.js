function repeat(string, times) {
  if (!(Number.isInteger(times) && times >= 0)) {
    console.log(undefined);
    return;
  }
  str = ''
  for (let i = 0; i < times; i += 1) {
    str += string;
  }
  console.log(str);
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined