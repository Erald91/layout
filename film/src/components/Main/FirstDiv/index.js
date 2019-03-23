import React, {Component} from "react";
import './styles.css';
import AddMovies from '../AddMovies/index';

class FirstDiv extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return(
      <div className="FirstDiv">
        <div className="FirstDiv_title-container">
          <div id="title"><h2>TITLES</h2></div>
          <div className="search">
            <input id="searchbox" type="text" placeholder="Search by Title,ID, Studio or Release Year" /> 
          </div>
        </div>
        <div className="FirstDiv_actions-container">
          <button class="add-button" id="addTitleButton" data-target="#myModal">ADD TITLE</button>
        </div>
      </div>
    );
  }
}

export default FirstDiv;