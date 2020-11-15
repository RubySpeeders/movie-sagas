import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddMovie extends Component {
  handleBackClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Add a movie!</h2>
        <button onClick={this.handleBackClick}>Back to List</button>
      </div>
    );
  }
}

export default connect()(AddMovie);
