import React from 'react'
class StateInClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increaseCount()}>Increase count</button>
      </div>
    )
  }
}

export default StateInClassComponent
