function getDefiningObject(object, propKey) {
  let prot = object;
  while (prot) {
    if (Object.hasOwn(prot, propKey)) return prot;
    prot = Object.getPrototypeOf(prot);
  }
  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;


console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null