import { combineReducers } from 'redux';

import movies from './movies.reducers';
import genres from './genres.reducers';
import details from './movies.details.reducers';

const reducers = combineReducers({
  //all reducers
  movies,
  genres,
  details,
});

export default reducers;
