import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleAll } from 'actions/actionCreator';
import { getTodos } from 'selectors/todosSelector';

import styles from './ToggleAll.module.sass';

const ToggleAll = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    todos.every((item) => item.isDone === true) && todos.length > 0
      ? setChecked(true)
      : setChecked(false);
  }, [todos]);

  const handleToggleAll = (isDone) => {
    dispatch(toggleAll(isDone));
  };

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
        className={styles.ToggleAll}
        type="checkbox"
      />
      <label className={styles.Label} htmlFor="toggle-all"></label>
    </>
  );
};

export default ToggleAll;
