import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoNew = ({ create }) => {
  const [state, setState] = useState('');
  const handleInputChange = (event) => {
    setState(event.target.value);
  };

  const createTodo = (event) => {
    const { value } = event.target;
    let text = value.trim();

    if (text) {
      create(new Date().getTime(), text, false);
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
