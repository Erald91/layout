import React, {Component} from "react";
import './styles.css';
import AddMovies from '../AddMovies/index';

class FirstDiv extends Component {
  constructor(props) {
      super(props)
      
  }

    render() {
        return(
           <div className="FirstDiv">
              <div id="title"><h2>TITLES</h2></div>
              <div className="search">
                <input id="searchbox" type="text" placeholder="Search by Title,ID, Studio or Release Year" /> 
                </div>
              <div>
                <input id="titlebox" type="submit" value="ADD TITLE" />
              </div>
           </div>
        );
    }
}

export default FirstDiv;