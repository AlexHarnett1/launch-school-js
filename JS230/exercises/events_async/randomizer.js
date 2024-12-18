function randomizer(...args) {
  let totalTime = args.length * 2;
  let currentTime = 0;

  let interval = setInterval(() => {
    currentTime += 1;
    console.log(currentTime);

    if (currentTime >= totalTime) clearInterval(interval);

  }, 1000);

  args.forEach(callback => {
    setTimeout(callback, Math.random() * totalTime * 1000);
  });

}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6