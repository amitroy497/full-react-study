import React, { useState } from 'react'

function HideShowElement() {
  const [data, setData] = useState(false)
  return (
    <div>
      <h1>Hide/Show Element</h1>
      {data ? <h1>Amit Roy</h1> : null}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '20%',
          margin: '0 auto',
        }}
      >
        <button onClick={() => setData(false)}>Hide</button>
        <button onClick={() => setData(true)}>Show</button>
        <button onClick={() => setData(!data)}>Toggle</button>
      </div>
    </div>
  )
}

export default HideShowElement
