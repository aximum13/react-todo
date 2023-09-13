import { combineReducers } from 'redux';
import todos from 'reducers/todos';
import filters from 'reducers/filters';

const rootReducer = combineReducers({ todos, filters });

export default rootReducer;
