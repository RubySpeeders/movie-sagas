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
          {this.props.store.details.map((item, index) => {
            return <MovieDetailItem key={index} item={item} />;
          })}
        </div>
        {/* <div>
          {this.props.store.details.map((item, index) => {
            return <GenreDetailItem key={index} item={item} />;
          })}
        </div> */}
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
