import React, { useEffect } from 'react'

const User = () => {
  useEffect(() => {
    if (true) {
      throw new Error(`Custom Error`)
    }
  }, [])
  return (
    <div>
      <h1>User component</h1>
    </div>
  )
}

export default User
