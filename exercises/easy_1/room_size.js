const METERS_TO_FEET = 10.7639

const rlSync = require('readline-sync');
let length = rlSync.question('Enter the length of the room in meters: ');
let width = rlSync.question('Enter the width of the room in meters: ');

let area = length * width;
let areaInFeet = area * METERS_TO_FEET;

console.log(`The area of the room is ${area.toFixed(2)} square meters(${areaInFeet.toFixed(2)} square feet).`);


/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters(753.47 square feet).
*/