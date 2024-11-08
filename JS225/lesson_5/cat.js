class Cat {
  constructor(name = 'kitty') {
    this.rename(name);
    this.greet();
  }
  greet() {
    console.log(`I am a cat named ${this.name}.`);
  }
  rename(newName) {
    this.name = newName;
  }
  static genericGreeting() {
    console.log('Hello, I am a cat!');
  }
}

let kitty = new Cat('Joe');
Cat.genericGreeting();