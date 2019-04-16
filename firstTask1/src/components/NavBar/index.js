import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

export class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-container_item">
          <NavLink to="/list" activeClassName="selected">Products List</NavLink>
        </div>
        <div className="navbar-container_item">
          <NavLink to="/new" activeClassName="selected">Add</NavLink>
        </div>
      </div>
    );
  }
}
