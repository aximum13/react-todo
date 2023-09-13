import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAll } from 'actions/actionCreator';

const ToggleAll = () => {
  const todos = useSelector((state) => state.todos);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleToggleAll = (isDone) => {
    dispatch(toggleAll(isDone));
  };

  useEffect(() => {
    todos.every((item) => item.isDone === true) && todos.length > 0
      ? setChecked(true)
      : setChecked(false);
  }, [todos]);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <input
        id="toggle-all"
        onClick={handleToggleAll}
        onChange={handleChange}
        checked={checked}
        className={'toggle-all'}
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

ToggleAll.propTypes = {
  handleToggleAll: PropTypes.func,
  todos: PropTypes.array,
};

ToggleAll.defaultProps = {
  handleToggleAll: () => {},
  todos: [],
};

export default ToggleAll;
