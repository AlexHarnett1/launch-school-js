var $ol = document.querySelector("ol");

function outputResult(message) {
  var $li = document.createElement("li");
  $li.innerText = message;
  $ol.appendChild($li);
  return $li;
}

function test(message, assertion) {
  var $msg = outputResult(message),
    passed = false;

  try {
    passed = assertion();
  }
  catch (e) {
    passed = false;
  }
  $msg.setAttribute("class", passed ? "pass" : "fail");
}

let todoTestData1 = {
  title: 'Buy Milk',
  month: '1',
  year: '2017',
  description: 'Milk for baby',
};

let todoTestData2 = {
  title: 'Buy Apples',
  month: '',
  year: '2017',
  description: 'An apple a day keeps the doctor away',
};

let todoTestData3 = {
  title: 'Buy chocolate',
  month: '1',
  year: '',
  description: 'For the cheat day',
};

let todoTestData4 = {
  title: 'Buy Veggies',
  month: '',
  year: '',
  description: 'For the daily fiber needs',
};

// ---------- Todo tests ------------

test("Create Todo", function () {
  let todo = new Todo(todoTestData1);
  return (todo.title === 'Buy Milk' && todo.month === '1' && todo.year === '2017' &&
    todo.description === 'Milk for baby');
});

test("Create without title throws error", function () {
  try {
    let todo = new Todo({});
    return false;
  } catch (error) {
    return error.message === "Title is required to create a Todo.";
  }
});

test("Create with title and nothing else works", function () {
  let todo = new Todo({ title: 'Test' });
  return (todo.title === 'Test' && todo.id !== -1)
});

test("Create with title and invalid names won't keep them", function () {
  let todoObj = {
    title: 'Buy Stuff',
    monthse: '3',
    yearew: '1343',
    descriptionqw: 'For the daily fiber needs',
  };
  let todo = new Todo(todoObj);
  return !(Object.keys(todo).includes('monthse'));
});


test("Todos id iterates", function () {
  let todo = new Todo(todoTestData1);
  let todo2 = new Todo(todoTestData2);

  return todo2.id === (todo.id + 1);
});

test("Todos isWithinMonthYear true", function () {
  let todo = new Todo(todoTestData1);
  
  return todo.isWithinMonthYear('1', '2017');
});

test("Todos isWithinMonthYear true with Numbers", function () {
  let todo = new Todo(todoTestData1);

  return todo.isWithinMonthYear(1, 2017)
});

test("Todos isWithinMonthYear false", function () {
  let todo = new Todo(todoTestData1);

  return !todo.isWithinMonthYear('2', '2017') && !todo.isWithinMonthYear('1', '2018');
});

test("Todos isWithinMonthYear without Year property returns false", function () {
  let todo = new Todo(todoTestData2);

  return !todo.isWithinMonthYear('2', '2017');
});

test("Todos isWithinMonthYear without Month property returns false", function () {
  let todo = new Todo(todoTestData3);

  return !todo.isWithinMonthYear('1', '2017');
});

test("Todos isWithinMonthYear false with no input", function () {
  let todo = new Todo(todoTestData1);

  return !todo.isWithinMonthYear() && !todo.isWithinMonthYear('1');
});

// ---------- TodoList tests ------------

test("Initialize TodoList works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  return todoTestList.getAllTodos().length === 4;
});

test("Initialize Empty TodoList works", function () {
  let todoTestList = new TodoList([]);

  return todoTestList.getAllTodos().length === 0;
});

test("Add Todo method works", function () {
  let todoTestList = new TodoList([]);
  todoTestList.addTodo(todoTestData1)

  return todoTestList.getAllTodos().length === 1;
});

test("Get Todo works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);
  let allTodos = todoTestList.getAllTodos();

  let todo = todoTestList.getTodo(allTodos[0].id);

  return todo.id === allTodos[0].id && todo.year === allTodos[0].year
    && todo.month === allTodos[0].month && todo.title === allTodos[0].title;
});

test("Get Todo returns null with invalid id", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let todo = todoTestList.getTodo(-1);

  return todo === null;
});

test("Can't mutate Todo through getTodo", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);
  let allTodos = todoTestList.getAllTodos();

  let id = allTodos[0].id
  let mutatedTodo = todoTestList.getTodo(id);
  mutatedTodo.year = '8989';

  return mutatedTodo.year !== todoTestList.getTodo(id).year;
});

test("Can't mutate todo by changing a property of getAllTodos element", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);
  let allTodos = todoTestList.getAllTodos();

  allTodos[0].year = '8989';
  return allTodos[0] !== '8989'
});

test("Can't mutate Todo by changing getAllTodos element", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  allTodos[0] = '';

  return todoTestList.getAllTodos()[0] !== '';
});

test("Delete todo deletes", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  todoTestList.deleteTodo(allTodos[0].id);
  return todoTestList.getAllTodos().length === 3;
});

test("Todo no longer exists after deletion", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  let todoId = allTodos[0].id;
  todoTestList.deleteTodo(todoId);

  return todoTestList.getTodo(todoId) === null;
});

test("Delete Todo returns null with invalid id", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  return todoTestList.deleteTodo(-1) === null;
});

test("Update Todo successful", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  let todoId = allTodos[0].id;

  todoTestList.updateTodo(todoId, {
    title: 'Hi',
    month: '6',
    year: '1890',
    description: 'Goodbye',
  });

  let todo = todoTestList.getTodo(todoId);

  return todo.title === 'Hi' && todo.month === '6' && todo.year === '1890' && todo.description === 'Goodbye';
});

test("Update Todo returns null with invalid id", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let todoObj = {
    title: 'Hi',
    month: '6',
    year: '1890',
    description: 'Goodbye',
  };  

  return todoTestList.updateTodo(-1, todoObj) === null;
});

test("Ensure id can't be changed through Update function", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  let todoId = allTodos[0].id;

  todoTestList.updateTodo(todoId, {
    id: -1
  });

  return todoTestList.getTodo(todoId) !== null && todoTestList.getTodo(-1) === null;
});

test("Mark Todo completed", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = todoTestList.getAllTodos();
  let todoId = allTodos[0].id;
  todoTestList.markTodoCompleted(todoId);

  return todoTestList.getTodo(todoId).completed;
});

test("Mark Todo completed returns null with invalid id", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);
  
  return todoTestList.markTodoCompleted(-1) === null;
});

// --------------- Todo Manager ---------------

test("TodoManager getAllTodos works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = TodoManager.getAllTodos(todoTestList);

  return allTodos.length === 4;
});

test("TodoManager getAllCompletedTodos works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = TodoManager.getAllTodos(todoTestList);
  todoTestList.markTodoCompleted(allTodos[0].id);
  todoTestList.markTodoCompleted(allTodos[1].id);

  return TodoManager.getAllCompletedTodos(todoTestList).length === 2;
});

test("TodoManager getAllTodosWithinMonthYear works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  return TodoManager.getAllTodosWithinMonthYear(todoTestList, '1', '2017').length === 1;
});

test("TodoManager getAllCompletedTodosWithinMonthYear works", function () {
  let todoTestSet = [todoTestData1, todoTestData2, todoTestData3, todoTestData4];
  let todoTestList = new TodoList(todoTestSet);

  let allTodos = TodoManager.getAllTodos(todoTestList);
  todoTestList.markTodoCompleted(allTodos[0].id);
  todoTestList.markTodoCompleted(allTodos[1].id);

  return TodoManager.getAllCompletedTodosWithinMonthYear(todoTestList, '1', '2017').length === 1;
});
