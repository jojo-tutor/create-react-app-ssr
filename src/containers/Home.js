import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class Home extends PureComponent {
  constructor(props) {
    super(props)

    // this.props.dispatch(actions.fetchUserList())
  }

  render() {
    return (
      <div className="home">
        <div className="home-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(mapStateToProps)(Home)
