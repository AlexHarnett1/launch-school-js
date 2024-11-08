/*
Rewrite the following Person class to use private fields for the name and age
properties and provide a setter for setting the age property. Ensure that 
the setter raises a RangeError unless the age is a positive number.
*/

class Person {
  #name;
  #age;
  
  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  set age(age) {
    if (age < 1) {
      throw new RangeError('Age must be positive.');
    } else {
      this.#age = age
    }
  }

  showAge() {
    console.log(this.#age);
  }
}

let person = new Person('John', 30);
person.showAge(); // 30
person.age = 31;
person.showAge(); // 31

try {
  // This line should raise a RangeError,
  // but does not.
  person.age = -5;
  person.showAge(); // -5
} catch (e) {
  // The following line should run, but won't
  console.log('RangeError: Age must be positive');
}