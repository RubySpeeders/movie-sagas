import { combineReducers } from 'redux';

import movies from './movies.reducers';

const reducers = combineReducers({
  movies,
});

export default reducers;
