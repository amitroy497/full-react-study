import React from 'react'

class ShouldComponentUpdateLifeCycleMethod extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    console.log('Constructor')
  }
  componentDidMount() {
    console.log('ComponentDidMount')
  }
  shouldComponentUpdate() {
    let counter = this.state.count
    console.log('ShouldComponentUpdate', counter)
    if (counter > 5 && counter < 10) {
      return true
    } else {
      return false
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate', prevState)
  }
  render() {
    console.log('Render')
    return (
      <div>
        <h1>Life Cycle Methdo: Component Did Update</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase count
        </button>
      </div>
    )
  }
}

export default ShouldComponentUpdateLifeCycleMethod
