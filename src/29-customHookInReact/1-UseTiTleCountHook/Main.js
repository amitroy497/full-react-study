import React, { useState } from 'react'
import { useTitleCount } from './useTitleCount'

function Main() {
  const [count, setCount] = useState(0)

  useTitleCount(count)

  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Custom Hook in React</h1>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Click Me</button>
    </div>
  )
}

export default Main
