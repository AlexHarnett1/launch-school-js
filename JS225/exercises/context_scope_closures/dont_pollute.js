const greeter = (function (name, greeting) {
  return {
    message: `${greeting} ${name}!`,
    sayGreetings() {
      console.log(this.message);
    }
  }
})('Naveed', 'Hello');

greeter.sayGreetings();
