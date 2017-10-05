// src/routes.js
import React from 'react'
import { Router, Route } from 'react-router'
import {Provider} from 'react-redux'

import store from './store'

import App from './containers/App'
import Users from './containers/Users'
import About from './containers/About'
import NotFound from './containers/NotFound'

const Routes = (props) => (
  <Provider store={store}>
    <Router {...props}>
      <Route name='App' path='/' component={App} />
      <Route name='Users' path='/users' component={Users} >
        <Route name='View' path=':user_id' component={Users} />
      </Route>
      <Route name='About' path='/about' component={About} />
      <Route name='NotFound' path='*' component={NotFound} />
    </Router>
  </Provider>
)

export default Routes
