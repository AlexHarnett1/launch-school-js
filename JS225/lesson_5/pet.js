class Pet {
  constructor(name, age, animal) {
    this.name = name;
    this.age = age;
    this.animal = animal;
  }
  info() {
    return `My ${this.animal} ${this.name} is ${this.age} years old and has ${this.color} fur`;
  }
}

class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age, 'cat');
    this.color = color;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.