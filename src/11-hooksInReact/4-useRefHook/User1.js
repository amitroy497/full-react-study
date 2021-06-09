import React, { useRef } from 'react'

function User1() {
  const inputRef = useRef('')
  const handleInput = () => {
    console.log('function called')
    inputRef.current.value = '1000'
    inputRef.current.focus()
    inputRef.current.style.color = 'red'
    inputRef.current.style.display = 'none'
  }
  return (
    <div>
      <h1>useRef Hook in React</h1>
      <input type='text' ref={inputRef} />
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default User1
