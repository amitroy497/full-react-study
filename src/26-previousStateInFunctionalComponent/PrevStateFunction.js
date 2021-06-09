import React, { useState } from 'react'

function PrevStateFunction() {
  const [count, setCount] = useState(0)
  const updateCount = () => {
    let rand = Math.floor(Math.random() * 10)
    setCount((prev) => {
      console.log(prev)
      return rand
    })
  }

  return (
    <div>
      <h1>Previous State with Functional Component</h1>
      <h1>Current State: {count}</h1>
      <button onClick={updateCount}>Update</button>
    </div>
  )
}

export default PrevStateFunction
