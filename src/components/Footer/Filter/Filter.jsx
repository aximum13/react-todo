import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from 'actions/actionCreator';

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

const Filter = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleChangeFilter = (activeFilter) => {
    dispatch(changeFilter(activeFilter));
  };

  return (
    <ul className="filters">
      {FILTERS_BTN.map(({ text, id, className }) => (
        <li key={id}>
          <button
            onClick={() => {
              handleChangeFilter(id);
            }}
            className={classNames(className, filters === id ? 'selected' : '')}
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
