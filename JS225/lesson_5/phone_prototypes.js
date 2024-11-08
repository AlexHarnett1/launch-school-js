/*
Brand	Model	Release Year
Apple	iPhone 12	2020
Samsung	Galaxy S21	2021
*/

function Phone(brand, model, release_year) {
  this.brand = brand;
  this.model = model;
  this.release_year = release_year;
}

Phone.prototype.batteryLevel = function() {
  return 'The battery level is full mate.';
}

Phone.prototype.displayInformation = function() {
  return `${this.brand} ${this.model} ${this.release_year}`;
}

let iphone12 = new Phone('Apple',
  'iPhone 12',
  2020);
let galaxyS21 = new Phone('Samsung',
  'Galaxy S21',
  2021);

console.log(iphone12.batteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInformation());
// 2020 Apple iPhone 12

console.log(galaxyS21.batteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInformation());
// 2021 Samsung Galaxy S21
