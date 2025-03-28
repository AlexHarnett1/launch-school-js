/*
Create an object called shape that has a getType method.
Define a Triangle constructor function whose prototype is shape. Objects created 
with Triangle should have four own properties: a, b, c (representing the sides of a 
triangle), and type.

Add a new method to the prototype called getPerimeter.
*/
let shape = {
  getType() {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.type = 'triangle';
  this.a = a;
  this.b = b;
  this.c = c;

}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"