import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <style jsx>{`
        .App {
          text-align: center;
        }

        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 80px;
        }

        .App-header {
          background-color: #222;
          height: 150px;
          padding: 20px;
          color: white;
        }

        .App-title {
          font-size: 1.5em;
        }

        .App-intro {
          font-size: large;
        }

        @keyframes App-logo-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}</style>
      </div>
    );
  }
}

export default App;
