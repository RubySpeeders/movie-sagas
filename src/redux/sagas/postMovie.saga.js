import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* postMovie(action) {
  try {
    yield axios.post(`/api/movie`, action.payload);
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
