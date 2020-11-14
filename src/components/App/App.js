import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Homepage from '../../Pages/Homepage/Homepage';
import './App.css';
import { connect } from 'react-redux';

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
          {/* ADD PAGES! */}
        </Router>
      </div>
    );
  }
}

export default connect()(App);
