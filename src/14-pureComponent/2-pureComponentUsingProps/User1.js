import React from 'react'
import User2 from './User2'
class User1 extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }
  render() {
    return (
      <div>
        <h1>Pure Component using Props</h1>
        <User2 data={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count })}>
          Click me
        </button>
      </div>
    )
  }
}

export default User1
