import React from 'react'

class PureComponent1 extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      count: 1,
    }
  }
  render() {
    console.log('re rendering')
    return (
      <div>
        <h1>Pure Component in Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count })}>
          Click me
        </button>
      </div>
    )
  }
}

export default PureComponent1
