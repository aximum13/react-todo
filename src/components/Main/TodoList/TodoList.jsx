import PropTypes from 'prop-types';

import TodoItem from 'components/Main/TodoItem/TodoItem';

const TodoList = ({ list, remove, edit, updateState }) => {
  return (
    <ul className="todo-list">
      {list.length > 0 &&
        list.map((todo) => (
          <TodoItem
            updateState={updateState}
            remove={remove}
            id={todo.id}
            key={todo.id}
            text={todo.text}
            isDone={todo.isDone}
            edit={edit}
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
