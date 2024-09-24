let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let exams = getExams(scores);

  let studentGrades = getStudentGrades(scores);
  let examAverages = getExamAverages(exams);
  let examMaximums = getExamMaximums(exams);
  let examMinimums = getExamMinimums(exams);

  let hash = {
    studentGrades: studentGrades,
    exams: ([]),
  }
  examAverages.forEach((exam, index) => {
    hash.exams.push({
      average: exam,
      minimum: examMinimums[index],
      maximum: examMaximums[index],
    })
  });

  console.log(hash);
}

function getStudentGrades(scores) {
  return Object.keys(scores).map((student) => {
    let examAvg = getAverage(scores[student].scores.exams);
    let exerciseSum = getSum(scores[student].scores.exercises);
    let grade = Math.round((examAvg * .65) + (exerciseSum * .35))
    return String(grade) + ' (' + getLetterGrade(grade) + ')';
  });
}

function getLetterGrade(grade) {
  if (grade < 60) {
    return 'F';
  } else if (grade < 70) {
    return 'D';
  } else if (grade < 80) {
    return 'C';
  } else if (grade < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

function getExamAverages(exams) {
  return exams.map((exam) => {
    let sum = exam.reduce((sum, scores) => sum + scores, 0);
    return sum / exam.length;
  });
}

function getExamMinimums(exams) {
  return exams.map(exam => {
    exam.sort(compareNumbers);
    return exam[0];
  });
}

function getExamMaximums(exams) {
  return exams.map(exam => {
    exam.sort(compareNumbers);
    return exam[exam.length - 1];
  });
}

function getExams(scores) {
  let exams = [[], [], [], []];
  Object.keys(scores).forEach((student) => {
    scores[student].scores.exams.forEach((element, index) => {
      exams[index].push(element);
    });
  });
  return exams;
}

function getAverage(array) {
  let sum = array.reduce((sum, num) => sum + num, 0);
  return sum / array.length;
}

function getSum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function compareNumbers(a, b) {
  return a - b;
}

generateClassRecordSummary(studentScores);

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
// }