import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material-UI
import {
  Button,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre_id: '',
  };

  componentDidMount() {
    //dispatch to get genres for the dropdown
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  handleChange = (propertyName) => (event) => {
    //set local state to capture inputs
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  addMovie = (event) => {
    event.preventDefault();
    //dispatch to add movie to database via saga
    this.props.dispatch({ type: 'POST_MOVIE', payload: this.state });
    //return to homepage
    this.props.history.push('/');
  };

  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    const genre = this.props.store.genres.map((item, index) => {
      return (
        <MenuItem value={item.id} key={index}>
          {item.name}
        </MenuItem>
      );
    });
    return (
      <div>
        <h2>Add a movie!</h2>

        <form onSubmit={this.addMovie}>
          <TextField
            required
            variant="outlined"
            label="Movie Title"
            onChange={this.handleChange('title')}
          />
          <TextField
            required
            variant="outlined"
            label="Movie Poster url"
            onChange={this.handleChange('poster')}
          />
          <div>
            <TextField
              required
              variant="outlined"
              label="Movie Description"
              multiline
              rows={5}
              onChange={this.handleChange('description')}
            />
          </div>
          <div>
            <FormControl>
              <InputLabel id="type-genre">Genre</InputLabel>
              <Select
                labelId="type-genre"
                onChange={this.handleChange('genre_id')}
                name="genres"
                required
              >
                <MenuItem value="">Select Genre</MenuItem>
                {genre}
              </Select>
            </FormControl>
          </div>
          <Grid container spacing={4} justify="center">
            <Grid item>
              <Button onClick={this.handleBackClick} variant="contained">
                Back to List
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Add Movie
              </Button>
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
