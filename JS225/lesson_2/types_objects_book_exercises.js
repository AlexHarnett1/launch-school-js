/*
Create an object that represents a Cessna 152 aircraft. The aircraft should include
information that shows its fuel capacity of 24.5 gallons and a cruising speed of
111 knots. The aircraft should be able to take off and land.

Identify the state and behavior items in this object.

*/

let Cessna = {
  fuelCapacity: 24.5,
  cruisingSpeed: 111,

  takeOff() {
    console.log("The aircraft took off.");
  },

  land() {
    console.log("The aircraft landed.");
  },
}

/*
Write a simple constructor function that creates objects that represent books.
 Each book should have a title, author, and the year published. Create objects
  that represent the following books:

Title	          Author	        Year Published
Neuromancer	    William Gibson	1984
Doomsday Book	  Connie Willis	  1992

When you are done, identify the type of the objects created, the constructor function,
 and the instance objects.
*/

function Book(title, author, yearPublished) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

let necromancer = new Book('Necromancer', 'William Gibson', 1984);
let doomsday = new Book('Doomsday Book', 'Connie Willis', 1992);


/*
Write a simple constructor function that creates objects that represent musical albums.
 Each album should have a title, artist, and release year. Create objects that represent
  the following 2 albums:

Title	                      Artist	          Release Year
Thriller	                  Michael Jackson	  1982
The Dark Side of the Moon	  Pink Floyd	      1973

When you are done, identify the type of the objects created, the constructor function,
 and the instance objects.
*/

function Album(title, artist, releaseYear) {
  this.title = title;
  this.artist = artist;
  this.releaseYear = releaseYear;
}

let thriller = new Album('Thriller', 'Michael Jackson', 1982);
let dsom = new Album('The Dark Side of the Moon', 'Pink Floyd', 1973);


/*
Write a constructor function that creates objects that represent smartphones.
Each smartphones should have a brand, model, and release year. Add methods to
check the battery level and to display the smartphones's information. Create
objects that represent the following two smartphones:

Brand	    Model	      Release Year
Apple	    iPhone 12	  2020
Samsung	  Galaxy S21	2021
*/

function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;

  this.batteryLevel = function() {
    console.log('Battery is at 65%.');
  }
  this.information = function() {
    console.log(`You have a ${this.releaseYear} ${this.model} which is a ${this.brand} product.`)
  }
}

let iphone = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxy = new Smartphone('Samsung', 'Galaxy S21', 2021);

iphone.batteryLevel();
iphone.information();
galaxy.information();


