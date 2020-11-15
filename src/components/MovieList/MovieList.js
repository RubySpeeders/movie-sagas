import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        {this.props.store.movies.map((item, index) => (
          <MovieItem key={index} movies={item} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieList);
