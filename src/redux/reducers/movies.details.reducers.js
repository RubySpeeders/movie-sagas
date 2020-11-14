// const movieDetails = {};

// function movieDetailsReducer(state = movieDetails, action) {
// if (action.type === 'SET_MOVIE_DETAILS') {
//   return action.payload;
// }
// return state;

const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default movieDetails;
