function extend(destination) {
  for(let i = 0; i < arguments.length; i += 1) {
    let source = arguments[i];
    for (let prop in source) {
      if (Object.hasOwn(source, prop)) {
        destination[prop] = source[prop];
      }
    }
  }
  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe