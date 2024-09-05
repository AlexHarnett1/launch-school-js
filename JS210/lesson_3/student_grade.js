const rlSync = require('readline-sync');
let totalGradeNumber = 0;
for (let i = 1; i < 4; i++) {
  totalGradeNumber += Number(rlSync.question(`Enter score ${i}: `));
}

averageGrade = totalGradeNumber / 3;
let grade = '';

if (averageGrade < 50) {
  grade = 'F';
} else if (averageGrade < 70) {
  grade = 'C';
} else if (averageGrade < 90) {
  grade = 'B';
} else {
  grade = 'A';
}

console.log(`Based on the average of your 3 scores your letter grade is "${grade}".`)