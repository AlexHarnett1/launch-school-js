

// name property added to make objects easier to identify
const foo = { name: 'foo' };
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function () {
  let arr = [];
  let curr = Object.getPrototypeOf(this);
  while (curr) {
    if (curr.name) {
      arr.push(curr.name);
    } else {
      arr.push('Object.prototype');
    }
    curr = Object.getPrototypeOf(curr);
  }
  console.log(arr);
}

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']