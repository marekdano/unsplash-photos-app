// Libs
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import App from './app/App';
import Home from './app/components/Home';
import PhotosPage from './app/components/photos/PhotosPage';

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home}></Route>
      <Route path="/photos" component={PhotosPage}></Route>      
    </App>
  </Router>
);

export default routes;