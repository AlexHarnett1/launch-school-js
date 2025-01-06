let id = 1;
let form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  let nameNode = form.firstElementChild;
  let emailNode = nameNode.nextElementSibling;
  
  if (nameNode.value === "" || emailNode.value === "") {
    alert('One or more fields have no value');
  } else {
    alert(`Successfully created staff with id: ${id}`);
    id++;
  }
});