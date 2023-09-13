import React from 'react';

import ToggleAll from 'components/Main/ToggleAll/ToggleAll';
import TodoList from 'components/Main/TodoList/TodoList';

const Main = () => {
  return (
    <div className="main">
      <ToggleAll />
      <TodoList />
    </div>
  );
};

export default Main;
