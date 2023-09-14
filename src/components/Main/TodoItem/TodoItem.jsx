import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, completeTodo, editTodo } from 'actions/actionCreator';

import styles from './TodoItem.module.sass';

const TodoItem = ({ id, text, isDone }) => {
  // eslint-disable-next-line
  const [checked, setChecked] = useState();
  const [viewEdited, setViewEdited] = useState(Boolean);
  const [editText, setEditText] = useState('');

  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleEditTodo = (id, newText) => {
    dispatch(editTodo(id, newText));
  };

  const handleChange = () => {
    setChecked(!isDone);
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
      key={id}
      className={classNames(
        styles.TodoItem,
        isDone ? styles.Completed : '',
        viewEdited ? styles.Editing : ''
      )}
    >
      <div className={classNames(styles.ViewItem)}>
        <input
          type="checkbox"
          onClick={() => handleCompleteTodo(id)}
          checked={isDone}
          className={classNames(styles.Toggle, viewEdited ? 'hidden' : '')}
          onChange={handleChange}
        />

        <label
          onDoubleClick={() => handleDoubleClick(text)}
          className={classNames(styles.Label, viewEdited ? 'hidden' : '')}
        >
          {text}
        </label>

        <button
          onClick={() => handleRemoveTodo(id)}
          className={classNames(styles.Remove, viewEdited ? 'hidden' : '')}
        ></button>
        <input
          type="text"
          autoFocus={viewEdited}
          onChange={handleEditChange}
          value={editText}
          className={classNames(styles.Edit, !viewEdited ? 'hidden' : '')}
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
  remove: PropTypes.func,
  updateState: PropTypes.func,
  edit: PropTypes.func,
};

TodoItem.defaultProps = {
  id: 0,
  text: '',
  isDone: false,
  remove: () => {},
  updateState: () => {},
  edit: () => {},
};

export default TodoItem;
