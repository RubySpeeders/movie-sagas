import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class DetailsItem extends Component {
  componentDidMount() {
    console.log(this.props.movies);
  }

  render() {
    return <div></div>;
  }
}

export default withRouter(connect()(DetailsItem));
