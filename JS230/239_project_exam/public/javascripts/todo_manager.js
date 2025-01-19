import { UIManager } from "./ui_manager.js";
import { APIManager } from "./api_manager.js";
import { Todo } from "./todo.js";

class TodoManager {
  constructor() {
    this.apiManager = new APIManager();
    this.todos = [];
    this.templateData = {};
    this.modalTodoId = null;

    // Store currently selected group
    this.currentGroupTitle = "All Todos";
    this.isCurrentGroupCompleted = false;
    this.uiManager = new UIManager(this.templateData);

    this.init();
  }

  async init() {
    await this.loadTodos();
    this.createEventListeners();
  }

  async loadTodos() {
    try {
      const apiTodos = await this.apiManager.getAllTodos();
      this.todos = apiTodos.map(todo => new Todo(todo));
      this.updateTemplateData();
      this.setTemplateGroup(false, "All Todos");
      this.uiManager.renderMainTemplate(this.templateData);
    } catch (error) {
      console.error(error);
      alert("Failed to load todos. Please try again later.");
    }
    
  }

  updateTemplateData() {
    this.sortTodos();
    let done = this.todos.filter(todo => todo.completed);
    let todos_by_date = this.groupTodosByDate(this.todos);
    let done_todos_by_date = this.groupTodosByDate(done);
    Object.assign(this.templateData, { todos: this.todos, done, todos_by_date, done_todos_by_date });
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

    let sideBarElement = document.getElementById('all_header');
    this.setActiveSideBarElement(sideBarElement);
  }

  removeTodoFromTemplateData(todoId) {
    this.todos = this.todos.filter(todo => todo.id !== Number(todoId));
    this.refreshTemplateGroup();
  }

  updateTodoTemplateData(todoJson) {
    let todo = this.findTodoById(todoJson.id);
    todo.setAllTodoVariables(todoJson);
    this.refreshTemplateGroup();
  }

  updateUI() {
    this.uiManager.updateTitleUI(this.templateData);
    this.uiManager.updateItemsUI(this.templateData);
    this.uiManager.updateSideBarUI(this.isCurrentGroupCompleted, this.templateData);
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
    this.setupModalListeners();
    this.setupTodoTableListeners();
    this.setupSideBarListeners();
  }

  setupModalListeners() {
    let modalForm = document.getElementById('form_modal').firstElementChild;

    // Open modal on click "Add new modal"
    document.querySelector("label[for=new_item]").addEventListener('click', (e) => {
      this.toggleModal();
      this.modalTodoId = null;
    });

    // Close modal when clicking space outside of modal.
    document.getElementById('modal_layer').addEventListener('click', () => this.toggleModal());

    // Submit modal form
    modalForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      let todoFormData = Object.fromEntries(new FormData(e.target).entries());

      if (todoFormData.title.trim().length < 3) {
        alert('The title must be at least 3 characters.');
        return;
      }
      try {
        todoFormData = Todo.sanitizeFormData(todoFormData);
        if (this.modalTodoId) {
          let todoJson = await this.apiManager.updateTodo(todoFormData, this.modalTodoId);
          this.updateTodoTemplateData(todoJson);
        } else {
          let todoJson = await this.apiManager.createTodo(todoFormData);
          this.addTodoToTemplateData(todoJson);
        }
      } catch (error) {
        console.error("Error submitting todo:", error);
        alert("Failed to save the todo. Please try again.");
      }
      this.toggleModal();
    });

    // Mark as complete selected 
    modalForm.querySelector("button[name='complete']").addEventListener('click', async (e) => {
      e.preventDefault();
      if (this.modalTodoId) {
        let todo = this.findTodoById(this.modalTodoId);
        if (!todo.completed) {
          todo.toggleCompleted();
          try {
            await this.apiManager.toggleTodoComplete(todo);
          } catch (error) {
            console.log(error);
          }
        }
        this.refreshTemplateGroup();
        this.toggleModal();
      } else {
        alert('Cannot mark as complete as item has not been created yet!');
      }
    });

  }

  setupTodoTableListeners() {
    let todoTable = document.querySelector('table');

    // Handle todos being clicked(deletion, open modal, mark completed)
    todoTable.addEventListener('click', async (e) => {
      e.preventDefault();

      const deleteButton = e.target.closest('.delete');
      let id = e.target.closest('tr').getAttribute('data-id');
      if (deleteButton) {                        // Delete todo
        await this.deleteTodo(id);
      } else if (e.target.tagName === 'LABEL') { // Open modal
        this.toggleModal();
        this.populateModalFields(id);
      } else {                                   // Toggle completion
        try {
          let todo = this.findTodoById(id);
          todo.toggleCompleted();
          await this.apiManager.toggleTodoComplete(todo);
          this.refreshTemplateGroup();
        } catch (error) {
          console.error("Error toggling todo completion:", error);
          alert("Failed to update the todo status. Please try again.");
        }
      }
    });

  }

  async deleteTodo(id) {
    try {
      await this.apiManager.deleteTodo(id);
      this.removeTodoFromTemplateData(id);
    } catch (error) {
      console.error("Error deleting todo:", error);
      alert("Failed to delete the todo. Please try again.");
    }
  }

  setupSideBarListeners() {
    let sidebar = document.getElementById('sidebar');

    // Handle sidebar click events (Changing Active sidebar element)
    sidebar.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target.closest('[data-title]');
      if (!target) return;

      this.setActiveSideBarElement(target);
    });
  }

  setActiveSideBarElement(target) {
    document.querySelector('.active')?.classList.remove('active');
    target.classList.add('active');

    const isCompleted = target.closest('#completed_items') !== null;
    this.setTemplateGroup(isCompleted, target.getAttribute('data-title'));
    this.updateUI();
  }

  setTemplateGroup(isCompleted, date) {
    this.currentGroupTitle = date;
    this.isCurrentGroupCompleted = isCompleted;

    let todos;
    if (isCompleted) {
      todos = date === 'Completed' ? this.templateData.done : this.templateData.done_todos_by_date[date];
    } else {
      todos = date === 'All Todos' ? this.todos : this.templateData.todos_by_date[date]
    }

    this.templateData.current_section = { title: date, data: todos ? todos.length : 0 };
    this.templateData.selected = todos || {};
  }

  refreshTemplateGroup() {
    this.updateTemplateData();
    this.setTemplateGroup(this.isCurrentGroupCompleted, this.currentGroupTitle);
    this.updateUI();
  }

  findTodoById(todoId) {
    return this.todos.find(todo => todo.id === Number(todoId));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const todoManager = new TodoManager();
});
