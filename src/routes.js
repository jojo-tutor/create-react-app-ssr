import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './store'

import Navigation from './containers/Navigation'
import Users from './containers/Users'
import About from './containers/About'
import NotFound from './containers/NotFound'

const Routes = (props) => (
  <Provider store={store}>
    <BrowserRouter {...props}>
      <Switch>
        <Route name='App' path='/' component={Navigation} />
        <Route name='Users' path='/users' component={Users} >
          <Route name='View' path=':user_id' component={Users} />
        </Route>
        <Route name='About' path='/about' component={About} />
        <Route name='NotFound' path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Routes
