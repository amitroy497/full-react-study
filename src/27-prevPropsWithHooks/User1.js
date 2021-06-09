import React, { useState } from 'react'
import User2 from './User2'

function User1() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Previous Props with Hooks</h1>
      <User2 data={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
        Update
      </button>
    </div>
  )
}

export default User1
