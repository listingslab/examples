import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Examples</h1>
        </header>
        <ul>
          <li><a href="/examples/firestore-triggers">firestore-triggers</a></li>
          <li><a href="/examples/push-notifications">push-notifications</a></li>
          <li><a href="/examples/pwaboiler">pwaboiler</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
