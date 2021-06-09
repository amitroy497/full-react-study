import React from 'react'

function LiftingStateUp2(props) {
  let count = 0
  return (
    <div>
      <h1>Send data from child to parent component</h1>
      <h1>{props.myData}</h1>
      <button onClick={() => props.item(count)}>
        Click me to increase count
      </button>
    </div>
  )
}

export default LiftingStateUp2
