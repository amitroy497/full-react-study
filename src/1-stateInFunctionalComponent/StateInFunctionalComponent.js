import React, { useState } from 'react'

function StateInFunctionalComponent() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}

export default StateInFunctionalComponent
