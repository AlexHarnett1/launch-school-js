Object.prototype.begetObject = function () {
  function newObj() { };
  newObj.prototype = this;
  return new newObj();
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true