import React, { useRef } from 'react'

function User1() {
  const inputRef1 = useRef('')

  const submitField = (e) => {
    e.preventDefault()
    console.log('Input Field 1:', inputRef1.current.value)
    let input2 = document.getElementById('inputValue2')
    console.log('Input Field 2:', input2.value)
  }
  return (
    <div>
      <h1>Uncontrolled Component in React</h1>
      <form onSubmit={submitField}>
        <input type='text' ref={inputRef1} />
        <br />
        <br />
        <input type='text' id='inputValue2' />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default User1
