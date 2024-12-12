function basicCallback(callback, num) {
  setTimeout(() => callback(num), 2000);
}

function downloadFilePromise() {
  return new Promise(function (resolve) {
    console.log('Downloading file...');
    setTimeout(() => resolve("Download Complete!"), 1000);
  });
}

function processDataPromise(array, callback) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      array = array.map(callback);
      resolve(array);
    }, 1000);
  })
}

function waterfallOverCallbacks(callbacks, num) {
  callbacks.forEach(callback => {
    num = callback(num);
  });
  console.log(num);
}

function startCounter(callback) {
  let count = 0;
  let counter = setInterval(() => {
    count++;
    if (callback(count)) {
      clearInterval(counter);
    }
  }, 1000);
}

// downloadFilePromise().then(statement => console.log(statement));

// // Example usage:
// processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
//   console.log(processedNumbers);
//   // After 1 second, logs: [2, 4, 6]
// });

let flakyService = new Promise(function (resolve, reject) {
  let randNum = Math.floor(Math.random() * 10);
  console.log(randNum);
  if (randNum > 5) {
    resolve('Operation successful');
  } else {
    reject('Operation failed');
  }
})
  .then(function (resolve) {
    console.log(resolve);
  })
  .catch(function (reject) {
    console.log(reject);
  });


function cleanup() {
  return new Promise(function (resolve, reject) {
    resolve('Operation Complete')
  })
}

cleanup().then(console.log).finally(() => console.log('Operation cleanup'))

function chain(num) {
  new Promise(function (resolve, reject) {
    resolve(num);
  })
    .then(function (resolve) {
      return resolve * 2;
    })
    .then(function (resolve) {
      return resolve + 5;
    })
    .then(function (resolve) {
      return resolve + 5;
    })
    .then(function (resolve) {
      console.log(resolve + 5);
    })
}

chain(1);
