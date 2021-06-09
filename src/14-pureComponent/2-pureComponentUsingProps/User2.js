import React from 'react'

class User2 extends React.PureComponent {
  render() {
    console.log('render')
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}

export default User2
