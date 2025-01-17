export class Todo {
  constructor(todoJson) {
    this.setAllTodoVariables(todoJson);
  }

  setAllTodoVariables(todoJson) {
    this.id = todoJson.id;
    this.title = todoJson.title;
    this.day = todoJson.day;
    this.month = todoJson.month;
    this.year = todoJson.year;
    this.description = todoJson.description;
    this.completed = todoJson.completed;
    this.due_date = this.formatDueDate();
  }

  formatDueDate() {
    return this.month && this.year ? `${this.month}/${this.year.slice(2)}` : "No Due Date";
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  static sanitizeFormData(todo) {
    if (todo.year.length !== 4 || isNaN(Number(todo.year))) {
      todo.year = '';
    }
    if (todo.day.length !== 2 || isNaN(Number(todo.day))) {
      todo.day = '';
    }
    if (todo.month.length !== 2 || isNaN(Number(todo.month))) {
      todo.month = '';
    }
    return todo;
  }

}