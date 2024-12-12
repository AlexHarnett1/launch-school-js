// function downloadFilePromise() {
//   return new Promise((resolve) => {
//     console.log("Downloading file...");
//     setTimeout(() => {
//       resolve("Download complete!");
//     }, 1500);
//   });
// }

async function downloadFilePromise() {
  console.log('Downloading file...');
  let message = await new Promise((resolve) => {
    setTimeout(() => resolve('Download Complete'), 1500);
  });
  console.log(message);
}

//downloadFilePromise();

// function loadData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Data loaded");
//       } else {
//         reject("Network error");
//       }
//     }, 1000);
//   });
// }

async function loadData() {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    });
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

// loadData();


async function fetchResource(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

  } catch (error) {
    console.log("Failed to load resource");
  } finally {
    console.log("Resource fetch attempt made")
  }

}

// // Example usage:
// fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// // Logs fetched data, then "Resource fetch attempt made"
// fetchResource("invalidUrl");
// // Logs "Failed to load resource", then "Resource fetch attempt made"


async function fetchUserProfile(userId) {
  try {
    let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let userData = await userResponse.json();
    console.log('User profile', userData);
  } catch (error) {
    console.log('Failed to retreive user data');
  }


  try {
    let userPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    let userPostsData = await userPostsResponse.json();
    console.log('User post data:', userPostsData);
  } catch (error) {
    console.log('Failed to retreive user post data');
  }
  
  try {
    let userTodosResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    let userTodosData = await userTodosResponse.json();
    console.log('User todos data', userTodosData);
  } catch (error) {
    console.log('Failed to retreive user todos data');
  }
}


// Example usage:
fetchUserProfile(1);
// Logs user profile, posts, and todos. Catches and logs errors at each step if they occur.

