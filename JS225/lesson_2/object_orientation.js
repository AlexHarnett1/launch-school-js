function makeItem(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    changePrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log("The new price can't be negative");
      }
    },
    describeProduct() {
      return 'id: ' + this.id + '\n' +
        'name: ' + this.name + '\n' +
        'stock: ' + this.stock + '\n' +
        'price: $' + this.price;
    }
  }
}

let scissors = makeItem(0, 'Scissors', 8, 10);
let drill = makeItem(1, 'Cordless Drill', 15, 45);
drill.changePrice(5);
console.log(drill.describeProduct());


/*
let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;
*/