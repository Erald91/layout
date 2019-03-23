import React, {Component} from "react";
import './styles.css';

class FirstDiv extends Component {
  constructor(props) {
    super(props);

    this.managAddonclick = this.managAddonclick.bind(this);
  }

  managAddonclick() {
    this.props.onAddClick();
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
          <button class="add-button" id="addTitleButton" data-target="#myModal" onClick={this.managAddonclick}>ADD TITLE</button>
        </div>
      </div>
    );
  }
}

export default FirstDiv;