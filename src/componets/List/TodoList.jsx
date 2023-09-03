import classNames from "classnames";
import React, { useState } from "react";

export const TodoList = ({ list, remove, edit, updateState }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [checked, setChecked] = useState(Boolean);

  const handleDoubleClick = (itemId, initialValue) => {
    setItemId(itemId);
    setInputValue(initialValue);
    setInputVisible(true);
  };

  const handleBlur = () => {
    setInputVisible(false);

    const todos = list.map((item) => {
      if (item.id === itemId) {
        item.title = inputValue;
      }

      return item;
    });
    edit(todos);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateDone = (todo) => {
    updateState(todo);
    if (todo.done === checked && todo.id === itemId) todo.done = !todo.done;
  };

  const checkTodo = () => {
    setChecked(!checked);
  };

  return (
    <ul className="todo-list">
      {list.length > 0 &&
        list.map((item) => (
          <li
            key={item.id}
            className={classNames(
              "todo-item",
              inputVisible && itemId === item.id ? "editing" : ""
            )}
          >
            <div className="view">
              <input
                type="checkbox"
                onClick={() => updateDone(item)}
                onChange={checkTodo}
                checked={item.done}
                className="toggle"
              />
              {!inputVisible || itemId !== item.id ? (
                <label
                  onDoubleClick={() => handleDoubleClick(item.id, item.title)}
                  className="todo-text"
                >
                  {item.title}
                </label>
              ) : null}
              <button onClick={() => remove(item)} className="destroy"></button>
            </div>
            {inputVisible && itemId === item.id ? (
              <input
                type="text"
                autoFocus={true}
                onChange={handleChange}
                value={inputValue}
                className="edit"
                onBlur={handleBlur}
              />
            ) : null}
          </li>
        ))}
    </ul>
  );
};
