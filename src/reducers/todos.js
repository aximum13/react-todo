import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETE_TODOS,
  EDIT_TODO,
} from 'constans';
import { load } from 'redux-localstorage-simple';

let TODOS = load({ namespace: 'todoList' });

if (!TODOS || !TODOS.todos || !TODOS.todos.length) {
  TODOS = {
    todos: [],
  };
}

const todos = (state = TODOS.todos, { id, text, isDone, type }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          text,
          isDone,
        },
      ];

    case REMOVE_TODO:
      return [...state].filter((todo) => todo.id !== id);

    case COMPLETE_TODO:
      return [...state].map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });

    case TOGGLE_ALL_TODOS: {
      const areAllCompleted = state.every((todo) => todo.isDone);
      return state.map((todo) => {
        return { ...todo, isDone: !areAllCompleted };
      });
    }

    case CLEAR_COMPLETE_TODOS:
      return [...state].filter((todo) => todo.isDone !== true);

    case EDIT_TODO: {
      return state.map((todo) => {
        if (todo.id === id) {
          todo.text = text;
        }
        return todo;
      });
    }

    default:
      return state;
  }
};

export default todos;
