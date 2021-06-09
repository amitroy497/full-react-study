import React, { useRef } from 'react'
import User2 from './User2'
function User1() {
  const inputRef = useRef('')
  const updateInput = () => {
    inputRef.current.value = '1000'
    inputRef.current.style.color = 'red'
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>Forward Ref in React</h1>
      <User2 ref={inputRef} />
      <br />
      <button onClick={updateInput}>Click me</button>
    </div>
  )
}

export default User1
