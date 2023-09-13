import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { filteredTodos } from 'utils/filteredTodos';

import TodoItem from 'components/Main/TodoItem/TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

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

TodoList.propTypes = {
  list: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  edit: PropTypes.func,
};

TodoList.defaultProps = {
  list: [],
  removeTask: () => {},
  completeTask: () => {},
  edit: () => {},
};

export default TodoList;
