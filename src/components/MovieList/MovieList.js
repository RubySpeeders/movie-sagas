import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';

//Material-UI
import { Grid } from '@material-ui/core';

class MovieList extends Component {
  render() {
    return (
      <Grid container>
        {this.props.store.movies.map((item, index) => (
          <Grid item xs={2} key={index}>
            <MovieItem key={index} movies={item} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieList);
