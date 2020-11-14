import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//import pages and styling
import Homepage from '../../Pages/Homepage/Homepage';
import MovieDetails from '../../Pages/MovieDetails/MovieDetails';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MOVIES',
    });
  }

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header>
          <h1>Movies!</h1>
        </header>
        <Router>
          <Route exact path="/" component={Homepage} />
          <Route path="/details/:id" component={MovieDetails} />
        </Router>
      </div>
    );
  }
}

export default connect()(App);
