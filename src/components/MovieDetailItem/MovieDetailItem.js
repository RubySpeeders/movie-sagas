import React, { Component } from 'react';

class MovieDetailItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.item.title}</h2>
        <img src={this.props.item.poster} />
        <div>
          <p>{this.props.item.description}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetailItem;
