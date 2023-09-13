import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const ToggleAll = ({ toggleAll, todos }) => {
  const [checked, setChecked] = useState(false);

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
        onClick={toggleAll}
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
  toggleAll: PropTypes.func,
  todos: PropTypes.array,
};

ToggleAll.defaultProps = {
  toggleAll: () => {},
  todos: [],
};

export default ToggleAll;
