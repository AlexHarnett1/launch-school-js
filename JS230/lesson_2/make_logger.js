function makeLogger(number) {
  return function () {
    console.log(number);
  }
}
function delayLog() {
  for (let i = 1; i <= 10; i++) {
    let logger = makeLogger(i);
    setTimeout(logger, i * 1000);
  }
}

delayLog();