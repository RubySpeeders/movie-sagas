import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  state = {
    title: '',
    poster: '',
    description: '',
    genre: '',
  };

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
    return (
      <div>
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
          <button>Add Movie</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddMovie);
