import { useSelector } from 'react-redux';

import { filteredTodos } from 'utils/filteredTodos';
import { getTodos } from 'selectors/todosSelector';
import { getFilters } from 'selectors/filtersSelector';

import TodoItem from 'components/Main/TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector(getTodos);
  const filters = useSelector(getFilters);

  const filteredResults = filteredTodos(todos, filters);

  return (
    <ul className="todo-list">
      {filteredResults.length > 0 &&
        filteredResults.map((todo) => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isDone={todo.isDone}
          />
        ))}
    </ul>
  );
};

export default TodoList;
