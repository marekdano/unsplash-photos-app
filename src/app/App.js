
import React, { Component } from 'react';
import './App.css';
import NavbarLink from './shared/NavbarLink';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="/" className="navbar-brand"><i className="fa fa-1x fa-camera" aria-hidden="true"></i></a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><NavbarLink to="/photos">Photos</NavbarLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div>
          { this.props.children }
        </div>
      </div>

      /*<div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <PhotosPage/>
      </div>*/
    );
  }
}

export default App;
