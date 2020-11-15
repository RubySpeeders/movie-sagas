import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

class Homepage extends Component {
  handleAddClick = () => {
    this.props.history.push('/addmovie');
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

export default connect()(Homepage);
