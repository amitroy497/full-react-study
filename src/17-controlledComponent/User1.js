import React, { useState } from 'react'

function User1() {
  const [data, setData] = useState('Amit Roy')
  return (
    <div>
      <input
        type='text'
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <h1>{data}</h1>
    </div>
  )
}

export default User1
