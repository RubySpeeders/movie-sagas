import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';

class Homepage extends Component {
  handleAddClick = () => {
    this.props.history.push('/add/movie');
  };

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <MovieList />
        <button onClick={this.handleAddClick}>Add Movie</button>
      </div>
    );
  }
}

export default Homepage;
