import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from 'react-md/lib/Buttons/Button'

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
          <Button flat onClick={()=>{this.props.history.push('/users')}}>Users</Button>
          <Button flat onClick={()=>{this.props.history.push('/about')}}>About</Button>
        </div>
      </div>
    );
  }
}

export default App;
