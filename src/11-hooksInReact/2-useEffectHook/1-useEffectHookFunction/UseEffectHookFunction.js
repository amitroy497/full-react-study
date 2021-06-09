import React, { useState, useEffect } from 'react'

function UseEffectHookFunction() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect Hook')
  })
  return (
    <div>
      <h1>useEffect Hook in React</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  )
}

export default UseEffectHookFunction
