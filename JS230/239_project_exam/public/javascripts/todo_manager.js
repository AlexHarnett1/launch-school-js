import { APIManager } from "./api_manager.js";
import { Todo } from "./todo.js";

class TodoManager {
  constructor() {
    this.templates = {};
    this.apiManager = new APIManager();
    this.todos = null;
    this.templateData = {};
    this.modalTodoId = null;

    // Store currently selected group
    this.currentGroupTitle = "All Todos";
    this.isCompletedGroup = false;
    
    this.init();
  }

  async init() {
    this.registerTemplates();
    await this.loadTodos();
    this.createEventListeners();
  }

  registerTemplates() {
    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });

    document.querySelectorAll('[data-type=partial]').forEach(tmpl => {
      Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
    });

    console.log(this.templates);
  }

  async loadTodos() {
    const apiTodos = await this.apiManager.getAllTodos();
    this.todos = apiTodos.map(todo => new Todo(todo));
    this.updateTemplateData();
    this.setTemplateGroup(false, "All Todos");
    this.renderMainTemplate();
  }

  renderMainTemplate() {
    document.querySelector('body').insertAdjacentHTML('beforeend', this.templates.main_template(this.templateData));
    document.getElementById('all_header').classList.add('active');
  }

  updateTemplateData() {
    this.sortTodos();
    let done = this.todos.filter(todo => todo.completed);
    let todos_by_date = this.groupTodosByDate(this.todos);
    let done_todos_by_date = this.groupTodosByDate(done);
    //let current_section = { title: "All Todos", data: this.todos.length };
    //let selected = this.todos;
    Object.assign(this.templateData, { todos: this.todos, done, todos_by_date, done_todos_by_date });
    //this.refreshTemplateGroup();
  }

  sortTodos() {
    this.todos.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed - b.completed;
      }
      return a.id - b.id;
    });
  }

  addTodoToTemplateData(todoJson) {
    let todo = new Todo(todoJson);
    this.todos.push(todo);
    // This could be done manually to be more efficient memory wise, but not concerned atm.
    this.updateTemplateData();
    this.setTemplateGroup(false, 'All Todos');
    this.updateUI();
  }

  removeTodoFromTemplateData(todoId) {
    console.log(todoId);
    this.todos = this.todos.filter(todo => todo.id !== Number(todoId));
    this.updateTemplateData();
    this.refreshTemplateGroup();
  }

  updateTodoTemplateData(todoJson) {
    let todo = this.findTodoById(todoJson.id);
    todo.setAllTodoVariables(todoJson);
    this.updateTemplateData();
    this.refreshTemplateGroup();
  }

  updateUI() {
    this.updateTitleUI();
    this.updateItemsUI();
    this.updateSideBarUI();
  }

  updateTitleUI() {
    const headerContainer = document.querySelector('#items').firstElementChild;
    console.log(headerContainer);
    console.log(this.templateData);
    headerContainer.innerHTML = this.templates.title_template(this.templateData);
  }

  updateItemsUI() {
    const listContainer = document.querySelector('tbody');
    listContainer.innerHTML = this.templates.list_template(this.templateData);  
  }

  updateSideBarUI() {
    const activeElement = document.querySelector('.active');
    const activeTitle = activeElement?.getAttribute('data-title');

    const allListsContainer = document.querySelector('#all_lists');
    allListsContainer.innerHTML = this.templates.all_list_template(this.templateData);

    const allTodosContainer = document.querySelector('#all_todos');
    allTodosContainer.innerHTML = this.templates.all_todos_template(this.templateData);

    const completedListsContainer = document.querySelector('#completed_lists');
    completedListsContainer.innerHTML = this.templates.completed_list_template(this.templateData);

    const completedTodosContainer = document.querySelector('#completed_todos');
    completedTodosContainer.innerHTML = this.templates.completed_todos_template(this.templateData);

    // Maintain active sidebar element after refreshing the sidebar
    const newActiveElementParent = this.isCompletedGroup ? document.getElementById('completed_items') : document.getElementById('all');
    const newActiveElement = newActiveElementParent.querySelector(`[data-title="${activeTitle}"]`);
    newActiveElement?.classList.add('active');
  }

  groupTodosByDate(todos) {
    let obj = {};
    todos.forEach(todo => {
      if (obj[todo.due_date]) {
        obj[todo.due_date].push(todo);
      } else {
        obj[todo.due_date] = [todo];
      }
    });
    return obj;
  }

  toggleModal() {
    // Need to add a top margin to center it on the page when it is brought up.
    document.querySelectorAll('div.modal').forEach(modal => {
      modal.style.display = modal.style.display === 'none' || !modal.style.display ? 'block' : 'none';
    });
    document.getElementById('form_modal').firstElementChild.reset(); //Might need to change this... It resets toggling on and off.
  }

  populateModalFields(todoId) {
    this.modalTodoId = todoId;
    let todo = this.findTodoById(todoId);
    let modalForm = document.getElementById('form_modal').firstElementChild;

    modalForm.querySelector('#title').value = todo.title;
    if (todo.day) modalForm.querySelector('#due_day').value = todo.day;
    if (todo.month) modalForm.querySelector('#due_month').value = todo.month;
    if (todo.year) modalForm.querySelector('#due_year').value = todo.year;
    modalForm.querySelector('textarea').value = todo.description;
  }

  createEventListeners() {
    let modalForm = document.getElementById('form_modal').firstElementChild;
    let todoTable = document.querySelector('table');

    // Bring up modal for new todo
    document.querySelector("label[for=new_item]").addEventListener('click', (e) => {
      this.toggleModal();
      this.modalTodoId = null;
    });

    // Add or update a Todo
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      let todoFormData = Object.fromEntries(new FormData(e.target).entries());

      if (todoFormData.title.trim().length < 3) {
        alert('The title must be at least 3 characters.');
        return;
      }

      todoFormData = Todo.sanitizeFormData(todoFormData);
      if (this.modalTodoId) {
        let todoJson = await this.apiManager.updateTodo(todoFormData, this.modalTodoId);
        this.updateTodoTemplateData(todoJson);
      } else {
        let todoJson = await this.apiManager.createTodo(todoFormData);
        this.addTodoToTemplateData(todoJson);
      }
      this.toggleModal();
    });

    // Mark todo as complete
    modalForm.querySelector("button[name='complete']").addEventListener('click', async (e) => {
      e.preventDefault();
      if (this.modalTodoId) {
        let todo = this.findTodoById(this.modalTodoId);
        if (!todo.completed) {
          todo.toggleCompleted();
          await this.apiManager.toggleTodoComplete(todo);
        }
        this.updateTemplateData();
        this.refreshTemplateGroup();
        this.toggleModal();
      } else {
        alert('Cannot mark as complete as item has not been created yet!');
      }
    });

    document.getElementById('modal_layer').addEventListener('click', (e) => {
      this.toggleModal();
    });

    // Click on a todo
    todoTable.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log(e.target);

      //Delete todo
      const deleteButton = e.target.closest('.delete');
      let id = e.target.closest('tr').getAttribute('data-id');
      if (deleteButton) {
        await this.apiManager.deleteTodo(id);
        this.removeTodoFromTemplateData(id);
      } else if (e.target.tagName === 'LABEL') { // Bring up modal for updating todo
        this.toggleModal();
        this.populateModalFields(id);
      } else {                                  // Mark todo completed
        let todo = this.findTodoById(id);
        todo.toggleCompleted();
        await this.apiManager.toggleTodoComplete(todo);
        this.updateTemplateData();
        this.refreshTemplateGroup();
      }

    });

    document.getElementById('sidebar').addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target.closest('[data-title]');
      if (!target) return; // Ensure target exists

      document.querySelector('.active')?.classList.remove('active'); // Remove previously active class safely
      target.classList.add('active');

      const isCompleted = e.target.closest('#completed_items') !== null;
      this.setTemplateGroup(isCompleted, target.getAttribute('data-title'));
      this.updateUI();
    });

  }

  setTemplateGroup(isCompleted, date) {
    this.currentGroupTitle = date;
    this.isCompletedGroup = isCompleted;

    let todos;
    if (isCompleted) {
      todos = date === 'Completed' ? this.templateData.done : this.templateData.done_todos_by_date[date];
    } else {
      todos = date === 'All Todos' ? this.todos : this.templateData.todos_by_date[date]
    }

    if (todos) {
      this.templateData.current_section = { title: date, data: todos.length };
      this.templateData.selected = todos;
    } else {
      this.templateData.current_section = { title: date, data: 0 };
      this.templateData.selected = {};
    }
    
  }
  
  refreshTemplateGroup() {
    this.setTemplateGroup(this.isCompletedGroup, this.currentGroupTitle);
    this.updateUI();
  }

  findTodoById(todoId) {
    return this.todos.find(todo => todo.id === Number(todoId));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let todoManager = new TodoManager();
});


