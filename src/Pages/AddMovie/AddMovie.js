import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre: '',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_GENRES' });
  }

  handleChange = (propertyName) => (event) => {
    this.setState(
      {
        ...this.state,
        [propertyName]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
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
        <option value={item.name} key={index}>
          {item.name}
        </option>
      );
    });
    return (
      <div>
        <ul>{genre}</ul>
        <h2>Add a movie!</h2>
        <button onClick={this.handleBackClick}>Back to List</button>
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
              onChange={this.handleChange('genre')}
              id="genres"
              name="genres"
            >
              <option> </option>
              {genre}
            </select>
          </div>
          <button>Add Movie</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(AddMovie);
