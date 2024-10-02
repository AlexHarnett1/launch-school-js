function lightsOn(switches) {
  if (switches <= 0) return [];
  let arr = Array(switches).fill(false);
  for (let i = 1; i <= switches; i += 1){
    arr.forEach((element, index) => {
      if ((index + 1) % i === 0) arr[index] = !element;
    });
  }
  return arr.map((element, index) => {
    if (element) return (index + 1);
  }).filter(value => value !== undefined);
}

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(10));       // [1, 4, 9]

console.log(lightsOn(0));        // []
console.log(lightsOn(-1));       // []
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

//lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*
  Input: Number
  Output: Array of numbers. Lights that are on.

  Questions: 
  - Can there be anything other than a number give? What to do?
  - Do I return an empty array when the number is 0 or negative?
  - 

  Data Structures:
  - An array of booleans, that says if it's switched on or not

  Algorithm:
  - for the given number of switches. Go through and if the index is divisible by the number i then
    change the switch to it's opposite.
  - map each index that is true and add 1.

*/
