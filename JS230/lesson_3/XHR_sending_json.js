let request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

let data = { name: "Yo-yo", sku: 'yoyo', price: 4000 };
let json = JSON.stringify(data);

request.addEventListener('load', () => {
  console.log(`This product was added: ${request.responseText}`);
});

request.send(json);

/*
POST HTTP 1.1
Host: lsjs230-book-catalog.herokuapp.com
Content-Type: application/json; charset=utf-8
Accept: *

{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }

*/
