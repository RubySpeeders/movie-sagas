import { all } from 'redux-saga/effects';

//SAGAS
import getMoviesSaga from './getMovies.saga';
import getMovieDetails from './getMovieDetails.saga';

// Create the rootSaga generator function
function* rootSaga() {
  //register all sagas
  yield all([
    // listing sagas
    getMoviesSaga(),
    getMovieDetails(),
  ]);
}

export default rootSaga;
