import React from 'react';

import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

import { isTodos } from 'utils/isTodos';
import { useSelector } from 'react-redux/';

import styles from './Content.module.sass';

const Content = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      {isTodos(todos) && (
        <div className={styles.Content}>
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Content;
