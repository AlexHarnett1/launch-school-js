function join(arr, str) {
  joined_str = '';
  for (let i = 0; i < arr.length - 1; i += 1) {
    joined_str += String(arr[i]);
    joined_str += str;
  }
  joined_str += String(arr[arr.length - 1]);
  console.log(joined_str);
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'