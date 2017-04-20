// Libs
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from './app/App';
import Home from './app/Home';
import PhotoIndex from './app/photos/PhotoIndex';
import PhotoDetails from './app/photos/PhotoDetails';
import UserIndex from './app/users/UserIndex';
import UserDetails from './app/users/UserDetails';
import NotFoundPage from './app/NotFoundPage';

const routes = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/photos" component={PhotoIndex} />
        <Route exact path="/photos/:id" component={PhotoDetails} />
        <Route exact path="/users" component={UserIndex}></Route>
        <Route exact path="/users/:username" component={UserDetails}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </App>
  </Router>
);

export default routes;