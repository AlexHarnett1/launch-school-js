/*
Input: three numbers
Output: String

Rules:
Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
Invalid: The sum of all angles is not equal to 180

Data Structure:
This might be easiest with all the angles in an array, so we can use the some() method.

Algorithm:
 - Get the sum of all the angles and checking if it's equal to 180.
 - Make sure none of the angles are negative or equal to zero.
 - Check if any of the angles === 90, return right.
 - Check if any of the anlges > 90, return obtuse.
 - Return acute.

*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if ((angle1 + angle2 + angle3) !== 180 || angles.some(val => val <= 0)) {
    return 'invalid';
  } else if (angles.some(val => val === 90)) {
    return 'right';
  } else if (angles.some(val => val > 90)) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"