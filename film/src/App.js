import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="custom-container">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
