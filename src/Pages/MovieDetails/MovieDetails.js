import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieDetailItem from '../../components/MovieDetailItem/MovieDetailItem';

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
        <div>
          <h2>{this.props.store.details.title}</h2>
          <img
            src={this.props.store.details.poster}
            alt={this.props.store.details.title}
          />
          <div>
            <p>{this.props.store.details.description}</p>
          </div>
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
