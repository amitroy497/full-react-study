import React, { useState, useEffect } from 'react'

function UseEffectWithSpecificStateProps() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(100)
  useEffect(() => {
    console.log('useEffect fro Data')
  }, [data])
  useEffect(() => {
    alert('useEffect for Count')
  }, [count])
  return (
    <div>
      <h1>useEffect Hooks with specific State and Props</h1>
      <h1>Count : {count}</h1>
      <h1>Data : {data}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  )
}

export default UseEffectWithSpecificStateProps
