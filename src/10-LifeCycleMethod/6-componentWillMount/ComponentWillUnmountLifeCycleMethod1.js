import React from 'react'
import ComponentWillUnmountLifeCycleMethod2 from './ComponentWillUnmountLifeCycleMethod2'

class ComponentWillUnmountLifeCycleMethod1 extends React.Component {
  constructor() {
    super()
    this.state = {
      show: true,
    }
  }
  render() {
    return (
      <div>
        <h1>Life Cycle Method: ComponentWillUnmount</h1>
        {this.state.show ? <ComponentWillUnmountLifeCycleMethod2 /> : null}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
      </div>
    )
  }
}

export default ComponentWillUnmountLifeCycleMethod1
