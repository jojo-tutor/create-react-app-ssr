import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'
import NavLink from './NavLink'

import Customer from './Customer'
import Product from './Product'
import Invoice from './Invoice'
import Page3 from './Page3'
import NotFound from './NotFound'

const navItems = [{
  exact: true,
  label: 'Customers',
  to: '/',
  icon: 'group',
}, {
  label: 'Products',
  to: '/product',
  icon: 'local_grocery_store',
}, {
  label: 'Invoices',
  to: '/invoice',
  icon: 'local_mall',
}, {
  label: 'Page 3',
  to: '/page-3',
  icon: 'flight_land',
}]

class Index extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <NavigationDrawer
            drawerTitle='CRA'
            toolbarTitle='Welcome to react-md'
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.CLIPPED}
            navItems={navItems.map(props => <NavLink {...props} key={props.to} />)}
          >
            <Switch>
              <Route exact path='/' location={location} component={Customer} />
              <Route path='/product' location={location} component={Product} />
              <Route path='/invoice' location={location} component={Invoice} />
              <Route path='/page-3' location={location} component={Page3} />
              <Route path='*' component={NotFound} />
            </Switch>
          </NavigationDrawer>
        )}
      />
    )
  }
}

export default Index
