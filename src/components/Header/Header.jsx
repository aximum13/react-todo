import React from 'react';
import { useSelector } from 'react-redux/';

import { getTodos } from 'selectors/todosSelector';
import { isTodos } from 'utils/isTodos';

import TodoNew from 'components/Header/TodoNew/TodoNew';
import ToggleAll from 'components/Header/ToggleAll/ToggleAll';

import styles from './Header.module.sass';

const Header = () => {
  const todos = useSelector(getTodos);
  return (
    <div className={styles.Header}>
      {isTodos(todos) && <ToggleAll />}
      <TodoNew />
    </div>
  );
};

export default Header;
