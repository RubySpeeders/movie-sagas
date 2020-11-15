import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenreItem from '../../components/GenreItem/GenreItem';

class MovieDetails extends Component {
  componentDidMount() {
    // dispatch calls to get the details of movie clicked
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
          <h2>{this.props.store.details.title}</h2>
          <img
            src={this.props.store.details.poster}
            alt={this.props.store.details.title}
          />
          <div>
            <p>{this.props.store.details.description}</p>
            <ul>
              {/* {this.props.store.details.genres.map((item, index) => {
                return <GenreItem key={index} genre={item} />;
              })} */}
            </ul>
          </div>
        </div>
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
