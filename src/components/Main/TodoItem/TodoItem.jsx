import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, completeTodo, editTodo } from 'actions/actionCreator';

const TodoItem = ({ id, text, isDone }) => {
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
    handleEditTodo(id, text);
  };

  const handleEditChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <li
      key={id}
      className={classNames(
        'todo-item',
        isDone ? 'completed' : '',
        viewEdited ? 'editing' : ''
      )}
    >
      <div className="view">
        <input
          type="checkbox"
          onClick={() => handleCompleteTodo(id)}
          checked={isDone}
          className="toggle"
          onChange={handleChange}
        />
        {!viewEdited ? (
          <label
            onDoubleClick={() => handleDoubleClick(text)}
            className={classNames('todo-text')}
          >
            {text}
          </label>
        ) : null}
        <button
          onClick={() => handleRemoveTodo(id)}
          className="destroy"
        ></button>
      </div>
      {viewEdited ? (
        <input
          type="text"
          autoFocus={true}
          onChange={handleEditChange}
          value={editText}
          className="edit"
          onBlur={handleBlur}
        />
      ) : null}
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
