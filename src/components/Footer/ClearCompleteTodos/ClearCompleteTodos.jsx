import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/';

import { clearCompleteTodo } from 'actions/actionCreator';

import styles from './ClearCompleteTodos.module.sass';

const ClearCompleteTodos = () => {
  const dispatch = useDispatch();

  const handleClearCompleteTodo = () => {
    dispatch(clearCompleteTodo());
  };

  const todos = useSelector((state) => state.todos);
  const isComplete = todos.some((item) => item.isDone === true);

  return (
    <button
      onClick={handleClearCompleteTodo}
      className={classNames(
        styles.ClearCompleteTodos,
        !isComplete ? styles.ClearCompleteTodosHidden : ''
      )}
    >
      Clear completed
    </button>
  );
};

ClearCompleteTodos.propTypes = {
  handleClearCompleteTodo: PropTypes.func,
};

export default ClearCompleteTodos;
