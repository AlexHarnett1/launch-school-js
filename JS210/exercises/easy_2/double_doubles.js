function twice(num) {
  let str = String(num);
  let halfway = str.length / 2
  let str1 = str.substring(0, halfway);
  let str2 = str.substring(halfway, str.length);
  if (str1 === str2) {
    console.log(str);
  } else {
    console.log(String(num * 2));
  }
}



twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676