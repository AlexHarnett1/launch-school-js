let prot = {};

let foo = Object.create(prot);

console.log(prot.isPrototypeOf(foo));
console.log(Object.getPrototypeOf(foo) === prot);
