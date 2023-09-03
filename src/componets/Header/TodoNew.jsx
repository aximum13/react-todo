import React, { useState } from "react";

export const TodoNew = ({ create }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addNewTodo = (e) => {
    if (e.target.value.trim() !== "") {
      const newTodo = {
        id: Math.random(),
        done: false,
        title: value.trim(),
      };
      create(newTodo);
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus={true}
        className="new-todo"
        onChange={handleChange}
        onBlur={addNewTodo}
      />
    </div>
  );
};
