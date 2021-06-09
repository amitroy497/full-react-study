import React from 'react'
import PropsInClassComponent2 from './PropsInClassComponent2'
class PropsInClassComponent1 extends React.Component {
  constructor() {
    super()
    this.state = {
      data: 'Amit',
    }
  }
  render() {
    return (
      <div>
        <h1>Props in Class Component</h1>
        <PropsInClassComponent2 data={this.state.data} />
        <button onClick={() => this.setState({ data: 'Roy' })}>
          Update Data
        </button>
      </div>
    )
  }
}

export default PropsInClassComponent1
