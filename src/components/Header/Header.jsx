import React from 'react';

import TodoNew from 'components/Header/TodoNew/TodoNew';
import ToggleAll from 'components/Header/ToggleAll/ToggleAll';

import { isTodos } from 'utils/isTodos';
import { useSelector } from 'react-redux/';

import styles from './Header.module.sass';

const Header = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className={styles.Header}>
      {isTodos(todos) && <ToggleAll />}
      <TodoNew />
    </div>
  );
};

export default Header;
