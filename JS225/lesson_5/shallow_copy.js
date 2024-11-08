function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));

  for (let prop in object) {
    if (Object.hasOwn(object, prop)) {
      newObj[prop] = object[prop];
    }
  }
  return newObj;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function () {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
baz.hasOwnProperty('a');  // false
baz.hasOwnProperty('b');  // false
baz.hasOwnProperty('c');  // true