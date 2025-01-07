document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let item = form.querySelector('#name').value;
    let quantity = form.querySelector('#quantity').value;
    quantity = (quantity === '') ? 1 : +quantity;

    if (isNaN(quantity)) {
      alert('Quantity must be number!');
      return;
    }
    if (item.trim() === '') {
      alert('Item name must have a value!');
      return;
    }

    let newListItem = document.createElement('li');
    newListItem.textContent = String(quantity) + " " + item;
    let list = document.querySelector('#grocery-list');
    list.appendChild(newListItem);

    form.reset();
  })
});

/*
(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      var listItem = document.createElement("li");
      listItem.append(`${quantity} ${name}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let myGroceryList = new GroceryList("#grocery-list");
    const getValueOf = (selector) => form.querySelector(selector).value;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = getValueOf("#name");
      let quantity = getValueOf("#quantity") || "1";

      myGroceryList.addItem(name, quantity);
      form.reset();
    });
  });
})();
*/