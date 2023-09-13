import React from 'react';

import Filter from 'components/Footer/Filter/Filter';
import TodoCount from 'components/Footer/TodoCount/TodoCount';
import ClearCompleteTodos from 'components/Footer/ClearCompleteTodos/ClearCompleteTodos';

const Footer = () => {
  return (
    <div className={'footer'}>
      <TodoCount />
      <Filter />
      <ClearCompleteTodos />
    </div>
  );
};

export default Footer;
