function assignTreats(appetites, treats) {
  appetites = appetites.sort((a, b) => b - a);
  treats = treats.sort((a, b) => b - a);
  let aidx = 0;
  let tidx = 0;
  let count = 0;

  while (aidx < appetites.length && tidx < treats.length) {
    if (appetites[aidx] <= treats[tidx]) {
      count++;
      tidx++;
    }
    aidx++;
  }
  return count;
}

/*
[3, 4, 2], [1, 2, 3]


*/



console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1, 2, 3], [1, 2, 3]) === 3);
console.log(assignTreats([4, 5, 6], [1, 2, 3]) === 0);

// All test cases should log true.