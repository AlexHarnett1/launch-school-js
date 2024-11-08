function createFruit(name, color) {
  return {
    name,
    color,

    isRipe: function () {
      return `This ${this.name} is ripe.`;
    },

    describe: function () {
      return `This ${this.name} is ${this.color}.`;
    },
  }
};

let apple = createFruit('Apple', 'Red');
let banana = createFruit('Banana', 'Yellow');
let blackberry = createFruit('Blackberry', 'Black');

function createInstrument(name, type) {
  return {
    name,
    type,
    play() {
      console.log(`We are playing a tune on this ${this.name}`);
    },
    showType() {
      console.log(`This ${this.name} is a ${this.type} instrument`);
    },
  }
}


let violin = createInstrument('violin', 'string');
violin.play();     // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
flute.play();      // We are playing a tune on this flute
flute.showType();  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
drum.play();       // We are playing a tune on this drum
drum.showType();   // This drum is a percussion instrument