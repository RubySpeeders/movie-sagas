import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>Movies</h2>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Homepage);
