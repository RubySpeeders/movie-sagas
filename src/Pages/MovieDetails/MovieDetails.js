import React, { Component } from 'react';
import { connect } from 'react-redux';

import DetailsItem from '../../components/DetailsItem/DetailsItem';

class MovieDetails extends Component {
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
          <button onClick={this.handleBackClick}>Back to List</button>
          <button onClick={this.handleEditClick}>Edit</button>
        </div>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieDetails);
