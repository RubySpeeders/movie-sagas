import React, { Component } from 'react';
import MovieList from '../../components/MovieList/MovieList';

//Material-UI
import { Button, Box } from '@material-ui/core';

class Homepage extends Component {
  handleAddClick = () => {
    this.props.history.push('/add/movie');
  };

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <Box m={2}>
          <Button onClick={this.handleAddClick} variant="contained">
            Add Movie
          </Button>
        </Box>
        <MovieList />
      </div>
    );
  }
}

export default Homepage;
