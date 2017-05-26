export const getAllTodos = (todos) => {
  let allTodos = [];
  todosObject.allIds.map(id => allTodos.push(todosObject[id]));
  return allTodos;
}

export const getActiveTodos = (todos) => {
  let activeTodos = [];
  todos.allIds.map(id => { if (todos[id].active) activeTodos.push(todos[id]) });
  return activeTodos;
}

export const getFinishedTodos = (todos) => {
  let finishedTodos = [];
  todos.allIds.map(id => { if (!todos[id].active) finishedTodos.push(todos[id]) });
  return finishedTodos;
}
