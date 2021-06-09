import React, { Component } from 'react'
import ComponentA from './ComponentA'

class Main extends Component {
  state = {
    count: 1,
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: 1 })
    }, 3000)
  }
  render() {
    return (
      <div>
        <h1>Memo in Class Component</h1>
        <h1>{this.state.count}</h1>
        <ComponentA count={this.state.count} />
      </div>
    )
  }
}

export default Main
