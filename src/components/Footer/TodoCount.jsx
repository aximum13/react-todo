import { PropTypes } from 'prop-types';

const TodoCount = ({ taskCounter }) => {
  return (
    <span className="todo-count">
      <strong>{taskCounter}</strong> item{taskCounter !== 1 ? 's' : ''} left
    </span>
  );
};

TodoCount.propTypes = {
  taskCounter: PropTypes.number,
};

TodoCount.defaultProps = {
  taskCounter: 0,
};

export default TodoCount;
