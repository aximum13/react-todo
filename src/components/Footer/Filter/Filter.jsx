import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from 'actions/actionCreator';

import styles from './Filter.module.sass';
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
    text: 'Completed',
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
    <ul className={styles.Filters}>
      {FILTERS_BTN.map(({ text, id, className }) => (
        <li key={id}>
          <button
            onClick={() => {
              handleChangeFilter(id);
            }}
            className={classNames(
              styles.Button,
              className,
              filters === id ? styles.Selected : ''
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
