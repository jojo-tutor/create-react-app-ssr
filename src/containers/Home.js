import React, { PureComponent } from 'react'
import SimplePagination from './SimplePagination'

class Home extends PureComponent {
  render() {
    return (
      <div className='md-grid'>
        <h2 className='md-cell md-cell--12 md-text-container'>
          Home
        </h2>
        <SimplePagination/>
      </div>
    )
  }
}

export default Home
