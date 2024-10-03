/*
Input: Number(year)
Output: Number(number of friday the 13ths)



*/


function fridayThe13ths(year) {
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
  let unluckyDays = 0;
  MONTHS.forEach(month => {
    if (getDayOfWeek(month, year) === 5) unluckyDays += 1;
  });
  return unluckyDays;
}

function getDayOfWeek(month, year) {
  let date = new Date(`${month} 13, ${year} 12:15:30`);
  return date.getDay();
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2