import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  render() {
    return (
      <div>
        <h2>Add a movie!</h2>
      </div>
    );
  }
}

export default connect()(AddMovie);
