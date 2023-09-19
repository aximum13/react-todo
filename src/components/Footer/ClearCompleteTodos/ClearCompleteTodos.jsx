import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getTodos } from 'selectors/todosSelector';
import { clearCompleteTodo } from 'actions/actionCreator';

import styles from './ClearCompleteTodos.module.sass';

const ClearCompleteTodos = () => {
  const dispatch = useDispatch();

  const handleClearCompleteTodo = () => {
    dispatch(clearCompleteTodo());
  };

  const todos = useSelector(getTodos);

  const isComplete = todos.some((item) => item.isDone === true);

  return (
    <button
      onClick={handleClearCompleteTodo}
      className={classNames(styles.ClearCompleteTodos, {
        [styles.ClearCompleteTodosHidden]: !isComplete,
      })}
    >
      Clear completed
    </button>
  );
};

export default ClearCompleteTodos;
