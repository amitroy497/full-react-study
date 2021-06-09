import React, { useState, useMemo } from 'react'

function User() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(10)

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log('multiCount')
      return count * 5
    },
    [count]
  )
  return (
    <div>
      <h1>useMemo Hook to implement Pure Component in Functional Component</h1>
      <h1>Count is {count}</h1>
      <h1>Data is {data}</h1>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data * 10)}>Update Data</button>
    </div>
  )
}

export default User
