class Phone {
  constructor(brand, model, release_year) {
    this.brand = brand;
    this.model = model;
    this.release_year = release_year;
  }

  batteryLevel() {
    console.log('Your phone is fully charged.');
  }

  displayInformation() {
    console.log(`${this.brand} ${this.model} ${this.release_year}`);
  }
}


let iphone = new Phone('Apple', 'iPhone 12', 2020);
let galaxy = new Phone('Samsung', 'Galaxy S21', 2021);

iphone.displayInformation();
galaxy.batteryLevel();

console.log(iphone instanceof Phone);


/*
battery level and to display the smartphone's information

Brand	Model	Release Year
Apple	iPhone 12	2020
Samsung	Galaxy S21	2021
*/