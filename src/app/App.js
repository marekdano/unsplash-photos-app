
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';
import NavbarLink from './shared/NavbarLink';

class App extends Component {
  render() {
    return (
      <div className="container main-container">
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand"><i className="fa fa-1x fa-camera" aria-hidden="true"></i></Link>
              </div>
              <ul className="nav navbar-nav">
                <li><NavbarLink to="/photos">Photos</NavbarLink></li>
                <li><NavbarLink to="/users">Users</NavbarLink></li>
              </ul>
            </div>
          </nav>
        </header>
        <div>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
