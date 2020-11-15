import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMovieDetails(action) {
  try {
    const detailsResponse = yield axios.get(
      `/api/movie/details/${action.payload}`
    );
    const genresResponse = yield axios.get(
      `/api/genre/details/${action.payload}`
    );
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: { ...detailsResponse.data[0], genres: genresResponse.data },
    });
  } catch (err) {
    console.log('details error', err);
  }
}

function* getMovieDetailsSaga() {
  yield takeLatest('GET_MOVIE_DETAILS', getMovieDetails);
}

export default getMovieDetailsSaga;
