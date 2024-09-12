let today = new Date();
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let dayOfWeek = daysOfWeek[today.getDay()]
let dayOfMonth = today.getDate();
let month = months[today.getMonth()];

let suffix = 'th';
if (String(dayOfMonth)[0] !== '1') {
  if (dayOfMonth % 10 === 1) {
    suffix = 'st';
  } else if (dayOfMonth % 10 === 2) {
    suffix = 'nd';
  } else if (dayOfMonth % 10 === 3) { 
    suffix = 'rd';
  }
}

console.log(`Today's date is ${dayOfWeek}, ${month} ${dayOfMonth}${suffix}`);

console.log(today.getFullYear());
console.log(today.getYear());
console.log(today.getTime());
console.log(Date.now());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

let nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());