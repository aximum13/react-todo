import { PropTypes } from 'prop-types';

const ClearCompleteTodos = ({ clearCompleteTodo }) => {
  return (
    <button onClick={clearCompleteTodo} className="clear-completed">
      Clear completed
    </button>
  );
};

ClearCompleteTodos.propTypes = {
  clearCompleteTodo: PropTypes.func,
};

export default ClearCompleteTodos;
