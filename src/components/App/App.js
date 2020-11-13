import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Homepage from '../../Pages/Homepage/Homepage';
import './App.css';

class App extends Component {
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
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
