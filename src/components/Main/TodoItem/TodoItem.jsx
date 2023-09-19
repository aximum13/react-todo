import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, completeTodo, editTodo } from 'actions/actionCreator';

import styles from './TodoItem.module.sass';

const TodoItem = ({ id, text, isDone }) => {
  const dispatch = useDispatch();

  const [viewEdited, setViewEdited] = useState(Boolean);
  const [editText, setEditText] = useState('');

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  const handleDoubleClick = (initialValue) => {
    setEditText(initialValue);
    setViewEdited(true);
  };

  const handleBlur = () => {
    setViewEdited(false);
    let text = editText.trim();
    if (text) handleEditTodo(id, text);
  };

  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <li
      className={classNames(styles.TodoItem, styles.TodoItem, {
        [styles.Completed]: isDone,
        [styles.Editing]: viewEdited,
      })}
    >
      <div className={classNames(styles.ViewItem)}>
        <input
          type="checkbox"
          onClick={() => handleCompleteTodo(id)}
          defaultChecked={isDone}
          className={classNames(styles.Toggle, { hidden: viewEdited })}
        />

        <label
          onDoubleClick={() => handleDoubleClick(text)}
          className={classNames(styles.Label, { hidden: viewEdited })}
        >
          {text}
        </label>

        <button
          onClick={() => handleRemoveTodo(id)}
          className={classNames(styles.Remove, { hidden: viewEdited })}
        ></button>
        <input
          type="text"
          autoFocus={viewEdited}
          onChange={handleEditChange}
          value={editText}
          className={classNames(styles.Edit, { hidden: !viewEdited })}
          onBlur={handleBlur}
          ref={(input) => viewEdited && input && input.focus()}
        />
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  isDone: PropTypes.bool,
};

TodoItem.defaultProps = {
  id: 0,
  text: '',
  isDone: false,
};

export default TodoItem;
