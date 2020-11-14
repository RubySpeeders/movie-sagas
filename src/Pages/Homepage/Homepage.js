import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Movies</h2>
        <MovieList />
      </div>
    );
  }
}

export default connect()(Homepage);
