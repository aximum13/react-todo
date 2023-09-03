import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { TodoNew } from "./componets/Header/TodoNew";
import { Title } from "./componets/Header/Title";
import { TodoList } from "./componets/List/TodoList";
import { Filter } from "./componets/Footer/Filter";

import "./styles/style.css";

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const [filtered, setFiltered] = useState(items);
  let [checked, setChecked] = useState(true);

  if (items.every((item) => item.done === true)) {
    checked = true;
  } else {
    checked = false;
  }

  const createTodo = (newTodo) => {
    setItems([...items, newTodo]);
    setItem("");
    setFiltered([...filtered, newTodo]);
  };

  const updateStateTodo = (todo) => {
    const updateStateTodo = items.map((item) =>
      item.id === todo.id ? { ...item, done: !item.done } : { ...item }
    );

    setItems(updateStateTodo);
    setFiltered(updateStateTodo);
  };

  const updateTodo = (todos) => {
    setItems(todos);
    setFiltered(todos);
  };

  const filterTodos = (state) => {
    if (state === "all") setFiltered(items);
    else {
      let newTodos = [...items].filter((item) => item.done === state);
      setFiltered(newTodos);
    }
  };

  const removeTodo = (todo) => {
    const updateItems = filtered.filter((item) => item.id !== todo.id);
    setFiltered(updateItems);
    setItems(updateItems);
  };

  const clearCompleteTodos = () => {
    const updateItems = filtered.filter((item) => item.done === false);
    setFiltered(updateItems);
    setItems(updateItems);
  };

  const allTodosDone = () => {
    let updatedItems = items.map((item) => ({
      ...item,
      done: !checked,
    }));

    setChecked(!checked);

    if (updatedItems.every((item) => item.done === true)) {
      setChecked(!checked);
    }

    setItems(updatedItems);
    setFiltered(updatedItems);
  };

  const activeTodos = () => {
    let countTodos = items.filter((item) => item.done === false);
    return countTodos.length;
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="todoapp">
      <div className="header">
        <Title title={"todos"} />
        <TodoNew create={createTodo} />
      </div>
      <div className="main">
        <input
          id="toggle-all"
          onClick={allTodosDone}
          onChange={handleChange}
          checked={checked}
          className={classNames(
            "toggle-all",
            items.length === 0 ? "hidden" : ""
          )}
          type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          remove={removeTodo}
          list={filtered}
          updateState={updateStateTodo}
          edit={updateTodo}
        />
      </div>
      <div className={classNames("footer", items.length === 0 ? "hidden" : "")}>
        <span className="todo-count">
          <strong>{activeTodos()}</strong> item left
        </span>
        <Filter todoFilter={filterTodos} />
        <button onClick={clearCompleteTodos} className="clear-completed">
          Clear completed
        </button>
      </div>
    </div>
  );
};

export default App;