/*
Don't forget about these:
 - Add try/catch to await statements.
 - Make it so this.updateTemplateData() and this.updateUI() are grouped.. They're always called together.
 - Consider simplifying mark completed so that it's just changing the ui that it impacts, not all of it.
 - Abstract some of the functionality of the event listeners to functions.
 - consider a more optimal way of sorting todos. (SortTodos())
 - The side bar needs to have an order.


*/

// const data = {
//   todos: [
//     { id: 1, title: "Buy groceries", due_date: "2025-01-16", completed: false, description: 'Hello my name is' },
//     { id: 2, title: "Run 5 miles", due_date: "2025-01-17", completed: true }
//   ],
//   done: [
//     { id: 2, title: "Run 5 miles", due_date: "2025-01-17", completed: true }
//   ],
//   todos_by_date: {
//     "2025-01-16": [{ id: 1, title: "Buy groceries", due_date: "2025-01-16", completed: false }],
//     "2025-01-17": [{ id: 2, title: "Run 5 miles", due_date: "2025-01-17", completed: true }]
//   },
//   done_todos_by_date: {
//     "2025-01-17": [{ id: 2, title: "Run 5 miles", due_date: "2025-01-17", completed: true }]
//   },
//   current_section: {
//     title: "All Todos",
//     data: "2"
//   },
//   selected: [
//     { id: 1, title: "Buy groceries", due_date: "2025-01-16", completed: false },
//     { id: 2, title: "Run 5 miles", due_date: "2025-01-17", completed: true }
//   ]

// };
