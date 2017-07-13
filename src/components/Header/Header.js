import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
           
            <a className="navbar-brand" href="#"> React POC</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
             
              <li className="active"><a href="#">Home</a></li>
            </ul>

          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
