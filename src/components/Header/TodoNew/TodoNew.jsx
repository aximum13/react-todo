import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addTodo } from 'actions/actionCreator';

const TodoNew = () => {
  const dispatch = useDispatch();

  const handleAddTodo = (id, text, isDone) => {
    dispatch(addTodo(id, text, isDone));
  };

  const [state, setState] = useState('');
  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  const createTodo = () => {
    const text = state.trim();

    if (text) {
      handleAddTodo(new Date().getTime(), text, false);
      setState('');
    }
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus={true}
        className="new-todo"
        onChange={handleInputChange}
        onBlur={createTodo}
        value={state}
      />
    </div>
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
