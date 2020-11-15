import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreItem from '../../components/GenreItem/GenreItem';

//Material-UI
import { Button, Grid, Card } from '@material-ui/core';

class MovieDetails extends Component {
  componentDidMount() {
    // dispatch calls to get the details of movie clicked
    this.props.dispatch({
      type: 'GET_MOVIE_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  handleBackClick = () => {
    this.props.history.push('/');
  };

  handleEditClick = () => {
    console.log('edit clicked');
  };

  render() {
    return (
      <div>
        <Grid container alignItems="center" justify="space-evenly">
          <Grid item>
            <h2>Movie Details</h2>
          </Grid>
          <Grid item>
            <Button onClick={this.handleBackClick} variant="contained">
              Back to List
            </Button>
            &nbsp;
            <Button onClick={this.handleEditClick} variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img
              src={this.props.store.details.poster}
              alt={this.props.store.details.title}
            />
          </Grid>
          <Grid item xs={6}>
            <h2>{this.props.store.details.title}</h2>
            <div>
              <p>{this.props.store.details.description}</p>
              <h3>Genres:</h3>
              <ul>
                {this.props.store.details.genres.map((item, index) => {
                  return <GenreItem key={index} genre={item} />;
                })}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieDetails);
