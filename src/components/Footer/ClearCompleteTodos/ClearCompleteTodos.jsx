import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';

import { clearCompleteTodo } from 'actions/actionCreator';

const ClearCompleteTodos = () => {
  const dispatch = useDispatch();

  const handleClearCompleteTodo = () => {
    dispatch(clearCompleteTodo());
  };

  return (
    <button onClick={handleClearCompleteTodo} className="clear-completed">
      Clear completed
    </button>
  );
};

ClearCompleteTodos.propTypes = {
  clearCompleteTodo: PropTypes.func,
};

export default ClearCompleteTodos;
