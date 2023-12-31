import { CHANGE_FILTER } from 'constans';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
};

export default filter;
