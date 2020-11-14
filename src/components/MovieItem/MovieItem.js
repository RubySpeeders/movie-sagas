import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

class MovieItem extends Component {
  // // create or initialize all hooks
  // const dispatch = useDispatch();

  // function handleDelete() {
  //   dispatch({
  //     type: 'DELETE_BOOK',
  //     payload: props.book.id,
  //   });
  // }

  render() {
    return (
      <div>
        {this.props.movies.title} <br />
        <img src={this.props.movies.poster} alt={this.props.movies.title} />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(MovieItem);
