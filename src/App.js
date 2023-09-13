import classNames from 'classnames';

import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  completeTodo,
  changeFilter,
  toggleAll,
  clearCompleteTodo,
  editTodo,
} from 'actions/actionCreator';

import TodoNew from './components/Header/TodoNew';
import Title from './components/Header/Title';
import TodoList from './components/Main/TodoList/TodoList';
import Filter from './components/Footer/Filter';
import TodoCount from 'components/Footer/TodoCount';
import ClearCompleteTodos from 'components/Footer/ClearCompleteTodos';

import './styles/style.css';
import ToggleAll from 'components/Main/ToggleAll/ToggleAll';

const App = ({
  todos,
  addTodo,
  removeTodo,
  completeTodo,
  changeFilter,
  filters,
  toggleAll,
  clearCompleteTodo,
  editTodo,
}) => {
  const filterTodos = (todos, activeFilter) => {
    switch (activeFilter) {
      case 'complete':
        return todos.filter((todo) => todo.isDone);

      case 'active':
        return todos.filter((todo) => !todo.isDone);

      default:
        return todos;
    }
  };

  const getActiveTodosCounter = (todos) =>
    todos.filter((todo) => !todo.isDone).length;

  const isTodos = todos && todos.length > 0;
  const filteredTodos = filterTodos(todos, filters);
  const taskCounter = getActiveTodosCounter(todos);

  return (
    <section className="todoapp">
      <div className="header">
        <Title title={'todos'} />
        <TodoNew create={addTodo} />
      </div>
      {isTodos && (
        <>
          <div className="main">
            <ToggleAll todos={todos} toggleAll={toggleAll} />

            <TodoList
              remove={removeTodo}
              list={filteredTodos}
              updateState={completeTodo}
              edit={editTodo}
            />
          </div>
          <div className={classNames('footer')}>
            <TodoCount taskCounter={taskCounter} />
            <Filter changeFilter={changeFilter} activeFilter={filters} />
            <ClearCompleteTodos clearCompleteTodo={clearCompleteTodo} />
          </div>
        </>
      )}
    </section>
  );
};

export default connect(
  ({ todos, filters }) => ({
    todos,
    filters,
  }),
  {
    addTodo,
    removeTodo,
    completeTodo,
    changeFilter,
    toggleAll,
    clearCompleteTodo,
    editTodo,
  }
)(App);
