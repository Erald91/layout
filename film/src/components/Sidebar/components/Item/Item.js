import React, { Component } from 'react';
import './styles.css';

export class Item extends Component {
  defineClassName() {
    return `item${this.props.logo ? ' logo' : ''}`
  }

  manageClickEvent(event) {
    this.props.onClick('Fired');
  }

  render() {
    return (
      <div className={this.defineClassName()} onClick={this.manageClickEvent.bind(this)}>
        <img src={this.props.image || ''} />
      </div>
    );
  }
}