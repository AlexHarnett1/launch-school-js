let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let arr = Object.keys(obj).map(value => value.toUpperCase());

console.log(arr);


let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
myObj.qux = 3

