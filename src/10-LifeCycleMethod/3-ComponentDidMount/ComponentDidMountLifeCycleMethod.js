import React from 'react'

class ComponentDidMountLifeCycleMethod extends React.Component {
  constructor() {
    super()
    this.state = {
      data: 0,
    }
    console.log('Constructor')
  }
  componentDidMount() {
    console.log('componetDidMount')
  }
  render() {
    console.log('Render')
    return (
      <div>
        <h1>Life Cycle Methdo: Component Did Mount</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase count
        </button>
      </div>
    )
  }
}

export default ComponentDidMountLifeCycleMethod
