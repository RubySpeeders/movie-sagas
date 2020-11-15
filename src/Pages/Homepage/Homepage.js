import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';

//Material-UI
import { Button } from '@material-ui/core';

class Homepage extends Component {
  handleAddClick = () => {
    this.props.history.push('/add/movie');
  };

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <MovieList />
        <Button onClick={this.handleAddClick}>Add Movie</Button>
      </div>
    );
  }
}

export default Homepage;
