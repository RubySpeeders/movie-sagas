import React, { Component } from 'react';
import { connect } from 'react-redux';

import DetailsItem from '../../components/DetailsItem/DetailsItem';

class MovieDetails extends Component {
  componentDidMount() {
    this.props.dispatch(
      {
        type: 'GET_MOVIE_DETAILS',
        payload: this.props.match.params.id,
      },
      () => {
        console.log(this.props.store.details.description);
      }
    );
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
        <pre>{this.props.store.details.title}</pre>
        <p>Movie Details Page</p>
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
