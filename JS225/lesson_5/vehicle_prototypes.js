/*
Using the constructor/prototype pattern, create some types that represent vehicles,
including cars, boats, and planes as specific kinds of vehicles. All vehicles should
be able to accelerate and decelerate. Cars should be able to honk, boats should be
able to drop anchor, and planes should be able to take off and land. Test your code.
*/

function Vehicle() { };

Vehicle.prototype.accelerate = () => {
  console.log('We going faster');
}

Vehicle.prototype.decelerate = () => {
  console.log('We going slower');
}

function Car() { };
function Boat() { };
function Plane() { };

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  console.log('Beep');
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function () {
  console.log('Anchor hoe');
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.land = function () {
  console.log('Landing');
}

let plane = new Plane();
let boat = new Boat();
let car = new Car();



plane.land();
plane.accelerate();

car.honk();
car.decelerate();

boat.accelerate();
boat.dropAnchor();

