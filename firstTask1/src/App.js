import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';
import { ProductsList } from './components/ProductsList';
import { AddProduct } from './components/AddProduct';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="application-container">
          <div className="application-container_wrapper">
            <NavBar />
            <div className="application-container_wrapper_content">
              <Route path="/list" component={ProductsList} />
              <Route path="/new" component={AddProduct} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
