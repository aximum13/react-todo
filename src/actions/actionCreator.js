import {
  ADD_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  CHANGE_FILTER,
  TOGGLE_ALL_TODOS,
  CLEAR_COMPLETE_TODOS,
  EDIT_TODO,
} from 'constans';

export const addTodo = (id, text, isDone) => ({
  type: ADD_TODO,
  id,
  text,
  isDone,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id,
});

export const changeFilter = (activeFilter) => ({
  type: CHANGE_FILTER,
  activeFilter,
});

export const toggleAll = (isDone) => ({
  type: TOGGLE_ALL_TODOS,
  isDone,
});

export const clearCompleteTodo = (isDone) => ({
  type: CLEAR_COMPLETE_TODOS,
  isDone,
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text,
});
