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
    console.log(this.props)
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to React</h2>
          <Button flat primary swapTheming onClick={()=>{this.props.router.push('/about')}}>Users Page</Button>
        </div>
      </div>
    );
  }
}

export default App;
