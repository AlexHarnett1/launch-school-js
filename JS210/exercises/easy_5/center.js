function centerOf(str) {
  let half = str.length / 2;
  let char = '';
  if (str.length % 2 == 0) {
    char = str[half - 1] + str[half];
  } else {
    char = str[Math.floor(half)];
  }
  console.log(char);
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"