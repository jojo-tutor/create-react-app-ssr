import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import NavigationDrawer from 'react-md/lib/NavigationDrawers'

import Inbox from './Users'
import Starred from './Users'
import SendMail from './Users'
import Drafts from './Users'

const navItems = [{
  label: 'Inbox',
  to: '/user',
  exact: true,
  icon: 'inbox',
}, {
  label: 'Starred',
  to: '/user',
  icon: 'star',
}, {
  label: 'Send mail',
  tto: '/user',
  icon: 'send',
}, {
  label: 'Drafts',
  to: '/user',
  icon: 'drafts',
}]

const styles = {
  content: { minHeight: 'auto' },
}

@withRouter
export default class Navigation extends PureComponent {
  constructor(props) {
    super(props)
    console.log('@props', this.props)

    this.state = { toolbarTitle: this.getCurrentTitle(props) }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ toolbarTitle: this.getCurrentTitle(nextProps) })
  }

  getCurrentTitle = ({ location: { pathname } }) => {
    const lastSection = pathname.substring(pathname.lastIndexOf('/') + 1)
    if (lastSection === 'navigation-drawers') {
      return 'Inbox'
    }

    return lastSection
  }

  render() {
    const { toolbarTitle } = this.state
    const { location } = this.props

    const NavItemLink = (props) => {
      return <div>{props.label}</div>
    }

    return (
      <NavigationDrawer
        toolbarTitle={toolbarTitle}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        navItems={navItems.map(props => <NavItemLink {...props} key={Math.random()} />)}
        contentId='main-demo-content'
        contentStyle={styles.content}
        contentClassName='md-grid'
      >
        <Switch key={location.pathname}>
          <Route path={navItems[0].to} exact component={Inbox} />
          <Route path={navItems[1].to} component={Starred} />
          <Route path={navItems[2].to} component={SendMail} />
          <Route path={navItems[3].to} component={Drafts} />
        </Switch>
      </NavigationDrawer>
    )
  }
}
