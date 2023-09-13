import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';

const TodoCount = () => {
  const todos = useSelector((state) => state.todos);

  const getActiveTodosCounter = (todos) =>
    todos.filter((todo) => !todo.isDone).length;

  const taskCounter = getActiveTodosCounter(todos);
  return (
    <span className="todo-count">
      <strong>{taskCounter}</strong> item{taskCounter !== 1 ? 's' : ''} left
    </span>
  );
};

TodoCount.propTypes = {
  taskCounter: PropTypes.number,
};

TodoCount.defaultProps = {
  taskCounter: 0,
};

export default TodoCount;
