function afterNSeconds(n, callback) {
  setTimeout(callback, n * 1000);
}

function makeLogger() {
  return function () {
    console.log('Yo yo');
  }
}

afterNSeconds(5, makeLogger());