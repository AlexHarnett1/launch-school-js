todo_items = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John ' }
];

document.addEventListener('DOMContentLoaded', () => {
  let template = Handlebars.compile(document.getElementById('todo').innerHTML);
  let todosContainer = document.getElementById('todos');
  todosContainer.insertAdjacentHTML('beforeend', template({ todos: todo_items }));

  todosContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName !== 'A') return;
    let parentElement = e.target.parentElement;
    if (window.confirm('Are you sure you would like to delete this todo?')) {
      parentElement.remove();
    }
  
  });


});