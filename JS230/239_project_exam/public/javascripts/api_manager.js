export class APIManager {

  async getAllTodos() {
    let response = await fetch('api/todos/');
    if (!response.ok) {
      throw new Error(`Failed to fetch all todos: ${response.statusText}`);
    }
    return response.json();
  }

  async createTodo(todoObject) {

    let response = await fetch('api/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoObject)
    });

    if (!response.ok) {
      throw new Error(`Failed to create a new todo: ${response.statusText}`);
    }

    return response.json();
  }

  async updateTodo(todoObject, id) {
    let response = await fetch(`api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoObject)
    });

    if (!response.ok) {
      throw new Error(`Failed to update a new todo: ${response.statusText}`);
    }

    return response.json();
  }

  async toggleTodoComplete(todo) {
    let response = await fetch(`api/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: todo.title, day: todo.day, month: todo.month, year: todo.year,
        completed: todo.completed, description: todo.description
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to mark todo completed: ${response.statusText}`);
    }

    return response.json();

  }

  async deleteTodo(id) {
    let response = await fetch(`api/todos/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`Failed to create a new todo: ${response.statusText}`);
    }

    return response;
  }

}