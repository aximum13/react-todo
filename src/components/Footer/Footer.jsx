import React from 'react';

import Filter from 'components/Footer/Filter/Filter';
import TodoCount from 'components/Footer/TodoCount/TodoCount';
import ClearCompleteTodos from 'components/Footer/ClearCompleteTodos/ClearCompleteTodos';

import styles from './Footer.module.sass';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <TodoCount />
      <Filter />
      <ClearCompleteTodos />
    </div>
  );
};

export default Footer;
