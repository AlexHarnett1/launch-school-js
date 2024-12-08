class TodoManager {
  // Return all todo objects
  static getAllTodos(todoList) {
    return todoList.getAllTodos();
  }

  // Return all completed todo objects
  static getAllCompletedTodos(todoList) {
    let todos = this.getAllTodos(todoList);
    if (!todos) return [];

    return todos.filter(todo => todo.completed);
  }

  // Return all todo objects within a given month-year combination
  static getAllTodosWithinMonthYear(todoList, month, year) {
    let todos = this.getAllTodos(todoList);
    if (!todos) return [];

    return todos.filter(todo => todo.isWithinMonthYear(month, year));
  }

  // Return all completed todo objects within a given month - year combination
  static getAllCompletedTodosWithinMonthYear(todoList, month, year) {
    let todos = this.getAllCompletedTodos(todoList);
    if (!todos) return [];
    return todos.filter(todo => todo.isWithinMonthYear(month, year));
  }
}

class TodoList {
  #todos;

  constructor(todoSet) {
    this.#todos = [];
    this.initializeTodos(todoSet);
  }

  // Adds a todo object to the collection
  addTodo(todoObj) {
    this.#todos.push(todoObj);
  }

  // Deletes a todo object from the collection
  deleteTodo(id) {
    let indexOfTodo = this.#getIndexOfTodo(id);
    if (indexOfTodo === -1) return null;

    let todo = this.#todos.splice(indexOfTodo, 1);
    return todo;
  }

  // Initializes the collection with todo objects
  initializeTodos(todoSet) {
    for (let i = 0; i < todoSet.length; i += 1) {
      this.addTodo(new Todo(todoSet[i]));
    }
  }

  // Updates existing properties of a specific todo object
  updateTodo(id, todoObj) {
    let todo = this.#getTodoInternal(id);
    if (!todo) return null;

    for (let key in todoObj) {
      if (key === 'id') continue; 
      if (key === 'title' && todoObj[key] === '') continue;

      todo[key] = todoObj[key];
    }
    return this.getTodo(id);
  }

  // Returns a specified todo object based on its id property
  getTodo(id) {
    let todo = this.getAllTodos().find(todo => todo.id === id);
    
    return todo ? todo : null;
  }

  // Returns a deep copy of the todo list.
  getAllTodos() {
    return this.#todos.map(todo => this.#cloneTodo(todo.id));
  }

  // Marks todo as completed.
  markTodoCompleted(id) {
    let todo = this.#getTodoInternal(id);
    if (!todo) return null
    todo.completed = true;
    return this.getTodo(id);
  }

  // Get index of a Todo within the the todos array.
  #getIndexOfTodo(id) {
    for (let i = 0; i < this.#todos.length; i += 1) {
      if (this.#todos[i].id === id) return i;
    }
    return -1;
  }

  // To get object by reference, in order to mutate Todo Items.
  #getTodoInternal(id) {
    return this.#todos.find(todo => todo.id === id);
  }
  
  // Creates a clone of todo that doesn't reference the real todo.
  #cloneTodo(id) {
    let todo = this.#getTodoInternal(id);

    let clone = Object.create(Object.getPrototypeOf(todo));
    Object.assign(clone, todo);

    return clone;
  }
}

class Todo {
  constructor(todoObj) {
    if (!todoObj.title) {
      throw new Error("Title is required to create a Todo.");
    }
    this.id = generateUniqueId();
    this.title = todoObj.title;
    this.completed = false;
    this.month = todoObj.month || '';
    this.year = todoObj.year || '';
    this.description = todoObj.description || '';
  }

  isWithinMonthYear(month, year) {
    if (!month || !year || !this.month || !this.year) return false;
    
    return String(month) === this.month && String(year) === this.year;
  }
}

const generateUniqueId = (function () {
  let currentId = 0;
  return function () {
    return ++currentId;
  };
})();
