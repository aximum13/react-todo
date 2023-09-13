import React from 'react';

import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

import { isTodos } from 'utils/isTodos';
import { useSelector } from 'react-redux/';

const Content = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {isTodos(todos) && (
        <>
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};

export default Content;
