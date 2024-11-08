function Pet(animal, name) {
  this.animal = animal;
  this.name = name;
}

Pet.prototype.sleep = function() {
  console.log('I am sleeping');
}

Pet.prototype.wake = function () {
  console.log('I am awake');
}


let pudding = new Pet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake