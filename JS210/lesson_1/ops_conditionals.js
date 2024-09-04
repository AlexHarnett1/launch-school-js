let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log('Same');
} else if (apples == bananas) {
  console.log('Kinda same');
}  else {
  console.log('Different');
}

apples = 3;
bananas = 3;
let areEqual = apples === bananas;

console.log(areEqual);

apples = 3;
bananas = undefined;
let eitherOr = apples || bananas;
console.log(eitherOr);

let lastName = 'Harnett'
let familyMessage = lastName === 'Harntt' ? "You're in da family" : "You're not in da family";
console.log(familyMessage);