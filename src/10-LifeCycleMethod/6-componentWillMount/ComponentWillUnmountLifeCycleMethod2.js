import React from 'react'

class ComponentWillUnmountLifeCycleMethod2 extends React.Component {
  componentWillUnmount() {
    console.log('ComponentWillUnmount')
  }
  render() {
    console.log('Render')
    return (
      <div>
        <h1>Toggle Element (Hide/Show)</h1>
      </div>
    )
  }
}

export default ComponentWillUnmountLifeCycleMethod2
