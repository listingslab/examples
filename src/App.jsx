import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/home">
            <img 
              width={50}
              height={50}
              src="/png/black/72x72.png"
              alt="listingslab logo" 
              className="logo" />
              <h1>Push Prototype</h1>
          </a>
        </header>

        <div className="nav">
          <h2 className="header-link">
            <a href="/examples/push-notifications">Push Notifications</a>
          </h2>
          <p>Let's be honest that's why we're here. The client asks for 'em and we're giving them away free with a tank of petrol</p>
          <h2 className="header-link">
            <a href="/examples/firestore-triggers">Firestore Triggers</a>
            
          </h2>
          <p>What can you do with event triggers from a database?</p>
          <h2 className="header-link">
            <a href="/examples/pwaboiler">PWA Boiler</a>
          </h2>
            Fully featured React/Redux PWA Boilerplate.
        </div>

        <div className="main">
          <h2>
            <a 
              className="black"
              href="https://github.com/listingslab/examples"
              target="_blank"
            >Fork it.

            <img 
              className="github"
              src="/svg/Octicons-mark-github.svg" 
            />
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default App;
