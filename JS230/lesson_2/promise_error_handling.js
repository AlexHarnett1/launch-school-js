function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

// flakyService()
//   .then(console.log)
//   .catch(() => console.error('An error occurred'));


function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

// fetchUserData()
//   .catch((reject) => console.log(`Error: ${reject['error']}`))
//   .finally(() => console.log('Fetching complete'));


// function retryOperation(promise) {
//   promise()
//     .catch(promise)
//     .catch(promise)
//     .catch(() => console.log('Operation failed'));
// }

function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().catch((err) => {
      if (attempts < 2) {
        attempts++;
        console.log(`Retry attempt #${attempts}`);
        return attempt();
      } else {
        throw err;
      }
    });
  }

  return attempt().catch(() => console.error("Operation failed"));
}

// // Example usage:
// retryOperation(
//   () =>
//     new Promise((resolve, reject) =>
//       Math.random() > 0.33
//         ? resolve("Success!")
//         : reject(new Error("Fail!"))
//     )
// );

function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}

// mockAsyncOp(console.log)
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log('Operation attempted'));

// function loadData() {
//   return new Promise(function (resolve, reject) {
//     if (Math.random() > .5) {
//       resolve('Data loaded');
//     } else {
//       reject('Network error');
//     }
//   });
// }


// loadData()
//   .then(console.log)
//   .catch((error) => console.log(`${error} - Using cached data`));


function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  }).catch(() => {
    console.error("An error occurred. Attempting to recover...");
    // Return a recovery promise
    return Promise.resolve("Using cached data");
  });
}

loadData().then(console.log);
// Logs "Data loaded" or "Using cached data"
