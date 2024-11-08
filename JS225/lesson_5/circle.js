function Circle(radius) {
  this.radius = radius;
  this.area = function() {
    return (radius * radius * 3.1415);
  }
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27