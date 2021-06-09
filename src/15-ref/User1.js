import React, { createRef } from 'react'

class User1 extends React.Component {
  constructor() {
    super()
    this.inputRef = createRef()
  }
  componentDidMount() {
    console.log(this.inputRef.current.value)
  }
  getValues = () => {
    console.log(this.inputRef.current.value)
    this.inputRef.current.style.color = 'red'
  }
  render() {
    return (
      <div>
        <h1>Using Ref in React in Class Component</h1>
        <input type='text' ref={this.inputRef} />
        <button onClick={() => this.getValues()}>Check Ref</button>
      </div>
    )
  }
}

export default User1
