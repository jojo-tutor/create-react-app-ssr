import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

@connect((state) => state)
class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default App;
