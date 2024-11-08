class Vehicle {

  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  decelerate() {
    console.log('Slowin down, yo!');
  }

  accelerate() {
    console.log('Speedin up, bro!');
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log('Meep, meep');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log('Heave ho, the anchors below!');
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('Houston we have lift off');
  }

  land() {
    console.log("We're comin in hot!!!");
  }
}

let car = new Car('red', 3300, 'BXY334');
car.accelerate();             // Accelerate
car.honk();                   // Honk
car.decelerate();             // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat('yellow', 12000, 'Bahamas');
boat.accelerate();            // Accelerate
boat.decelerate();            // Decelerate
boat.dropAnchor();            // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane('blue', 83000, 'Southwest');
plane.accelerate();           // Accelerate
plane.takeOff();              // Take off
plane.land();                 // Land
plane.decelerate();           // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

console.log(car instanceof Car);
console.log(car instanceof Vehicle);
console.log(plane instanceof Car);

/*
Create a class hierarchy consisting of vehicles, including cars, boats, and planes,
as specific kinds of vehicles. All vehicles should be able to accelerate and decelerate.
Cars should be able to honk, boats should be able to drop anchor, and planes should be
able to take off and land. Test your code.

All vehicles should have a color and weight. Cars have a license number, boats have a
home port, and planes have an airline name.
*/