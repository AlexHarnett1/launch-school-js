function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${year} year student`);
    },
    listCourses() {
      console.log(this.courses);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    addNote(courseCode, note) {
      let course = this.courses.find((element) => element.code === parseInt(courseCode, 10));

      if (course) {
        if (course.notes) {
          course.notes.push(note);
        } else {
          course.notes = [note];
        }
      }
    },
    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        }
      });
    },
    updateNote(courseCode, note) {
      let course = this.courses.find((element) => element.code === parseInt(courseCode, 10));
      if (course) {
        course.notes = [note];
      }
    },
  }
}

let school = {
  students: [],
  addStudent(name, year) {
    const validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      console.log('Invalid Year');
    } else {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },
  addGrade(student, courseName, grade) {
    const course = student.courses.find(course => course.name === courseName);
    if (course) {
      course.grade = grade;
    }
  },
  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
    });
  },
  courseReport(courseName) {
    let totalScore = 0;
    let totalStudents = 0;
    console.log(`=${courseName} Grades=`);
    this.students.forEach(student => {
      const course = student.courses.find(course => course.name === courseName);
      if (course) {
        if (course.grade) {
          totalScore += course.grade;
          totalStudents++;
          console.log(`${student.name}: ${course.grade}`);
        }
      }
    });
    console.log('---');
    console.log(`Course Average: ${totalScore/totalStudents}`);
  },
}

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects

let paul = school.addStudent('paul', '3rd');
school.enrollStudent(paul, 'Math', 101);
school.enrollStudent(paul, 'Advanced Math', 102);
school.enrollStudent(paul, 'Physics', 202);

school.addGrade(paul, 'Advanced Math', 90);
school.addGrade(paul, 'Math', 95);

school.getReportCard(paul);
school.courseReport('Math');
school.courseReport('Physics');

//console.log(paul);
// {
//   name: 'paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }