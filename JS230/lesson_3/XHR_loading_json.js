let request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/rails/rails');
request.responseType = 'json';

request.addEventListener('load', event => {
  let xhr = request.response;
  if (xhr !== '') {
    console.log(request.status);
    console.log(xhr.open_issues)
  } else {
    console.log('response is empty.')
  }
});

request.addEventListener('error', event => {
  console.log('The request could not be completed!');
});

request.send();