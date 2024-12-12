function basicCallback(callback, num) {
  setTimeout(() => callback(num), 2000);
}

function downloadFile(callback) {
  console.log('Downloading file...');
  setTimeout(() => callback('Download Complete'), 1500)
}

function processData(array, callback) {
  setTimeout(() => {
    array = array.map(callback);
    console.log(array);
  }, 1000);
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



// // Example usage:
// basicCallback((number) => {
//   console.log(number * 2);
// }, 5);
// // After 2 seconds, logs: 10

// downloadFile((r) => console.log(r));

// // Example usage:
// processData([1, 2, 3], (number) => number * 2);
// // After 1 second, logs: [2, 4, 6]

// // Example usage:
// const double = (x) => x * 2;
// waterfallOverCallbacks([double, double, double], 1);
// // Logs: 8

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops

