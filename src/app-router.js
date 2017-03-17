// Libs
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import App from './app/App';
import Home from './app/Home';
import PhotoIndex from './app/photos/PhotoIndex';
import PhotoDetails from './app/photos/PhotoDetails';

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/photos" component={PhotoIndex}></Route> 
      <Route exact path="/photos/:id" component={PhotoDetails}></Route> 
      {/*<Route path="/users" component={UserIndex}></Route>      */}
    </App>
  </Router>
);

export default routes;