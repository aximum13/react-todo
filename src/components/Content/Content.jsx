import React from 'react';
import { useSelector } from 'react-redux';

import { isTodos } from 'utils/isTodos';
import { getTodos } from 'selectors/todosSelector';

import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

import styles from './Content.module.sass';

const Content = () => {
  const todos = useSelector(getTodos);

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
