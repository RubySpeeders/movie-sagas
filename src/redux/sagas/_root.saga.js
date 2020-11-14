import { all } from 'redux-saga/effects';

//SAGAS
import getMoviesSaga from './getMovies.saga';

// Create the rootSaga generator function
function* rootSaga() {
  //register all sagas
  yield all([getMoviesSaga()]);
}

export default rootSaga;
