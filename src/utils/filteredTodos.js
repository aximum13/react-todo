export const filteredTodos = (todos, activeFilter) => {
  switch (activeFilter) {
    case 'complete':
      return todos.filter((todo) => todo.isDone);

    case 'active':
      return todos.filter((todo) => !todo.isDone);

    default:
      return todos;
  }
};
