import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from 'actions/actionCreator';
import { getFilters } from 'selectors/filtersSelector';

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
  const filters = useSelector(getFilters);
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
            className={classNames(styles.Button, className, {
              [styles.Selected]: filters === id,
            })}
          >
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
