import classNames from 'classnames';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ updateState, remove, id, text, isDone, edit }) => {
  const [checked, setChecked] = useState();
  const [viewEdited, setViewEdited] = useState(Boolean);
  const [editText, setEditText] = useState('');

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
    edit(id, text);
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
          onClick={() => updateState(id)}
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
        <button onClick={() => remove(id)} className="destroy"></button>
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
