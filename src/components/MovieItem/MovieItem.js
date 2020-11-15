import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieItem extends Component {
  handleDetails = (event) => {
    this.props.history.push(`/details/${this.props.movies.id}`);
  };

  render() {
    return (
      <div className="movieList">
        {this.props.movies.title} <br />
        <img
          src={this.props.movies.poster}
          alt={this.props.movies.title}
          onClick={this.handleDetails}
        />
      </div>
    );
  }
}

export default withRouter(connect()(MovieItem));
