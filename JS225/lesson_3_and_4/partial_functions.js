function greet(greeting, name) {
  console.log(capitalize(greeting) + ', ' + name + '!');
}

function capitalize(str) {
  if (!str) return str; // Handle empty or null strings
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


greet('howdy', 'Joe'); // Howdy, Joe!
greet('good morning', 'Sue'); // Good morning, Sue!

function partial(primary, arg1) {
  return function (arg2) {
    return primary(arg1, arg2);
  };
}

let sayHello = partial(greet, 'Hello');
let sayHi = partial(greet, 'Hi');

sayHello('Brandon'); //Hello, Brandon!
sayHi('Sarah'); // Hi, Sarah!