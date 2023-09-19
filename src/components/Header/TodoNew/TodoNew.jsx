import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'actions/actionCreator';

import styles from './TodoNew.module.sass';

const TodoNew = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState('');
  
  const handleAddTodo = (id, text, isDone) => {
    dispatch(addTodo(id, text, isDone));
  };

  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  const createTodo = (event) => {
    const text = state.trim();
    const enterKeyCode = 13;

    if (text && event.keyCode === enterKeyCode) {
      handleAddTodo(new Date().getTime(), text, false);
      setState('');
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus={true}
        className={styles.TodoNew}
        onChange={handleInputChange}
        onKeyDown={createTodo}
        value={state}
      />
    </>
  );
};

export default TodoNew;
