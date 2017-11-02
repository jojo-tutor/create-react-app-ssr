import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class Page2 extends Component {
  constructor(props) {
    super(props)

    this.props.dispatch(actions.fetchUserList())
  }

  render() {
    return (
      <div className='md-grid'>
        <h2 className='md-cell md-cell--12 md-text-container'>
          Page 2
        </h2>
        <p className='md-cell md-cell--12 md-text-container'>
          Here is some text for the second page. It is quite
          beautiful.
        </p>
        <div className='md-cell md-cell--12 md-text-container'>
          <h4>
            JSON Placeholder (Users):
          </h4>
          {
            this.props.user.list.map(i => <li key={i.id}>{i.name}</li>)
          }
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user }
}

export default connect(mapStateToProps)(Page2)
