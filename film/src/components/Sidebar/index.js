import React, { Component } from 'react';
import './styles.css';
import {Item} from './components/Item/Item.js';
import logo from '../../assets/images/logo.svg';
import tmp from '../../assets/images/tmp.svg'

class Sidebar extends Component {
  manageEvent(content) {
    alert(`Parent ${content}`);
  }

  render() {
    return (
      <div className="sidebar">
        <Item image={logo} logo={true} />
        <Item image={tmp} onClick={this.manageEvent} />
        <Item image={tmp} onClick={this.manageEvent} />
        <Item image={tmp} onClick={this.manageEvent} />
        <Item image={tmp} onClick={this.manageEvent} />
        <Item image={tmp} onClick={this.manageEvent}/>
      </div>
    );
  }
}

export default Sidebar;
