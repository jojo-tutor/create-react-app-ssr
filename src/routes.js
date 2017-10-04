// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'
import {Provider} from 'react-redux'

import store from './store'

import App from './containers/App';
import About from './containers/About';
import NotFound from './containers/NotFound';

const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

export default Routes;
