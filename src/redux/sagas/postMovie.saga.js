import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postMovie(action) {
  try {
    //axios call to add movie
    yield axios.post(`/api/movie`, action.payload);
    //axios call to get movies to reset all movies (with new added movie)
    yield put({
      type: 'GET_MOVIES',
    });
  } catch (err) {
    console.log(err);
  }
}

function* postMovieSaga() {
  yield takeLatest('POST_MOVIE', postMovie);
}

export default postMovieSaga;
