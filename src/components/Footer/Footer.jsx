import Filter from 'components/Footer/Filter';
import { connect } from 'react-redux';
import { changeFilter, clearCompleteTodo } from 'actions/actionCreator';

import { TodoCount } from 'components/Footer/TodoCount';

const Footer = (todos, changeFilter, filters, clearCompleteTodo) => {
  return (
    <div className={'footer'}>
      <TodoCount list={todos} />
      <Filter changeFilter={changeFilter} activeFilter={filters} />

      <button onClick={clearCompleteTodo} className="clear-completed">
        Clear completed
      </button>
    </div>
  );
};

export default connect(
  ({ todos, filters }) => ({
    todos,
    filters,
  }),
  {
    changeFilter,
    clearCompleteTodo,
  }
)(Footer);
