import React from 'react';

import Title from 'components/Header/Title/Title';
import TodoNew from 'components/Header/TodoNew/TodoNew';

const Header = () => {
  return (
    <div className="header">
      <Title title={'todos'} />
      <TodoNew />
    </div>
  );
};

export default Header;
