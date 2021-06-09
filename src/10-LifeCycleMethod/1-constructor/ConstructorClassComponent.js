import React from 'react'

class ConstructorClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
    console.log('constructor ran')
  }
  render() {
    return (
      <div>
        <h1>Life Cycle Method: Mounting: Constructor</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase Count
        </button>
      </div>
    )
  }
}

export default ConstructorClassComponent
