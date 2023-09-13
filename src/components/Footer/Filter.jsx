import classNames from 'classnames';
import { PropTypes } from 'prop-types';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
    className: 'all-todo',
  },
  {
    text: 'Active',
    id: 'active',
    className: 'active-todo',
  },
  {
    text: 'Complete',
    id: 'complete',
    className: 'complete-todo',
  },
];

const Filter = ({ changeFilter, activeFilter }) => {
  return (
    <ul className="filters">
      {FILTERS_BTN.map(({ text, id, className }) => (
        <li key={id}>
          <button
            onClick={() => {
              changeFilter(id);
            }}
            className={classNames(
              className,
              activeFilter === id ? 'selected' : ''
            )}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
