import { combineReducers } from 'redux';

import movies from './movies.reducers';
import genres from './genres.reducers';

const reducers = combineReducers({
  movies,
  genres,
});

export default reducers;
