import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetails extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
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
        <p>Movie Details Page</p>
        <div>
          {JSON.stringify(this.props.store.details)}
          {this.props.store.details.title} <br />
          <img
            src={this.props.store.details.poster}
            alt={this.props.store.details.title}
          />
        </div>
        <div>
          <button onClick={this.handleBackClick}>Back to List</button>
          <button onClick={this.handleEditClick}>Edit</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieDetails);
