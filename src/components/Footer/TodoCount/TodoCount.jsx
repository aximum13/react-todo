import { useSelector } from 'react-redux';

import { getTodos } from 'selectors/todosSelector';

import styles from './TodoCount.module.sass';
const TodoCount = () => {
  const todos = useSelector(getTodos);

  const getActiveTodosCounter = (todos) =>
    todos.filter((todo) => !todo.isDone).length;

  const taskCounter = getActiveTodosCounter(todos);

  return (
    <span className={styles.TodoCount}>
      <span>{taskCounter}</span> item{taskCounter !== 1 ? 's' : ''} left
    </span>
  );
};

export default TodoCount;
