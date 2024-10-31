function makeCar(accelrate, brakeRate = 2) {
  return {
    speed: 0,
    accelrate,
    brakeRate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) this.speed = 0;
    }
  };
}

let sedan = makeCar(8);
sedan.accelerate();
console.log(sedan.speed);

let coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);

let hatchback = makeCar(9);



