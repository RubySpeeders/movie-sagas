import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material-UI
import { Button, Grid } from '@material-ui/core';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  handleChange = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  addMovie = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_MOVIE', payload: this.state });
    this.props.history.push('/');
  };

  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    const genre = this.props.store.genres.map((item, index) => {
      return (
        <option value={item.id} key={index}>
          {item.name}
        </option>
      );
    });
    return (
      <div>
        <h2>Add a movie!</h2>

        <form onSubmit={this.addMovie}>
          <input
            required
            type="text"
            placeholder="Movie Title"
            onChange={this.handleChange('title')}
          />
          <input
            required
            type="text"
            placeholder="Movie Poster url"
            onChange={this.handleChange('poster')}
          />
          <input
            required
            type="text"
            placeholder="Movie Description"
            onChange={this.handleChange('description')}
          />
          <div>
            <label htmlFor="genres">Choose a genre</label>
            <select
              onChange={this.handleChange('genre_id')}
              id="genres"
              name="genres"
              required
            >
              <option> </option>
              {genre}
            </select>
          </div>
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Button onClick={this.handleBackClick} variant="contained">
                Back to List
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Add Movie</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(AddMovie);
