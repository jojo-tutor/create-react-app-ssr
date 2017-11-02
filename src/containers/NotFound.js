import React, { PureComponent } from 'react'

export default class NotFound extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    )
  }
}
