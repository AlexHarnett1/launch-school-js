import { UIManager } from "./ui_manager.js";
import { APIManager } from "./api_manager.js";
import { Todo } from "./todo.js";

class TodoManager {
  constructor() {
    this.apiManager = new APIManager();
    this.todos = null;
    this.templateData = {};
    this.modalTodoId = null;

    // Store currently selected group
    this.currentGroupTitle = "All Todos";
    this.isCompletedGroup = false;

    // Create instance of UIManager
    this.uiManager = new UIManager(this.templateData);

    this.init();
  }

  async init() {
    await this.loadTodos();
    this.createEventListeners();
  }

  async loadTodos() {
    const apiTodos = await this.apiManager.getAllTodos();
    this.todos = apiTodos.map(todo => new Todo(todo));
    this.updateTemplateData();
    this.setTemplateGroup(false, "All Todos");
    this.uiManager.renderMainTemplate(this.templateData);
  }

  updateTemplateData() {
    this.sortTodos();
    let done = this.todos.filter(todo => todo.completed);
    let todos_by_date = this.groupTodosByDate(this.todos);
    let done_todos_by_date = this.groupTodosByDate(done);
    Object.assign(this.templateData, { todos: this.todos, done, todos_by_date, done_todos_by_date });
    console.log(this.templateData);
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
    this.updateTemplateData();
    this.setTemplateGroup(false, 'All Todos');
    this.uiManager.updateUI();
  }

  removeTodoFromTemplateData(todoId) {
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
    this.uiManager.updateTitleUI(this.templateData);
    this.uiManager.updateItemsUI(this.templateData);
    this.uiManager.updateSideBarUI(this.isCompletedGroup, this.templateData);
  }

  groupTodosByDate(todos) {
    let obj = {};

    // Group todos by due date
    todos.forEach(todo => {
      let dueDate = todo.due_date;
      if (!obj[dueDate]) {
        obj[dueDate] = [];
      }
      obj[dueDate].push(todo);
    });

    // Convert to array for sorting while keeping it as key-value pairs
    let sortedObj = Object.entries(obj)
      .sort(([dateA], [dateB]) => {
        if (dateA === "No Due Date") return -1;
        if (dateB === "No Due Date") return 1;
        return new Date(dateA) - new Date(dateB);
      });

    // Convert back to an object
    return Object.fromEntries(sortedObj);
  }

  toggleModal() {
    this.uiManager.toggleModal();
  }

  populateModalFields(todoId) {
    this.modalTodoId = todoId;
    let todo = this.findTodoById(todoId);
    this.uiManager.populateModalFields(todo);
  }

  createEventListeners() {
    let modalForm = document.getElementById('form_modal').firstElementChild;
    let todoTable = document.querySelector('table');

    document.querySelector("label[for=new_item]").addEventListener('click', (e) => {
      this.toggleModal();
      this.modalTodoId = null;
    });

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

    todoTable.addEventListener('click', async (e) => {
      e.preventDefault();

      const deleteButton = e.target.closest('.delete');
      let id = e.target.closest('tr').getAttribute('data-id');
      if (deleteButton) {
        await this.apiManager.deleteTodo(id);
        this.removeTodoFromTemplateData(id);
      } else if (e.target.tagName === 'LABEL') {
        this.toggleModal();
        this.populateModalFields(id);
      } else {
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
      if (!target) return;

      document.querySelector('.active')?.classList.remove('active');
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
  const todoManager = new TodoManager();
})



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
