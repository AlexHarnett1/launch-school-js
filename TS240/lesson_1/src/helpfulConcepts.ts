// Type predicates
function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every(val => typeof val == 'string');
}

// Type assertions
const randomValue: unknown = 'jimminy';
const upperCaseValue: string = (randomValue as string).toUpperCase();

// Generic constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Structural(Shape) type checking
interface Device {
  manufacturer: string;
  model: string;
  year: number
}

let computer: Device = { manufacturer: 'sid', model: 'sdf', year: 34 }
let smartphone = { manufacturer: 'sid', model: 'sdf', year: 34, blah: 'sdfsd' } // extra property
let smartphone2: Device = smartphone;

// Descriminated Unions / Exhaustiveness(Nevers)
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * (shape.radius ** 2);
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return assertNever(_exhaustiveCheck);
  }
}

function assertNever(param: never): never {
  throw new Error(param);
}

// Defining a class
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

// Alternate class definition
class Person2 {
  constructor(public name: string, public age: number) {}

  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

