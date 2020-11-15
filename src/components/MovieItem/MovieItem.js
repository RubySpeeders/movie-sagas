import React, { Component } from 'react';
// import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

class MovieItem extends Component {
  handleDetails = (event) => {
    this.props.history.push(`/details/${this.props.movies.id}`);
  };

  render() {
    return (
      <Card>
        <CardActionArea onClick={this.handleDetails}>
          <CardHeader
            avatar={
              <Avatar
                alt={this.props.movies.title}
                src={this.props.movies.poster}
              />
            }
            title={this.props.movies.title}
            titleTypographyProps={{
              variant: 'h6',
              component: 'h3',
            }}
          />
          <CardContent>
            {/* <CardMedia
              image={this.props.movies.poster}
              title={this.props.movies.title}
            /> */}
            <img src={this.props.movies.poster} alt={this.props.movies.title} />
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withRouter(connect()(MovieItem));
