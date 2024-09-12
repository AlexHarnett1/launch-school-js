function makeDoubler(name) {
  return number => {
    console.log(`This function was called by ${name}.`);
    return number + number;
  }
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.