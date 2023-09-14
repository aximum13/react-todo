import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addTodo } from 'actions/actionCreator';

import styles from './TodoNew.module.sass';

const TodoNew = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (id, text, isDone) => {
    dispatch(addTodo(id, text, isDone));
  };

  const [state, setState] = useState('');
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

TodoNew.propTypes = {
  onChange: PropTypes.func,
  createTodo: PropTypes.func,
  handleInputChange: PropTypes.func,
  state: PropTypes.string,
};

TodoNew.defaultProps = {
  createTodo: () => {},
  onChange: () => {},
  handleInputChange: () => {},
  state: '',
};

export default TodoNew;
