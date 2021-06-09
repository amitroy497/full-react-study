import React, { useState } from 'react'

function User1() {
  return (
    <div>
      <h1>High Order Component</h1>
      <h1>
        A component which take other component as props and return another
        component
      </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  )
}
function HOCRed(props) {
  return (
    <div>
      <h1 style={{ background: 'red' }}>
        <props.cmp />
      </h1>
    </div>
  )
}
function HOCGreen(props) {
  return (
    <div>
      <h1 style={{ background: 'green' }}>
        <props.cmp />
      </h1>
    </div>
  )
}
function HOCBlue(props) {
  return (
    <div>
      <h1 style={{ background: 'blue' }}>
        Blue <props.cmp />
      </h1>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  )
}

export default User1
