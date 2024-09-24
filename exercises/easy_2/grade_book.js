function getGrade() {
  const args = [...arguments];
  let sum = args.reduce((value, combiner) => combiner += value);
  console.log(sum/args.length);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"