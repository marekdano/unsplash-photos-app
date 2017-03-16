// Libs
import ReactDOM from 'react-dom';

// Dependencies
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css'
import './index.css';

// Routes
import routes from './app-router';

ReactDOM.render(
  routes, 
  document.getElementById('root')
);
