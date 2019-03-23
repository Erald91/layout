import React, { Component } from 'react';
import './styles.css';
import FirstDiv from './FirstDiv/index';
import SecondDiv from './SecondDiv/index';
import AddMovies from './AddMovies/index';

class Main extends Component {
  render() {
    return (
      <div className="main">
      <FirstDiv />
      <SecondDiv />
      </div>
    );
  }
}

export default Main;
