function indexOf(firstString, secondString) {
  let index = -1;
  for (let i = 0; i <= firstString.length - secondString.length; i += 1) {
    found = true;
    for (let j = 0; j < secondString.length; j += 1) {
      if (secondString[j] !== firstString[i + j]) {
        found = false;
        break;
      }
    }
    if (found) {
      index = i;
      break;
    }
  }
  return index;
}

function lastIndexOf(firstString, secondString) {
  let index = -1;
  for (let i = 0; i <= firstString.length - secondString.length; i += 1) {
    found = true;
    for (let j = 0; j < secondString.length; j += 1) {
      if (secondString[j] !== firstString[i + j]) {
        found = false;
        break;
      }
    }
    if (found) {
      index = i;
    }
  }
  return index;
}


let l = console.log;

l(indexOf('Some strings', 's'));                      // 5
l(indexOf('Blue Whale', 'Whale'));                    // 5
l(indexOf('Blue Whale', 'Blute'));                    // -1
l(indexOf('Blue Whale', 'leB'));                      // -1

l(lastIndexOf('Some strings', 's'));                  // 11
l(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
l(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1